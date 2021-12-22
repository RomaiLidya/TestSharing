import React, { FC, useEffect, useCallback, useState, useContext, Fragment } from 'react';
import axios, { CancelTokenSource } from 'axios';
import { Grid, Container, Typography, makeStyles, Button, TextField, CircularProgress, Theme, Tabs, Tab } from '@material-ui/core';
import { AddBox } from '@material-ui/icons';
import { Page, StandardConfirmationDialog, PaperCustom, Breadcrumb } from 'components';
import { PRODUCT_BASE_URL, CATEGORY_BASE_URL } from 'constants/url';
import { Autocomplete } from '@material-ui/lab';
import { TabPanel, a11yProps } from 'components';
import { CartContext } from 'contexts/CartContext';
import { dummyProduct, dummyCategory, dummyZone,  dummyCartList } from 'utils/dummy';
import { CurrentUserContext } from 'contexts/CurrentUserContext';
import useRouter from 'hooks/useRouter';
import useDebounce from 'hooks/useDebounce';
import ProductTable from './components/ProductTable';
import ProductModal from './components/ProductModal';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme: Theme) => ({
  fourthGrid: {
    marginTop: 20,
  },
}));

const ProductPage: FC = () => {
  const classes = useStyles();
  const { history } = useRouter();
  const { setCart } = useContext(CartContext);

  const [open, setOpen] = useState<boolean>(false);
  const [openPackage, setOpenPackage] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [query, setQuery] = useState<string>('');
  const [queryString, setQueryString] = useState<string>();
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState<ProductModel[]>([dummyProduct]);
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [orderBy, setOrderBy] = useState<string>('id');
  const [selectedId, setSelectedId] = useState<number>();
  const [confirmationDelete, setConfirmationDelete] = useState<boolean>(false);
  const [snackbarVariant, setSnackbarVariant] = useState<'success' | 'error'>('success');
  const [message, setMessage] = useState<string>('');
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [isPackage, setPackage] = useState<boolean>(false);
  const [categories, setCategories] = useState<CategoryModel[]>([dummyCategory]);
  const [category, setCategory] = useState<CategoryModel>();
  const [zones, setZones] = useState<ZoneModel[]>([dummyZone]);
  const [zone, setZone] = useState<ZoneModel>(dummyZone);
  const [link, setLink] = useState<{ path: string; id: number }>();
  const [loadCategory, setLoadCategory] = useState<boolean>(false);
  const [cartList, setCartList] = useState<CartListModel[]>([]);
  const [value, setValue] = useState<number>(0);
  const { currentUser } = useContext(CurrentUserContext);

  const handleChange = ({}, newValue: number) => {
    setValue(newValue);
    setPackage(newValue === 1);
  };

  const fetchData = useCallback(async () => {
    const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
    setIsLoadingData(true);

    const getQueryParams = () => {
      const params = new URLSearchParams();
      if (queryString) {
        params.append('keyword', queryString);
      }

      if (orderBy || order) {
        params.append('orderBy', orderBy);
        params.append('ordered', order);
      }

      if (category) {
        params.append('CategoryId', String(category.id));
      }

      params.append('isProductPackage', String(isPackage));
      params.append('page', currentPage.toString());

      return params.toString();
    };

    try {
      const { data } = await axios.get(`${PRODUCT_BASE_URL}?${getQueryParams()}`, { cancelToken: cancelTokenSource.token });
      setProducts(data.data);
      setCount(data.meta.last_page);
      setCurrentPage(data.meta.current_page);
    } catch (error) {
      console.log('error: ', error);
    } finally {
      setIsLoadingData(false);
    }

    return () => {
      cancelTokenSource.cancel();
    };
  }, [queryString, orderBy, order, currentPage, category, isPackage]);

  const performActionAndRevertPage = (action: React.Dispatch<React.SetStateAction<any>>, actionParam: any) => {
    setCurrentPage(1);
    action(actionParam);
  };

  const handleSearch = useCallback((searchQuery: string) => {
    performActionAndRevertPage(setQueryString, searchQuery);
  }, []);

  const debouncedSearchTerm = useDebounce(query, 500);

  const handleConfirmationDelete =
    (id: number): React.MouseEventHandler =>
    () => {
      setSelectedId(id);
      setConfirmationDelete(true);
    };

  const handleCloseConfirmationDelete = () => {
    setConfirmationDelete(false);
  };

  const deleteProduct = async () => {
    try {
      await axios.delete(`${PRODUCT_BASE_URL}/${selectedId}`);
      setProducts(products.filter((value) => value.id !== selectedId));
    } catch (err) {
      console.log(err);
    }
    setConfirmationDelete(false);
  };

  const handleSnackBar = (open: boolean, variant: 'success' | 'error', message: string, link?: any) => {
    setSnackbarVariant(variant);
    setOpenSnackbar(open);
    setMessage(message);

    if (link) {
      setLink(link);
    }
  };

  const handleCloseSnackbar = (): void => {
    setOpenSnackbar(false);
  };

  const handleConfirmationSnackbar = () => {
    setOpen(false);
    setQueryString('');
    setOpenPackage(false);
    setOpenSnackbar(false);

    if (link) {
      history.push(link.path, { id: link.id });
    }
  };

  const handleOpenForm = (): void => {
    setOpen(true);
  };

  const handleOpenPackage = (): void => {
    setOpenPackage(true);
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

  useEffect(() => {
    if (debouncedSearchTerm.length >= 3) {
      handleSearch(debouncedSearchTerm);
    } else if (debouncedSearchTerm.length === 0) {
      handleSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, handleSearch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAddOn =
    (id: number): React.MouseEventHandler =>
    () => {
      const currentProduct = products.find((value) => value.id === id);
      if (currentProduct) {
        setCartList((prevState) => {
          if (prevState.some((value) => value.ProductId === id)) {
            return prevState.map((value) => {
              if (value.ProductId === id) {
                value.totalItem = value.totalItem + 1;
                value.totalPrice = value.price * value.totalItem;
              }
              return value;
            });
          } else {
            let currentPrice = currentProduct.ProductPrice && currentProduct.ProductPrice.find((value) => value.ZoneId === zone.id);

            return [
              ...prevState,
              {
                ...dummyCartList,
                typeUnit: currentProduct.typeUnit,
                price: currentPrice ? currentPrice.price : 0,
                ProductId: id,
                totalItem: 1,
                totalPrice: currentPrice ? currentPrice.price : 0,
                productCode: currentProduct.productCode,
                productName: currentProduct.productName,
                productImage: currentProduct.ProductImages && currentProduct.ProductImages.length > 0 ? currentProduct.ProductImages[0].url : '',
                Product: currentProduct,
              },
            ];
          }
        });
      }
    };

  const handleSubtract =
    (id: number): React.MouseEventHandler =>
    () => {
      setCartList((prevState) => {
        if (prevState.find((value) => value.ProductId === id && value.totalItem > 1)) {
          return prevState.map((value) => {
            if (value.ProductId === id && value.totalItem > 1) {
              value.totalItem = value.totalItem - 1;
              value.totalPrice = value.price * value.totalItem;
            }
            return value;
          });
        } else {
          return prevState.filter((value) => value.ProductId !== id);
        }
      });
    };


  return (
    <Page title='Produk'>
      <Container>
        <Grid container direction='row' spacing={1}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant='h1' component='h1'>
              Semua Post
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Breadcrumb />
          </Grid>
        </Grid>

        <Grid container direction='row' sm={12} xs={12} spacing={1} justify='flex-end'>
          <Grid item>
            <Button onClick={handleOpenForm}>
              <AddBox fontSize='small' /> &nbsp; Add New
            </Button>
          </Grid>
        </Grid>

        <PaperCustom>
          <Grid item container direction='row' justify='space-between'>
            <Tabs value={value} indicatorColor='primary' onChange={handleChange} aria-label='disabled tabs example'>
              <Tab label='Post' {...a11yProps(0)} />
            </Tabs>
          </Grid>

          <TabPanel value={value} index={value > 0 ? 1 : 0}>
            <Grid direction='row' container spacing={1}>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <Autocomplete
                  id='category'
                  fullWidth
                  options={categories}
                  getOptionLabel={(option) => option.name}
                  getOptionSelected={(option, value) => option.id === value.id}
                  onChange={(event: any, value: any) => value && setCategory(value)}
                  onOpen={() => handleSearchCategory('')}
                  loading={loadCategory}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      label='Semua Kategori'
                      onChange={(e) => handleSearchCategory(e.target.value)}
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <Fragment>
                            {loadCategory && <CircularProgress color='inherit' size={20} />}
                            {params.InputProps.endAdornment}
                          </Fragment>
                        ),
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Grid container item lg={12} md={12} sm={12} spacing={2} style={{ marginTop: '10px' }}>
              {products.length === 0 ? (
                <Typography align='center'>Post belum tersedia</Typography>
              ) : (
                <ProductTable
                  zone={zone}
                  isLoadingData={isLoadingData}
                  products={products}
                  cartList={cartList}
                  handleConfirmationDelete={handleConfirmationDelete}
                  handleAddOn={handleAddOn}
                  handleSubtract={handleSubtract}
                />
              )}
            </Grid>

            <Grid item container justify='center' xl={12} md={12} sm={12} className={classes.fourthGrid}>
              {products.length > 0 && (
                <Pagination count={count} onChange={(event, page) => setCurrentPage(page)} page={currentPage} boundaryCount={2} variant='outlined' />
              )}
            </Grid>
          </TabPanel>
        
        </PaperCustom>

        <ProductModal open={open} setOpen={setOpen} handleSnackBar={handleSnackBar} />

        <StandardConfirmationDialog
          variant={snackbarVariant}
          titleMessage={snackbarVariant === 'success' ? 'Success!' : 'Error!'}
          message={message}
          open={openSnackbar}
          handleClose={snackbarVariant === 'success' ? handleConfirmationSnackbar : handleCloseSnackbar}
          onConfirm={handleConfirmationSnackbar}
          noCancelButton={true}
        />

        <StandardConfirmationDialog
          variant={'danger'}
          titleMessage={'Delete'}
          message={'Apakah kamu yakin menghapus data ini?'}
          open={confirmationDelete}
          handleClose={handleCloseConfirmationDelete}
          onConfirm={deleteProduct}
        />
      </Container>
    </Page>
  );
};

export default ProductPage;
