import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button, Theme, withStyles, FormControl, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';
import { ACCESS_USER_BASE_URL } from 'constants/url';
import axios, { CancelTokenSource } from 'axios';

interface Props {
  access: AccessModel[];
  acces: AccessModel | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAccess: React.Dispatch<React.SetStateAction<AccessModel[]>>;
  setAcces: React.Dispatch<React.SetStateAction<AccessModel | null>>;
  handleSnackBar: (open: boolean, variant: 'success' | 'error', message: string) => void;
}

const AddButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: '#EF965A',
    '&:hover': {
      backgroundColor: orange[700]
    }
  }
}))(Button);

const useStyles = makeStyles((theme: Theme) => ({
  controlDiv: {
    '& > :nth-child(n+2)': {
      marginLeft: theme.spacing(2)
    }
  },
  cancelButton: {
    marginRight: theme.spacing(1)
  },
  addButton: {
    color: '#FFFFFF'
  }
}));

const CreateLevelAccessForm: React.FC<Props> = props => {
  const classes = useStyles();

  const { acces, setAcces, access, setAccess, handleSnackBar, setOpen } = props;
  const [level, setLevel] = useState<string>('');
  const [isSubmit, setSubmit] = useState<boolean>(false);
  const [levelMessage, setLevelMessage] = useState<string>('');
  const handleChange = () => {};

  useEffect(() => {
    if (!acces) {
      return;
    }

    setLevel(acces.level);
  }, [acces]);

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
        `${ACCESS_USER_BASE_URL}`,
        {
          level
        },
        {
          cancelToken: cancelTokenSource.token
        }
      );

      if (acces) {
        setAccess(
          access.map(value => {
            if (value.id === data.data.id) {
              return data.data;
            }
            return value;
          })
        );
        resetForm();
      } else {
        setAccess([data.data, ...access]);
        resetForm();
      }

      setOpen(false);
      handleSnackBar(true, 'success', acces ? 'Level Akses berhasil diperbaharui.' : 'Level Akses berhasil ditambahkan.');
    } catch (error) {
      console.log('error :', error);
      errorRequest(error.data.error);
      handleSnackBar(true, 'error', acces ? 'Level Akses gagal diperbaharui.' : 'Level Akses gagal ditambahkan.');
    }
    setSubmit(false);
  };

  const validation = (): boolean => {
    let valid = true;

    if (level === '' || !level) {
      setLevelMessage('Level tidak boleh kosong.');
      valid = false;
    }
    return valid;
  };

  const resetValidation = () => {
    setLevelMessage('');
  };

  const resetForm = () => {
    setLevel('');
  };

  const errorRequest = (error: { [key: string]: string[] }) => {
    if (error) {
      if (error.level) {
        setLevelMessage(error.level[0]);
      }
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='level'
          label='Level'
          error={levelMessage !== ''}
          helperText={levelMessage}
          value={level}
          onChange={event => setLevel(event.target.value)}
          autoComplete='off'
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <FormControl component='fieldset'>
          <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleChange} color='primary' name='Mitra Page' />} label='Mitra Page' />
            <FormControlLabel control={<Checkbox onChange={handleChange} color='primary' name='Product Page' />} label='Product Page' />
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
        <FormControl component='fieldset'>
          <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleChange} color='primary' name='Data Stok' />} label='Data Stok' />
            <FormControlLabel control={<Checkbox onChange={handleChange} color='primary' name='Order Page' />} label='Order Page' />
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
        <FormControl component='fieldset'>
          <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleChange} color='primary' name='invoice Page' />} label='invoice Page' />
            <FormControlLabel control={<Checkbox onChange={handleChange} color='primary' name='Commission Page' />} label='Commission Page' />
          </FormGroup>
        </FormControl>
      </Grid>

      <Grid container item justify='flex-end' xs={12} sm={12} md={12} lg={12} xl={12} className={classes.controlDiv}>
        <Button variant='contained' className={classes.cancelButton} onClick={handleOnCancel} disabled={isSubmit}>
          Cancel
        </Button>
        <AddButton type='submit' variant='contained' color='primary' className={classes.addButton} disabled={isSubmit} onClick={handleOnSubmit}>
          Simpan
        </AddButton>
      </Grid>
    </Grid>
  );
};

export default CreateLevelAccessForm;
