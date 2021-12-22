import React, { FC } from 'react';
import { createStyles, Theme, Typography, IconButton, WithStyles, withStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import CategoryWizard from './components/CategoryWizard';

interface Props {
  categories: CategoryModel[];
  category: CategoryModel | null;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCategories: React.Dispatch<React.SetStateAction<CategoryModel[]>>;
  setCategory: React.Dispatch<React.SetStateAction<CategoryModel | null>>;
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

const CategoryModal: FC<Props> = props => {
  const { categories, open, setOpen, category, setCategories, setCategory, handleSnackBar } = props;

  const handleClose = (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => {
    setOpen(false);
  };

  return (
    <Dialog maxWidth={'sm'} disableBackdropClick={true} onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
      <DialogTitle id='customized-dialog-title'>
        <Typography id='modal-title' variant='h1' component='h1'>
          {category ? 'Perbaharui Kategori' : 'Tambah Kategori Baru'}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <CategoryWizard
          category={category}
          categories={categories}
          setCategories={setCategories}
          setCategory={setCategory}
          setOpen={setOpen}
          handleSnackBar={handleSnackBar}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CategoryModal;
