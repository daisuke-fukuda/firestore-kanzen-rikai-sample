export default function({ store, redirect, route }) {
  if (!store.getters.isLogin && route.path !== '/login') {
    redirect('/login');
  }
}
