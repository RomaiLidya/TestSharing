import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { Theme, makeStyles } from '@material-ui/core';
import { Switch, Route } from 'react-router';
import AccessPage from 'pages/AccessPage';
import ConditionalRoute from 'components/ConditionalRoute';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import CategoryPage from 'pages/CategoryPage';
import ProductPage from 'pages/ProductPage';
import ProductDetailPage from 'pages/ProductDetailPage';
import AppDrawer from 'components/AppDrawer';
import { CurrentUserProvider } from 'contexts/CurrentUserContext';
import { CartProvider } from 'contexts/CartContext';
import { isUserAuthenticated } from 'selectors';
import { attachTokenToHeader, detachTokenFromHeader } from 'utils/AxiosUtils';
import { GET_CURRENT_USER_URL } from 'constants/url';
import ArticlePage from 'pages/ArticlePage';
import ArticleDetailPage from 'pages/ArticlePageDetail';
import 'react-quill/dist/quill.snow.css';

const { REACT_APP_DRAWER_WIDTH = '240' } = process.env;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  contentMarginSM: {
    marginLeft: '72px',
  },
  contentSpace: {
    [theme.breakpoints.between('md', 'xl')]: {
      marginLeft: +REACT_APP_DRAWER_WIDTH,
    },
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  const [CurrentUserData, setCurrentUserData] = useState<CurrentUser>();
  const [isAuthenticating, setAuthenticating] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(true);
  const [openDrawerMobile, setOpenDrawerMobile] = useState<boolean>(false);
  const [carts, setCarts] = useState<CartModel | null>(null);

  const isLoggedIn = isUserAuthenticated(CurrentUserData);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerOpenMobile = () => {
    setOpenDrawerMobile(true);
  };

  const handleDrawerCloseMobile = () => {
    setOpenDrawerMobile(false);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const setCurrentUser = (currentUser: CurrentUser, token: string): void => {
    localStorage.setItem('token', token);
    attachTokenToHeader(token);
    setCurrentUserData(currentUser);
  };

  const unsetCurrentUser = (): void => {
    localStorage.removeItem('token');
    detachTokenFromHeader();

    setCurrentUserData(undefined);
  };

  useEffect(() => {
    const getPersistedToken = () => {
      return localStorage.getItem('token');
    };

    const getCurrentUserData = async () => {
      setAuthenticating(true);
      const token = getPersistedToken();
      if (token) {
        try {
          const response = await axios.get(GET_CURRENT_USER_URL, { headers: { Authorization: `Bearer ${token}` } });
          const data: CurrentUser = response.data.data;
          setCurrentUser(data, token);
        } catch (err) {
          unsetCurrentUser();
        }
      }
      setAuthenticating(false);
    };
    getCurrentUserData();
  }, []);

  const setCart = (cart: CartModel | null): void => {
    setCarts(cart);
  };

  return isAuthenticating ? null : (
    <CurrentUserProvider
      value={{
        currentUser: CurrentUserData,
        setCurrentUser,
        unsetCurrentUser,
      }}
    >
      <CartProvider
        value={{
          cart: carts,
          setCart,
        }}
      >
        <div className={classes.root}>
          {isLoggedIn && (
            <nav>
              <AppDrawer
                openDrawer={openDrawer}
                currentUserData={CurrentUserData}
                handleDrawerClose={handleDrawerClose}
                openMobile={openDrawerMobile}
                handleDrawerCloseMobile={handleDrawerCloseMobile}
              />
            </nav>
          )}

          <main className={clsx(classes.content, isLoggedIn && openDrawer && classes.contentSpace, !openDrawer && classes.contentMarginSM)}>
            {isLoggedIn && <div className={classes.appBarSpacer} />}
            <Switch>
              <ConditionalRoute exact={true} path={'/'} routeCondition={!isLoggedIn} component={LoginPage} redirectTo={'/post'} />
              <ConditionalRoute exact={true} path={'/home'} routeCondition={isLoggedIn} component={HomePage} redirectTo={'/'} />
              <ConditionalRoute exact={true} path={'/access'} routeCondition={isLoggedIn} component={AccessPage} redirectTo={'/'} />
              <ConditionalRoute exact={true} path={'/post'} routeCondition={isLoggedIn} component={ProductPage} redirectTo={'/'} />
              <ConditionalRoute exact={true} path={'/post/detail'} routeCondition={isLoggedIn} component={ProductDetailPage} redirectTo={'/'} />
              <ConditionalRoute exact={true} path={'/kategori'} routeCondition={isLoggedIn} component={CategoryPage} redirectTo={'/'} />
              <ConditionalRoute exact={true} path={'/article'} routeCondition={isLoggedIn} component={ArticlePage} redirectTo={'/'} />
              <ConditionalRoute exact={true} path={'/article/detail'} routeCondition={isLoggedIn} component={ArticleDetailPage} redirectTo={'/'} />
       
              </Switch>
          </main>
        </div>
      </CartProvider>
    </CurrentUserProvider>
  );
};

export default App;
