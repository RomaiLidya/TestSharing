import React, { FC, Fragment } from 'react';
import { makeStyles, createStyles, Theme, Card, CardMedia, CardContent, Typography, ButtonGroup, Button, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import useRouter from 'hooks/useRouter';
import NumberFormat from 'react-number-format';
import { GRAY_3, ORANGE, BLACK, GREY_6, BLUE_PRIMARY } from 'constants/colors';
import NewIcon from '@material-ui/icons/FiberNewOutlined';

interface Props {
  product: ProductModel;
  zone: ZoneModel;
  isLoading: boolean;
  cartList?: CartListModel;
  inCard: boolean;
  onDelete: React.MouseEventHandler;
  handleAddOn: React.MouseEventHandler;
  handleSubtract: React.MouseEventHandler;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: '0px 5px 12px rgba(0, 0, 0, 0.08)'
    },
    addCart: {
      boxShadow: '0px 5px 12px rgba(0, 136, 186, 0.4)'
    },
    media: {
      width: '100%',
      height: '200px',
      overflow: 'hidden'
    },
    productImage: {
      width: '100%',
      height: '100%'
    },
    title: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 500,
      letterSpacing: '0.0075em',
      textAlign: 'left',
      marginBottom: 5,
      color: BLACK
    },
    code: {
      fontSize: '12px',
      lineHeight: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      letterSpacing: '0.4000000059604645px',
      textAlign: 'left',
      color: GRAY_3,
      marginBottom: '11px'
    },
    newIcon: {
      color: BLUE_PRIMARY,
      fontSize: 30
    },
    nameRoute: {
      fontSize: '12px',
      lineHeight: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      letterSpacing: '0.4000000059604645px',
      textAlign: 'left',
      color: GRAY_3,
      marginBottom: '5px'
    },
    price: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 700,
      letterSpacing: '0.0075em',
      textAlign: 'left',
      marginBottom: '10px',
      color: ORANGE
    },
    category: {
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: 500,
      letterSpacing: '0.1px',
      textAlign: 'left',
      color: GRAY_3
    },
    ribbon: {},
    defaultImage: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: GREY_6,
      width: '100%',
      height: '100%'
    }
  })
);

const BodyRow: FC<Props> = props => {
  const { product, isLoading, zone,cartList, inCard } = props;
  const { new: isNew } = product;

  const { history } = useRouter();
  const classes = useStyles();

  let price = 0;
  let route = '-';
  let total = (cartList && cartList.totalItem) || 0;

  if (product.ProductPrice && product.ProductPrice.length > 0) {
    price = product.ProductPrice[0].price;
    route = (product.ProductPrice[0].Zone && product.ProductPrice[0].Zone.name) || '-';

    if (zone.id > 0) {
      const tmp = product.ProductPrice && product.ProductPrice.find(value => value.ZoneId === zone.id);
      if (tmp) {
        price = tmp.price;
        route = (tmp.Zone && tmp.Zone.name) || '-';
      }
    }
  }

  const handleLink = () => {
    if (product.isProductPackage) {
      history.push('/paket/detail', { id: product.id });
    } else {
      history.push('/post/detail', { id: product.id });
    }
  };

  return (
    <Card elevation={0} className={inCard ? classes.addCart : classes.root}>
      <CardMedia onClick={handleLink} className={classes.media}>
        {isLoading ? (
          <Skeleton variant='rect' width={'100%'} height={196} />
        ) : product.isProductPackage ? (
          product.ProductImage && product.ProductImage.url ? (
            <img src={product.ProductImage.url} className={classes.productImage} />
          ) : (
            <div className={classes.defaultImage}>
              <div>
                <h3 style={{ textAlign: 'center' }}>{product.ProductPackage!.name}</h3>
                {product.ProductPackage &&
                  product.ProductPackage.ProductItem &&
                  product.ProductPackage.ProductItem.map((value, index) => (
                    <div key={index}>
                      <p style={{ textAlign: 'center' }}>
                        {value.Product ? `${value.Product.productName} ${value.minimumItem} ${value.Product.typeUnit}` : '-'}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )
        ) : product.ProductImage && product.ProductImage.url ? (
          <img src={product.ProductImage.url} className={classes.productImage} />
        ) : (
          <div className={classes.defaultImage}>
            <div>
              <h3 style={{ textAlign: 'center' }}>{product.productName}</h3>
            </div>
            {isNew && (
              <div>
                <NewIcon className={classes.newIcon} />
              </div>
            )}
          </div>
        )}
      </CardMedia>
      <CardContent>
        <Typography onClick={handleLink} component='p' className={classes.title}>
          {isLoading ? <Skeleton variant='text' width={'100%'} /> : product.productName}
        </Typography>
        <Typography component='p' className={classes.code}>
          {isLoading ? <Skeleton variant='text' width={'100%'} height={20} /> : product.productCode}
        </Typography>
    

      </CardContent>
    </Card>
  );
};

export default BodyRow;
