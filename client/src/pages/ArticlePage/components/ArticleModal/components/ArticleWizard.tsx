import React, { FC, useState } from 'react';
import axios from 'axios';
import { makeStyles, TextField, Tabs, Tab, Button, Grid, CircularProgress } from '@material-ui/core';
import { ARTICLE_BASE_URL } from 'constants/url';
import { TabPanel, a11yProps } from 'components';
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

const ArticleWizard: FC<Props> = props => {
  const classes = useStyles();
  const { setOpen, handleSnackBar } = props;

  const [title, setTitle] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [value, setValue] = useState(0);
  const [isSubmit, setSubmit] = useState<boolean>(false);
  const [titleMessage, setTitleMessage] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    resetValidation();

    if (!validation()) {
      return;
    }

    setValue(newValue);
  };

  const validation = (): boolean => {
    let valid = true;

    if (title === '' || !title) {
      setTitleMessage('Title tidak boleh kosong.');
      valid = false;
    }

    return valid;
  };

  const resetValidation = () => {
    setTitleMessage('');
  };

  const handleOnSubmit = async () => {
    resetValidation();

    if (!validation()) {
      setSubmit(false);
      return;
    }

    setSubmit(true);

    try {
      const { data } = await axios.post(ARTICLE_BASE_URL, {
        title,
        content,
        status,
        category
      });

      handleSnackBar(true, 'success', 'article berhasil ditambahkan berhasil ditambahkan', { path: '/article/detail', id: data.data.id });
    } catch (error) {
      console.log('error :', error);
      handleSnackBar(true, 'error', 'article gagal ditambahkan');
    } finally {
      setSubmit(false);
    }
  };

  return (
    <Grid container direction='row'>
      <Grid container direction='row' justify='center' className={classes.tabGrid}>
        <Tabs value={value} indicatorColor='primary' textColor='inherit' onChange={handleChange}>
          <Tab label='Article' {...a11yProps(0)} />
        </Tabs>
      </Grid>

      <Grid container direction='row'>
        <TabPanel value={value} index={0}>
          <Grid container direction='row' spacing={1} justify='space-between'>
            <Grid item lg={6} sm={6} md={6} xs={6}>
              <TextField
                id='title'
                required
                fullWidth
                label='Title'
                value={title}
                onChange={event => setTitle(event.target.value)}
                error={titleMessage !== ''}
                helperText={titleMessage}
              />
            </Grid>

            <Grid item lg={6} sm={6} md={6} xs={6}>
              <TextField id='category' required fullWidth label='category' value={category} onChange={event => setCategory(event.target.value)} />
            </Grid>

            <Grid item lg={12} sm={12} md={12} xs={12}>
              <ReactQuill id='notes' value={content} onChange={(value: any) => setContent(value)} placeholder='Catatan' />
            </Grid>

            <Grid item lg={12} sm={12} md={12} xs={12}>
              <TextField id='status' required fullWidth label='status' value={status} onChange={event => setStatus(event.target.value)} />{' '}
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1} className={classes.tabUpload}></TabPanel>
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

export default ArticleWizard;
