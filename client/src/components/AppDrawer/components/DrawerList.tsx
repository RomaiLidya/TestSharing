import React, { FC } from 'react';
import { List, makeStyles } from '@material-ui/core';
import { mdiCubeOutline, mdiLayersTripleOutline, mdiAccountMultipleOutline, mdiLogout } from '@mdi/js';
import { WHITE } from 'constants/colors';
import DrawerItem from './DrawerItem';
import SettingsIcon from '@material-ui/icons/Settings';
import InvoiceIcon from '@material-ui/icons/DescriptionOutlined';
import PieChartIcon from '@material-ui/icons/PieChartOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeIcon from '@material-ui/icons/Home';
import PaymentIcon from '@material-ui/icons/Payment';
import { hasAccess } from 'selectors';

interface Props {
  currentUserData: CurrentUser | undefined;
  handleDrawerClose(): void;
}

const useStyles = makeStyles({
  textIcon: {
    color: WHITE,
    fontSize: 50,
    fontWeight: 'bold'
  }
});

const DrawerList: FC<Props> = props => {
  const classes = useStyles();
  const { handleDrawerClose, currentUserData } = props;
  const products = [
    { name: 'All Post', path: '/post' },
    { name: 'All Kategori', path: '/kategori' }
  ];


  return (
    <List className={classes.textIcon}>
    

      {hasAccess(currentUserData, 'PRODUCT') || hasAccess(currentUserData, 'CATEGORIES') ? (
        <DrawerItem
          handleDrawerClose={handleDrawerClose}
          iconMdi={mdiCubeOutline}
          path='#'
          label='Post'
          child={true}
          childData={products.filter(product => {
            if (product.name === 'All Post') {
              return hasAccess(currentUserData, 'PRODUCT');
            }

            if (product.name === 'All Kategori') {
              return hasAccess(currentUserData, 'CATEGORIES');
            }
          })}
        />
      ) : (
        ''
      )}


     </List>
  );
};

export default DrawerList;
