import React, { FC } from 'react';
import { DialogContent, Dialog } from '@material-ui/core';
import { DialogTitle } from 'components/Dialog';
import ArticleWizard from './components/ArticleWizard';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSnackBar: (open: boolean, variant: 'success' | 'error', message: string, link?: any) => void;
}

const ArticleModal: FC<Props> = props => {
  const { open, setOpen, handleSnackBar } = props;

  return (
    <Dialog maxWidth={'md'} disableBackdropClick={true} aria-labelledby='customized-dialog-title' open={open}>
      <DialogTitle id='customized-dialog-title'>Tambah Article Baru</DialogTitle>
      <DialogContent>
        <ArticleWizard setOpen={setOpen} handleSnackBar={handleSnackBar} />
      </DialogContent>
    </Dialog>
  );
};

export default ArticleModal;
