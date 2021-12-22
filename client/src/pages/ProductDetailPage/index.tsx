import React, { FC, useEffect, useState, Fragment } from 'react';
import { Grid, Container, Typography, makeStyles, Button, Paper } from '@material-ui/core';
import { DeleteRounded, EditRounded } from '@material-ui/icons';
import { Page, StandardConfirmationDialog, Breadcrumb } from 'components';
import axios, { CancelTokenSource } from 'axios';
import { PRODUCT_BASE_URL } from 'constants/url';
import { dummyProduct, dummyProductImage } from 'utils/dummy';
import { GREY_6 } from 'constants/colors';
import ImageSlider from './components/ImageSlider';
import ProductDetail from './components/ProductDetail';
import ProductModal from './components/ProductModal';
import useRouter from 'hooks/useRouter';

const useStyles = makeStyles({
  paper: {
    padding: 15,
    marginTop: 15,
    marginBottom: 20,
  },
  defaultImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '409px',
    height: '409px',
    backgroundColor: GREY_6,
  },
});

const ProductDetailPage: FC = () => {
  const classes = useStyles();
  const { location, history } = useRouter();
  // eslint-disable-next-line
  const params: any = location.state;

  const [open, setOpen] = useState<boolean>(false);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
  const [id, setId] = useState<number>();
  const [product, setProduct] = useState<ProductModel>(dummyProduct);
  const [productImages, setProductImages] = useState<ProductImageModel[]>([dummyProductImage]);
  const [confirmationDelete, setConfirmationDelete] = useState<boolean>(false);
  const [snackbarVariant, setSnackbarVariant] = useState<'success' | 'error'>('success');
  const [message, setMessage] = useState<string>('');
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [zone, setZone] = useState<ZoneModel[]>([]);
  const [isDelete, setDelete] = useState<boolean>(false);

  const fetchData = async () => {
    const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
    setIsLoadingData(true);
    try {
      const { data } = await axios.get(`${PRODUCT_BASE_URL}/${params.id}`, { cancelToken: cancelTokenSource.token });
      setProduct(data.data);
      setProductImages(data.data.ProductImages);
      setId(data.data.id);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleConfirmationDelete = (): void => {
    setConfirmationDelete(true);
  };

  const handleCloseConfirmationDelete = (): void => {
    setConfirmationDelete(false);
  };

  const deleteProduct = async () => {
    const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
    try {
      await axios.delete(`${PRODUCT_BASE_URL}/${id}`, { cancelToken: cancelTokenSource.token });
      handleSnackBar(true, 'success', 'Produk berhasil dihapus.', true);
    } catch (err) {
      console.log(err);
      handleSnackBar(true, 'error', 'Produk gagal dihapus.');
    } finally {
      setConfirmationDelete(false);
    }
  };

  const handleSnackBar = (open: boolean, variant: 'success' | 'error', message: string, hasDelete?: boolean): void => {
    setSnackbarVariant(variant);
    setOpenSnackbar(open);
    setMessage(message);
    setDelete(hasDelete || false);
  };

  const handleCloseSnackbar = (): void => {
    setOpenSnackbar(false);
  };

  const handleOpenForm = (): void => {
    setOpen(true);
  };

  const handleConfirmSnackbar = () => {
    setOpenSnackbar(false);
    if (isDelete) {
      history.push('/post');
    }
  };

  return (
    <Page title='Produk'>
      <Container>
        <Grid container direction='row'>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant='h1' component='h1'>
              Semua Post
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Breadcrumb />
          </Grid>
        </Grid>

        <Grid container direction='row' justify='space-between' spacing={3}>
          <Grid container item lg={8} sm={8} md={8} justify='flex-start'></Grid>

          <Grid container item lg={4} sm={4} md={4} spacing={2} justify='flex-end'>
            <Grid item>
              <Button disabled={isLoadingData} color='secondary' onClick={handleConfirmationDelete}>
                <DeleteRounded fontSize='small' /> &nbsp; Hapus
              </Button>
            </Grid>

            <Grid item>
              <Button disabled={isLoadingData} onClick={handleOpenForm}>
                <EditRounded fontSize='small' /> &nbsp; Edit
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Paper elevation={2} className={classes.paper}>
          <Grid container direction='row' spacing={2} justify='space-between'>
            <Grid container justify='center' item xl={6} lg={6} md={6} sm={12} xs={12}>
              {isLoadingData ? (
                <Typography>Menunggu data...</Typography>
              ) : product.ProductImages && product.ProductImages.length > 0 ? (
                <ImageSlider productImages={productImages} />
              ) : (
                <div className={classes.defaultImage}>
                  <div>
                    <h3 style={{ textAlign: 'center' }}>{product.productName}</h3>
                  </div>
                </div>
              )}
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <ProductDetail product={product} isLoading={isLoadingData} />
            </Grid>

            <ProductModal open={open} setOpen={setOpen} product={product} setProduct={setProduct} zone={zone} handleSnackBar={handleSnackBar} />

            <StandardConfirmationDialog
              variant={snackbarVariant}
              titleMessage={snackbarVariant === 'success' ? 'Success!' : 'Error!'}
              message={message}
              open={openSnackbar}
              handleClose={snackbarVariant === 'success' ? handleConfirmSnackbar : handleCloseSnackbar}
              onConfirm={handleCloseSnackbar}
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
          </Grid>
        </Paper>
      </Container>
    </Page>
  );
};

export default ProductDetailPage;
