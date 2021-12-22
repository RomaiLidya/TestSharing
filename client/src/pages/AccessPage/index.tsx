import React, { FC, useEffect, useCallback, useState } from 'react';
import { Grid, Container, Typography, makeStyles, Button } from '@material-ui/core';
import { AddBox } from '@material-ui/icons';
import { Page, StandardConfirmationDialog, PaperCustom, Breadcrumb } from 'components';
import axios, { CancelTokenSource } from 'axios';
import { ACCESS_USER_BASE_URL } from 'constants/url';
import useDebounce from 'hooks/useDebounce';
import AccessTable from './components/AccessTable';
import Pagination from '@material-ui/lab/Pagination';
import { dummyAccess } from 'utils/dummy';
import CreateLevelAccessUserModal from './components/CreateLevelAccessUserModal';

const useStyles = makeStyles({
  secondGrid: {},
  spaceTop: {
    paddingBottom: 30
  },
  fourthGrid: {
    marginTop: 20
  }
});

const AccessPage: FC = () => {
  const classes = useStyles();
  const [count, setCount] = useState<number>(0);
  const [query, setQuery] = useState<string>('');
  const [queryString, setQueryString] = useState<string>();
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [access, setAccess] = useState<AccessModel[]>([dummyAccess]);
  const [snackbarVariant, setSnackbarVariant] = useState<'success' | 'error'>('success');
  const [message, setMessage] = useState<string>('');
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [acces, setAcces] = useState<AccessModel | null>(null);

  const fetchData = useCallback(async () => {
    const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
    setIsLoadingData(true);

    const getQueryParams = () => {
      const params = new URLSearchParams();
      if (queryString) {
        params.append('keyword', queryString);
      }

      return params.toString();
    };

    try {
      const { data } = await axios.get(`${ACCESS_USER_BASE_URL}?${getQueryParams()}`, { cancelToken: cancelTokenSource.token });
      setAccess(data.data);
      setCount(data.meta.last_page);
      setCurrentPage(data.meta.current_page);
    } catch (error) {
      console.log('error: ', error);
    }
    setIsLoadingData(false);
    return () => {
      cancelTokenSource.cancel();
    };
  }, [queryString]);

  const performActionAndRevertPage = (action: React.Dispatch<React.SetStateAction<any>>, actionParam: any) => {
    setCurrentPage(1);
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

  const handleCloseSnackbar = (): void => {
    setOpenSnackbar(false);
  };

  const handleSnackBar = (open: boolean, variant: 'success' | 'error', message: string) => {
    setSnackbarVariant(variant);
    setOpenSnackbar(open);
    setMessage(message);
  };

  const handleOnUpdate = (id: number): React.MouseEventHandler => () => {};

  const handleOpenCreateLevelUser = () => {
    setOpen(true);
  };

  return (
    <Page title='Level Akses'>
      <Container>
        <Grid container direction='row'>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant='h1' component='h1'>
              Level Akses
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Breadcrumb />
          </Grid>
        </Grid>

        <Grid container direction='row' justify='space-between' className={classes.spaceTop}>
          <Grid container item lg={6} sm={6} md={6} justify='flex-start' alignItems='center'></Grid>

          <Grid container item lg={6} sm={6} md={6} justify='flex-end' alignItems='center' spacing={2}>
            <Grid item>
              <Button
                onClick={() => {
                  handleOpenCreateLevelUser();
                }}
                disabled={isLoadingData}
              >
                <AddBox fontSize='small' /> &nbsp; Tambah Level Akses
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <PaperCustom>
          <Grid container direction='row' className={classes.secondGrid}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid container direction='row' justify='space-between' className={classes.spaceTop}>
                <Grid container item lg={6} sm={6} md={6} justify='flex-start' alignItems='center'>
                  <Typography>Semua Level Akses</Typography>
                </Grid>

                <Grid container item lg={6} sm={6} md={6} justify='flex-end' alignItems='center' spacing={2}></Grid>
              </Grid>

              <AccessTable
                isLoadingData={isLoadingData}
                count={count}
                currentPage={currentPage}
                rowsPerPage={rowsPerPage}
                access={access}
                queryString={queryString}
                handleOnUpdate={handleOnUpdate}
              />

              <CreateLevelAccessUserModal
                acces={acces}
                access={access}
                open={open}
                setOpen={setOpen}
                setAcces={setAcces}
                setAccess={setAccess}
                handleSnackBar={handleSnackBar}
              />
            </Grid>

            <Grid container justify='center' item xl={12} md={12} sm={12} className={classes.fourthGrid}>
              <Grid item>
                {access.length > 0 && (
                  <Pagination
                    count={count}
                    onChange={(event, page) => setCurrentPage(page)}
                    page={currentPage}
                    boundaryCount={2}
                    variant='outlined'
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        </PaperCustom>

        <StandardConfirmationDialog
          variant={snackbarVariant}
          titleMessage={snackbarVariant === 'success' ? 'Success!' : 'Error!'}
          message={message}
          open={openSnackbar}
          handleClose={handleCloseSnackbar}
          onConfirm={handleCloseSnackbar}
          noCancelButton={true}
        />
      </Container>
    </Page>
  );
};

export default AccessPage;
