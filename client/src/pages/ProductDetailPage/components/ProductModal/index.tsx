import React, { FC } from 'react';
import { createStyles, makeStyles, Theme, DialogContent } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle } from 'components/Dialog';
import ProductWizard from './ProductWizard';

interface Props {
  product: ProductModel;
  zone: ZoneModel[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setProduct: React.Dispatch<React.SetStateAction<ProductModel>>;
  handleSnackBar: (open: boolean, variant: 'success' | 'error', message: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3)
    }
  })
);

const ProductModal: FC<Props> = props => {
  const classes = useStyles();
  const { product, open, zone, setOpen, setProduct, handleSnackBar } = props;

  return (
    <Dialog maxWidth={'md'} fullWidth={true} disableBackdropClick={true} aria-labelledby='customized-dialog-title' open={open}>
      <DialogTitle id='customized-dialog-title'>Edit</DialogTitle>
      <DialogContent>
        <ProductWizard product={product} zone={zone} setProduct={setProduct} setOpen={setOpen} handleSnackBar={handleSnackBar} />
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
