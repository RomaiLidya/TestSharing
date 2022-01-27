import React, { FC } from 'react';
import { List, makeStyles } from '@material-ui/core';
import { mdiCubeOutline } from '@mdi/js';
import { WHITE } from 'constants/colors';
import DrawerItem from './DrawerItem';
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

  return (
    <List className={classes.textIcon}>
    
{/* 

        <DrawerItem  handleDrawerClose={handleDrawerClose } Icon={PaymentIcon} path='/categori' label='Kategori' child={false} /> */}
     
     </List>
  );
};

export default DrawerList;
