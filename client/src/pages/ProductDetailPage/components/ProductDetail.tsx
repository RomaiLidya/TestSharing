import React, { FC, Fragment } from 'react';
import { makeStyles, Table, TableBody, TableRow, withStyles, Typography, Divider } from '@material-ui/core';
import MuiTableCell from '@material-ui/core/TableCell';
import NumberFormat from 'react-number-format';
import Skeleton from '@material-ui/lab/Skeleton';

interface Props {
  product: ProductModel;
  isLoading: boolean;
}

const useStyles = makeStyles({
  cell: {
    width: '40%',
    paddingLeft: 0,
  },
  label: {
    color: '#828282',
    fontWeight: 400,
    fontSize: 15,
    marginBottom: 4,
  },
  text: {
    fontWeight: 700,
    color: '#000000',
    fontSize: 15,
  },
  price: {
    fontWeight: 700,
    color: '#F2994A',
    fontSize: 15,
  },
  tableDetail: {
    marginTop: 10,
  },
  titleDetail: {
    marginTop: 20,
  },
});

const TableCell = withStyles({
  root: {
    borderBottom: 'none',
  },
})(MuiTableCell);

const ProductDetail: FC<Props> = (props) => {
  const classes = useStyles();
  const { product, isLoading } = props;

  return (
    <Fragment>
      <Table size='small'>
        <TableBody>
          <TableRow>
            <TableCell size='small' className={classes.cell}>
              <Typography component='p' className={classes.label}>
                Nama Produk
              </Typography>
              <Typography component='p' className={classes.text}>
                {isLoading ? <Skeleton variant='text' width='100%' /> : product.productName}
              </Typography>
            </TableCell>
            <TableCell size='small'>
              <Typography component='p' className={classes.label}>
                Satuan
              </Typography>
              <Typography component='p' className={classes.text}>
                {isLoading ? <Skeleton variant='text' width='100%' /> : product.typeUnit}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell size='small' className={classes.cell}>
              <Typography component='p' className={classes.label}>
                Kode Produk
              </Typography>
              <Typography component='p' className={classes.text}>
                {isLoading ? <Skeleton variant='text' width='100%' /> : product.productCode}
              </Typography>
            </TableCell>
            <TableCell size='small'>
              <Typography component='p' className={classes.label}>
                Harga Beli
              </Typography>
              <Typography component='p' className={classes.text}>
                {isLoading ? (
                  <Skeleton variant='text' width='100%' />
                ) : (
                  <NumberFormat value={product.purchasePrice} prefix={'Rp'} thousandSeparator={true} displayType='text' />
                )}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell size='small' className={classes.cell}>
              <Typography component='p' className={classes.label}>
                Kategori Produk
              </Typography>
              <Typography component='p' className={classes.text}>
                {product.Category ? product.Category.name : '-'}
              </Typography>
            </TableCell>
            <TableCell size='small'>
              <Typography component='p' className={classes.label}>
                Deskripsi
              </Typography>
              <Typography component='p' className={classes.text}>
                {isLoading ? <Skeleton variant='text' width='100%' /> : <div dangerouslySetInnerHTML={{ __html: product.description }}></div>}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default ProductDetail;
