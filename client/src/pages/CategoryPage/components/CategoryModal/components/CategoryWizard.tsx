import React, { FC, useState, useEffect } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import axios, { CancelTokenSource } from 'axios';
import { CATEGORY_BASE_URL } from 'constants/url';

interface Props {
  categories: CategoryModel[];
  category: CategoryModel | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCategories: React.Dispatch<React.SetStateAction<CategoryModel[]>>;
  setCategory: React.Dispatch<React.SetStateAction<CategoryModel | null>>;
  handleSnackBar: (open: boolean, variant: 'success' | 'error', message: string) => void;
}

const CategoryWizard: FC<Props> = props => {
  const { categories, category, setCategories, setCategory, setOpen, handleSnackBar } = props;
  const [id, setId] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const [isSubmit, setSubmit] = useState<boolean>(false);
  const [nameMessage, setNameMessage] = useState<string>('');
  const [codeMessage, setCodeMessage] = useState<string>('');

  useEffect(() => {
    if (!category) {
      return;
    }

    setId(category.id);
    setName(category.name);
    setCode(category.code);
    setDescription(category.description);
  }, [category]);

  const handleOnCancel = (): void => {
    setOpen(false);
    resetForm();
  };

  const handleOnSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
    resetValidation();

    if (!validation()) {
      return;
    }

    try {
      setSubmit(true);
      const { data } = await axios.post(
        `${CATEGORY_BASE_URL}`,
        {
          id,
          name,
          description,
          code
        },
        {
          cancelToken: cancelTokenSource.token
        }
      );

      if (category) {
        setCategories(
          categories.map(value => {
            if (value.id === data.data.id) {
              return data.data;
            }
            return value;
          })
        );
        resetForm();
      } else {
        setCategories([data.data, ...categories]);
        resetForm();
      }

      setOpen(false);
      handleSnackBar(true, 'success', category ? 'Kategori berhasil diperbaharui.' : 'Kategori berhasil ditambahkan.');
    } catch (error) {
      console.log('error :', error);
      errorRequest(error.data.error);
      handleSnackBar(true, 'error', category ? 'Kategori gagal diperbaharui.' : 'Kategori gagal ditambahkan.');
    }
    setSubmit(false);
  };

  const validation = (): boolean => {
    let valid = true;

    if (name === '' || !name) {
      setNameMessage('Nama tidak boleh kosong.');
      valid = false;
    }

    if (code === '' || !code) {
      setCodeMessage('Kode tidak boleh kosong.');
      valid = false;
    } else if (code.length < 3) {
      setCodeMessage('Kode harus memiliki minimal 3 karakter');
      valid = false;
    }

    return valid;
  };

  const resetValidation = () => {
    setNameMessage('');
    setCodeMessage('');
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setId(0);
    setCode('');
    setCategory(null);
  };

  const errorRequest = (error: { [key: string]: string[] }) => {
    if (error) {
      if (error.name) {
        setNameMessage(error.name[0]);
      }

      if (error.code) {
        setCodeMessage(error.code[0]);
      }
    }
  };

  return (
    <Grid container direction='row' spacing={2}>
      <Grid item lg={12} sm={12} md={12} xs={12}>
        <TextField
          id='name'
          name='name'
          required
          fullWidth
          label='Nama Kategori'
          value={name}
          onChange={event => setName(event.target.value)}
          error={nameMessage !== ''}
          helperText={nameMessage}
        />
      </Grid>

      <Grid item lg={12} sm={12} md={12} xs={12}>
        <TextField
          id='code'
          name='code'
          required
          fullWidth
          label='Kode'
          value={code}
          onChange={event => setCode(event.target.value)}
          error={codeMessage !== ''}
          helperText={codeMessage}
        />
      </Grid>

      <Grid item lg={12} sm={12} md={12} xs={12}>
        <TextField
          id='Deskripsi'
          rows={4}
          multiline
          fullWidth
          size='small'
          variant='outlined'
          label='Deskripsi'
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </Grid>

      <Grid container item lg={12} md={12} sm={12} xs={12} spacing={2} justify='center'>
        <Grid item>
          <Button disabled={isSubmit} color='secondary' onClick={handleOnCancel}>
            Batal
          </Button>
        </Grid>
        <Grid item>
          <Button type='submit' disabled={isSubmit} onClick={handleOnSubmit}>
            Simpan
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CategoryWizard;
