import React, { FC, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { dummyProduct } from 'utils/dummy';
import BodyRow from './components/BodyRow';

interface Props {
  isLoadingData: boolean;
  products: ProductModel[];
  zone: ZoneModel;
  cartList: CartListModel[];
  handleConfirmationDelete: (id: number) => React.MouseEventHandler;
  handleAddOn: (id: number) => React.MouseEventHandler;
  handleSubtract: (id: number) => React.MouseEventHandler;
}

const ProductTable: FC<Props> = props => {
  const { isLoadingData, products, cartList, zone, handleConfirmationDelete, handleAddOn, handleSubtract } = props;

  return (
    <Fragment>
      {isLoadingData
        ? [0, 1, 2, 3].map(index => (
            <Grid key={index} item md={3} sm={6} xs={6}>
              <BodyRow
                key={index}
                zone={zone}
                product={dummyProduct}
                isLoading={isLoadingData}
                inCard={false}
                onDelete={handleConfirmationDelete(0)}
                handleAddOn={handleAddOn(0)}
                handleSubtract={handleSubtract(0)}
              />
            </Grid>
          ))
        : products &&
          products.length > 0 &&
          products.map((value, index) => (
            <Grid key={index} item md={3} sm={6} xs={6}>
              <BodyRow
                key={index}
                zone={zone}
                product={value}
                isLoading={isLoadingData}
                cartList={cartList.find(_list => _list.ProductId === value.id)}
                inCard={cartList.some(_list => _list.ProductId === value.id)}
                onDelete={handleConfirmationDelete(value.id)}
                handleAddOn={handleAddOn(value.id)}
                handleSubtract={handleSubtract(value.id)}
              />
            </Grid>
          ))}
    </Fragment>
  );
};

export default ProductTable;
