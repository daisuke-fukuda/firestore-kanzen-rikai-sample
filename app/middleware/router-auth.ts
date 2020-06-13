import { Middleware } from '@nuxt/types';

const routerAuth: Middleware = ({ store, redirect, route }) => {
  if (!store.getters.isLogin && route.path !== '/login') {
    redirect('/login');
  }
};

export default routerAuth;
