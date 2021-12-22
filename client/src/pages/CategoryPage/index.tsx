import React, { FC, useEffect, useCallback, useState } from 'react';
import { Grid, Container, Typography, Button } from '@material-ui/core';
import { Page, StandardConfirmationDialog, PaperCustom, Breadcrumb } from 'components';
import { AddBox } from '@material-ui/icons';
import axios, { CancelTokenSource } from 'axios';
import { CATEGORY_BASE_URL } from 'constants/url';
import useDebounce from 'hooks/useDebounce';
import CategoryTable from './components/CategoryTable';
import CategoryModal from './components/CategoryModal';
import Pagination from '@material-ui/lab/Pagination';

const dummyCategory: CategoryModel = {
  id: 0,
  name: '',
  code: '',
  description: ''
};

const CategoryPage: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [query, setQuery] = useState<string>('');
  const [queryString, setQueryString] = useState<string>();
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [categories, setCategories] = useState<CategoryModel[]>([dummyCategory]);
  const [category, setCategory] = useState<CategoryModel | null>(null);
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [orderBy, setOrderBy] = useState<string>('id');
  const [name, setName] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [selectedId, setSelectedId] = useState<number>();
  const [confirmationDelete, setConfirmationDelete] = useState<boolean>(false);
  const [snackbarVariant, setSnackbarVariant] = useState<'success' | 'error'>('success');
  const [message, setMessage] = useState<string>('');
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
    setIsLoadingData(true);

    const getQueryParams = () => {
      const params = new URLSearchParams();
      if (queryString) {
        params.append('keyword', queryString);
      }

      if (name) {
        params.append('keyword', name);
      }

      if (code) {
        params.append('keyword', code);
      }

      if (orderBy || order) {
        params.append('orderBy', orderBy);
        params.append('ordered', order);
      }

      params.append('page', currentPage.toString());

      return params.toString();
    };

    try {
      const { data } = await axios.get(`${CATEGORY_BASE_URL}?${getQueryParams()}`, { cancelToken: cancelTokenSource.token });
      setCategories(data.data);
      setCount(data.meta.last_page);
      setCurrentPage(data.meta.current_page);
    } catch (error) {}
    setIsLoadingData(false);
    return () => {
      cancelTokenSource.cancel();
    };
  }, [queryString, orderBy, order, name, code, currentPage, rowsPerPage]);

  const performActionAndRevertPage = (action: React.Dispatch<React.SetStateAction<any>>, actionParam: any) => {
    setCurrentPage(0);
    action(actionParam);
  };

  const handleSearch = useCallback((searchQuery: string) => {
    performActionAndRevertPage(setQueryString, searchQuery);
  }, []);

  const debouncedSearchTerm = useDebounce(query, 500);

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

  const handleConfirmationDelete = (id: number): React.MouseEventHandler => () => {
    setSelectedId(id);
    setConfirmationDelete(true);
  };

  const handleOnUpdate = (id: number): React.MouseEventHandler => () => {
    setOpen(true);
    setCategory(categories[id]);
  };

  const handleCloseConfirmationDelete = () => {
    setConfirmationDelete(false);
  };

  const deleteCategory = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
    try {
      await axios.delete(`${CATEGORY_BASE_URL}/${selectedId}`, { cancelToken: cancelTokenSource.token });
      setCategories(categories.filter(value => value.id !== selectedId));
    } catch (err) {
      console.log(err);
    }
    setConfirmationDelete(false);
  };

  const handleSnackBar = (open: boolean, variant: 'success' | 'error', message: string) => {
    setSnackbarVariant(variant);
    setOpenSnackbar(open);
    setMessage(message);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleOpenForm = (): void => {
    setOpen(true);
  };

  return (
    <Page title='Kategori'>
      <Container>
        <Grid container direction='row'>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant='h1'> Semua Kategori </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Breadcrumb />
          </Grid>
        </Grid>
        <PaperCustom>
          <Grid container direction='row' spacing={2}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid container direction='row' justify='space-between'>
                <Grid container item lg={8} sm={8} md={8} justify='flex-start' alignItems='center'>
                  <Grid item></Grid>
                </Grid>

                <Grid container item lg={4} sm={4} md={4} justify='flex-end' alignItems='center'>
                  <Grid item>
                    <Button disabled={isLoadingData} onClick={handleOpenForm}>
                      <AddBox fontSize='small' /> &nbsp; Tambah Kategori
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container justify='center' item xl={12} lg={12} md={12} sm={12} xs={12}>
              <CategoryTable
                isLoadingData={isLoadingData}
                categories={categories}
                queryString={queryString}
                order={order}
                orderBy={orderBy}
                name={name}
                setName={setName}
                code={code}
                setCode={setCode}
                setOrder={setOrder}
                setOrderBy={setOrderBy}
                handleConfirmationDelete={handleConfirmationDelete}
                handleOnUpdate={handleOnUpdate}
              />
            </Grid>

            <Grid container justify='center' item xl={12} md={12} sm={12}>
              {categories && categories.length > 0 && (
                <Pagination count={count} onChange={(event, page) => setCurrentPage(page)} page={currentPage} boundaryCount={2} variant='outlined' />
              )}
            </Grid>

            <CategoryModal
              category={category}
              categories={categories}
              open={open}
              setOpen={setOpen}
              setCategories={setCategories}
              setCategory={setCategory}
              handleSnackBar={handleSnackBar}
            />

            <StandardConfirmationDialog
              variant={snackbarVariant}
              titleMessage={snackbarVariant === 'success' ? 'Success!' : 'Error!'}
              message={message}
              open={openSnackbar}
              handleClose={handleCloseSnackbar}
              onConfirm={handleCloseSnackbar}
              noCancelButton={true}
            />

            <StandardConfirmationDialog
              variant={'danger'}
              titleMessage={'Menghapus Data'}
              message={'Apakah kamu yakin akan menghapus data ini?'}
              open={confirmationDelete}
              handleClose={handleCloseConfirmationDelete}
              onConfirm={deleteCategory}
            />
          </Grid>
        </PaperCustom>
      </Container>
    </Page>
  );
};

export default CategoryPage;
