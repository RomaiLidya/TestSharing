import React, { FC, useEffect, useCallback, useState, useContext, Fragment } from 'react';
import axios, { CancelTokenSource } from 'axios';
import { Grid, Container, Typography, makeStyles, Button, Theme, Tabs, Tab } from '@material-ui/core';
import { AddBox } from '@material-ui/icons';
import { Page, StandardConfirmationDialog, PaperCustom, Breadcrumb } from 'components';
import { ARTICLE_BASE_URL } from 'constants/url';
import { TabPanel, a11yProps } from 'components';
import { CartContext } from 'contexts/CartContext';
import { dummyArticle } from 'utils/dummy';
import useRouter from 'hooks/useRouter';
import useDebounce from 'hooks/useDebounce';
import ArticleTable from './components/ArticleTable';
import ArticleModal from './components/ArticleModal';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme: Theme) => ({
  fourthGrid: {
    marginTop: 20
  }
}));

const ArticlePage: FC = () => {
  const classes = useStyles();
  const { history } = useRouter();
  const { setCart } = useContext(CartContext);

  const [open, setOpen] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [query, setQuery] = useState<string>('');
  const [queryString, setQueryString] = useState<string>();
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [articles, setArticles] = useState<ArticleModel[]>([dummyArticle]);
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [orderBy, setOrderBy] = useState<string>('id');
  const [selectedId, setSelectedId] = useState<number>();
  const [confirmationDelete, setConfirmationDelete] = useState<boolean>(false);
  const [snackbarVariant, setSnackbarVariant] = useState<'success' | 'error'>('success');
  const [message, setMessage] = useState<string>('');
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [link, setLink] = useState<{ path: string; id: number }>();
  const [value, setValue] = useState<number>(0);

  const handleChange = ({}, newValue: number) => {
    setValue(newValue);
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

      params.append('page', currentPage.toString());

      return params.toString();
    };

    try {
      const { data } = await axios.get(`${ARTICLE_BASE_URL}?${getQueryParams()}`, { cancelToken: cancelTokenSource.token });
      setArticles(data.data);
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
  }, [queryString, orderBy, order, currentPage]);

  const performActionAndRevertPage = (action: React.Dispatch<React.SetStateAction<any>>, actionParam: any) => {
    setCurrentPage(1);
    action(actionParam);
  };

  const handleSearch = useCallback((searchQuery: string) => {
    performActionAndRevertPage(setQueryString, searchQuery);
  }, []);

  const debouncedSearchTerm = useDebounce(query, 500);

  const handleConfirmationDelete = (id: number): React.MouseEventHandler => () => {
    setSelectedId(id);
    setConfirmationDelete(true);
  };

  const handleCloseConfirmationDelete = () => {
    setConfirmationDelete(false);
  };

  const deleteArticle = async () => {
    try {
      await axios.delete(`${ARTICLE_BASE_URL}/${selectedId}`);
      setArticles(articles.filter(value => value.id !== selectedId));
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
    setOpenSnackbar(false);

    if (link) {
      history.push(link.path, { id: link.id });
    }
  };

  const handleOpenForm = (): void => {
    setOpen(true);
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

  return (
    <Page title='Article'>
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
              <AddBox fontSize='small' /> &nbsp; Add Post
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
            <Grid container item lg={12} md={12} sm={12} spacing={2} style={{ marginTop: '10px' }}>
              {articles.length === 0 ? (
                <Typography align='center'>Post belum tersedia</Typography>
              ) : (
                <ArticleTable isLoadingData={isLoadingData} articles={articles} handleConfirmationDelete={handleConfirmationDelete} />
              )}
            </Grid>

            <Grid item container justify='center' xl={12} md={12} sm={12} className={classes.fourthGrid}>
              {articles.length > 0 && (
                <Pagination count={count} onChange={(event, page) => setCurrentPage(page)} page={currentPage} boundaryCount={2} variant='outlined' />
              )}
            </Grid>
          </TabPanel>
        </PaperCustom>

        <ArticleModal open={open} setOpen={setOpen} handleSnackBar={handleSnackBar} />

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
          onConfirm={deleteArticle}
        />
      </Container>
    </Page>
  );
};

export default ArticlePage;
