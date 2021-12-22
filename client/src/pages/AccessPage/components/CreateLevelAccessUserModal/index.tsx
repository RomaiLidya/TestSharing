import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Theme, Modal, Grid, Typography, WithStyles, createStyles, withStyles, Dialog } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CreateLevelAccessForm from './components/CreateLevelAccessForm';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';

interface Props {
  access: AccessModel[];
  acces: AccessModel | null;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAccess: React.Dispatch<React.SetStateAction<AccessModel[]>>;
  setAcces: React.Dispatch<React.SetStateAction<AccessModel | null>>;
  handleSnackBar: (open: boolean, variant: 'success' | 'error', message: string) => void;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1)
    }
  });

interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton aria-label='close' className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const CreateLevelAccessUserModal: React.FC<Props> = props => {
  const { acces, open, setOpen, access, setAcces, setAccess, handleSnackBar } = props;
  const handleClose = (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => {
    setOpen(false);
  };
  return (
    <Dialog maxWidth={'sm'} disableBackdropClick={true} onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
      <DialogTitle id='customized-dialog-title'>
        <Typography id='modal-title' variant='h1' component='h1'>
          {acces ? 'Perbaharui Level' : 'Tambah Level Baru'}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <CreateLevelAccessForm
          acces={acces}
          access={access}
          setAcces={setAcces}
          setAccess={setAccess}
          setOpen={setOpen}
          handleSnackBar={handleSnackBar}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateLevelAccessUserModal;
