import React, { FC } from 'react';
import { DialogContent, Dialog } from '@material-ui/core';
import { DialogTitle } from 'components/Dialog';
import ProductWizard from './components/ProductWizard';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSnackBar: (open: boolean, variant: 'success' | 'error', message: string, link?: any) => void;
}

const ProductModal: FC<Props> = props => {
  const { open, setOpen, handleSnackBar } = props;

  return (
    <Dialog maxWidth={'md'} disableBackdropClick={true} aria-labelledby='customized-dialog-title' open={open}>
      <DialogTitle id='customized-dialog-title'>Tambah Produk Baru</DialogTitle>
      <DialogContent>
        <ProductWizard setOpen={setOpen} handleSnackBar={handleSnackBar} />
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
