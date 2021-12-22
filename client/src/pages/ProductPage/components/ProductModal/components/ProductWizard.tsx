import React, { FC, Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, TextField, MenuItem, Tabs, Tab, Button, Typography, Grid, CircularProgress, FormHelperText } from '@material-ui/core';
import { PRODUCT_BASE_URL, CATEGORY_BASE_URL, GET_CODE_BASE_URL} from 'constants/url';
import { useDropzone, FileWithPath } from 'react-dropzone';
import { dummyCategory } from 'utils/dummy';
import { TabPanel, a11yProps } from 'components';
import DropZone from './DropZone';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TypeUnit from 'typings/enum/TypeUnit';
import NumberFormatMask from 'components/NumberFormatMask';
import ReactQuill from 'react-quill';

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSnackBar: (open: boolean, variant: 'success' | 'error', message: string, link?: any) => void;
}

const useStyles = makeStyles({
  notesGrid: {
    marginTop: 10
  },
  buttonGrid: {
    marginTop: 10
  },
  tabGrid: {
    marginBottom: 10
  },
  tabUpload: {
    width: '100%'
  }
});

const ProductWizard: FC<Props> = props => {
  const classes = useStyles();
  const { setOpen, handleSnackBar } = props;
  const [productName, setProductName] = useState<string>('');
  const [productCode, setProductCode] = useState<string>('');
  const [purchasePrice, setPurchasePrice] = useState<number>(0);
  const [typeUnit, setTypeUnit] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<CategoryModel>(dummyCategory);
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [loadCategory, setLoadCategory] = useState<boolean>(false);
  const [value, setValue] = useState(0);
  const [isSubmit, setSubmit] = useState<boolean>(false);
  const [productNameMessage, setProductNameMessage] = useState<string>('');
  const [productCodeMessage, setProductCodeMessage] = useState<string>('');
  const [typeUnitMessage, setTypeUnitMessage] = useState<string>('');
  const [imageMessage, setImageMessage] = useState<string>('');
  const [categoryMessage, setCategoryMessage] = useState<string>('');
  const [image, setImage] = useState<{ path: string }[]>([]);
  const [imageBlob, setImageBlob] = useState<FileWithPath[]>([]);
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [productPrice, setProductPrice] = useState<ProductPriceModel[]>([]);
  const [zone, setZone] = useState<ZoneModel[]>([]);
  const [loadZone, setLoadZone] = useState<boolean>(false);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: ['image/jpeg', 'image/png'],
    maxFiles: 5,
    onDrop: (acceptedFiles: FileWithPath[]) => {
      setImageUrl([]);
      setImage([]);
      setImageBlob([]);
      uploadImage(acceptedFiles);
    }
  });

  const uploadImage = (files: FileWithPath[]) => {
    files.map((value: any) => {
      setImageUrl(prevState => [...prevState, URL.createObjectURL(value)]);
      setImage(prevState => [...prevState, { path: `${productCode}${new Date().getTime()}.${value.name.split('.').pop()}` }]);
      setImageBlob(prevState => [...prevState, value]);
    });
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    resetValidation();

    if (!validation()) {
      return;
    }

    setValue(newValue);
  };

  const handleSearchCategory = async (value: string) => {
    const params = new URLSearchParams();
    params.append('keyword', value);
    setLoadCategory(true);
    try {
      const { data } = await axios.get(`${CATEGORY_BASE_URL}?${params.toString()}`);
      setCategories(data.data);
      setLoadCategory(false);
    } catch (error) {
      console.log('error :', error);
      setLoadCategory(false);
    }
  };

  const handleCheckCode = async () => {
    setProductCodeMessage('');
    try {
      const { data } = await axios.post(`${PRODUCT_BASE_URL}/validate-code`, {
        id: 0,
        code: productCode
      });

      if (data.data.validate) {
        setProductCodeMessage('Kode Product sudah ada.');
      }
    } catch (error) {
      console.log('error :', error);
    }
  };

  const validation = (): boolean => {
    let valid = true;

    if (productName === '' || !productName) {
      setProductNameMessage('Nama Produk tidak boleh kosong.');
      valid = false;
    }

    if (typeUnit === '' && !typeUnit) {
      setTypeUnitMessage('Satuan Produk tidak boleh kosong.');
      valid = false;
    }

    if (!category) {
      setCategoryMessage('Kategori tidak boleh kosong');
      valid = false;
    }

    return valid;
  };

  const resetValidation = () => {
    setProductNameMessage('');
    setProductCodeMessage('');
    setTypeUnitMessage('');
    setCategoryMessage('');
  };

  const handlePrice = (value: number, index: number) => {
    const newPrice = [...productPrice];
    newPrice[index].price = value;
    setProductPrice(newPrice);
  };

  useEffect(() => {
    if (!category || category.id === 0) {
      setProductCode('');
      return;
    }

    const getCode = async () => {
      try {
        const { data } = await axios.post(`${GET_CODE_BASE_URL}`, { CategoryId: category.id });
        setProductCode(data.code);
      } catch (error) {
        console.log('error :', error);
      }
    };

    getCode();
  }, [category]);

 
  const handleOnSubmit = async () => {
    resetValidation();

    if (!validation()) {
      setSubmit(false);
      return;
    }

    setSubmit(true);

    try {
      const { data } = await axios.post(PRODUCT_BASE_URL, {
        productName,
        productCode,
        purchasePrice,
        description,
        typeUnit,
        isProductPackage: false,
        CategoryId: category!.id,
        image: image || [],
        price: productPrice || []
      });

      if (data.data.ProductImages.length) {
        let i = 0;
        data.data.ProductImages.map(async (value: any, index: number) => {
          if (image.filter(img => img.path === value.path).length) {
            // @ts-ignore
            const newImageKey = value.path;
            const fileExtension = newImageKey.split('.').pop();

            const myHeaders = new Headers();
            myHeaders.append('Content-Type', `image/${fileExtension}`);

            const config: RequestInit = {
              method: 'PUT',
              headers: myHeaders,
              body: imageBlob[i]
            };

            await fetch(value.url, config)
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));

            i++;
          }
        });
      }

      handleSnackBar(true, 'success', 'Produk berhasil ditambahkan', { path: '/post/detail', id: data.data.id });
    } catch (error) {
      console.log('error :', error);
      handleSnackBar(true, 'error', 'Produk gagal ditambahkan');
    } finally {
      setSubmit(false);
    }
  };

  return (
    <Grid container direction='row'>
      <Grid container direction='row' justify='center' className={classes.tabGrid}>
        <Tabs value={value} indicatorColor='primary' textColor='inherit' onChange={handleChange}>
          <Tab label='Informasi' {...a11yProps(0)} />
          <Tab label='Upload Gambar' {...a11yProps(1)} />
        </Tabs>
      </Grid>

      <Grid container direction='row'>
        <TabPanel value={value} index={0}>
          {loadZone && <CircularProgress color='inherit' size={15} />}

          <Grid container direction='row' spacing={1} justify='space-between'>
            <Grid item lg={6} sm={6} md={6} xs={6}>
              <Autocomplete
                id='category'
                value={category}
                options={categories}
                getOptionLabel={option => option.name}
                getOptionSelected={(option, value) => option.id === value.id}
                onChange={(event: any, value: any) => setCategory(value)}
                onOpen={e => handleSearchCategory('')}
                loading={loadCategory}
                renderInput={params => (
                  <TextField
                    {...params}
                    required
                    label='Pilih Kategori Produk'
                    size='small'
                    onChange={e => handleSearchCategory(e.target.value)}
                    variant='outlined'
                    error={categoryMessage !== ''}
                    helperText={categoryMessage}
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <Fragment>
                          {loadCategory && <CircularProgress color='inherit' size={20} />}
                          {params.InputProps.endAdornment}
                        </Fragment>
                      )
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item lg={6} sm={6} md={6} xs={6}>
              <TextField
                id='productCode'
                required
                fullWidth
                label='Kode Produk'
                value={productCode}
                onChange={event => setProductCode(event.target.value)}
                error={productCodeMessage !== ''}
                helperText={productCodeMessage}
                onBlur={handleCheckCode}
              />
            </Grid>

            <Grid item lg={6} sm={6} md={6} xs={6}>
              <TextField
                id='productName'
                required
                fullWidth
                label='Nama Produk'
                value={productName}
                onChange={event => setProductName(event.target.value)}
                error={productNameMessage !== ''}
                helperText={productNameMessage}
              />
            </Grid>

            <Grid item lg={6} sm={6} md={6} xs={6}>
              <TextField
                id='type'
                required
                fullWidth
                select
                value={typeUnit as string}
                label='Pilih Satuan Barang'
                onChange={event => setTypeUnit(event.target.value as string)}
                error={typeUnitMessage !== ''}
              >
                {Object.entries(TypeUnit).map(([value, key]) => (
                  <MenuItem key={key} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item lg={12} sm={12} md={12} xs={12}>
              <ReactQuill id='notes' value={description} onChange={(value: any) => setDescription(value)} placeholder='Catatan' />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1} className={classes.tabUpload}>
          <FormHelperText error={imageMessage !== ''}>{imageMessage}</FormHelperText>
          <DropZone getRootProps={getRootProps} getInputProps={getInputProps} acceptedFiles={acceptedFiles} imageUrl={imageUrl} />
        </TabPanel>

        <TabPanel value={value} index={2} className={classes.tabUpload}>
          <Grid direction='row' container spacing={2} item lg={12} sm={12} md={12} xs={12}>
            {productPrice.length > 0 && zone.length > 0 ? (
              zone.map((value, index) => (
                <Grid item lg={12} sm={12} md={12} xs={12}>
                  <TextField
                    id={'productPrice' + index}
                    required
                    fullWidth
                    label={'Harga Jual' + value.name}
                    value={productPrice[index].price !== 0 && productPrice[index].price}
                    onChange={event => handlePrice(+event.target.value, index)}
                    InputProps={{
                      inputComponent: NumberFormatMask as any
                    }}
                  />
                </Grid>
              ))
            ) : (
              <Grid item lg={12} sm={12} md={12} xs={12}>
                <Typography variant='inherit' align='center'>
                  Rute belum ada.
                </Typography>
              </Grid>
            )}
          </Grid>
        </TabPanel>
      </Grid>

      <Grid container item lg={12} md={12} sm={12} xs={12} justify='flex-end' className={classes.buttonGrid}>
        <Button color='secondary' disabled={isSubmit} onClick={() => setOpen(false)}>
          Batal 
        </Button>
        &nbsp; &nbsp;
         <Button value={value} onClick={event => (value < 1 ? handleChange(event, value + 1) : handleOnSubmit())}>
          {value < 1 ? 'Selanjutnya' : isSubmit ? <CircularProgress color='inherit' size={20} /> : 'Publish'}
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductWizard;
