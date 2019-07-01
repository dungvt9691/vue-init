import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';

import userServices from '@/lib/userServices';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomeScreen',
      component: Home,
    },
    {
      path: '/dashboard',
      name: 'DashboardScreen',
      component: Dashboard,
      meta: { auth: true },
    },
    {
      path: '/sign-in',
      name: 'SignInScreen',
      component: SignIn,
      meta: { auth: false },
    },
    {
      path: '/sign-up',
      name: 'SignUpScreen',
      component: SignUp,
      meta: { auth: false },
    },
  ],
});

router.beforeEach((to, _from, next) => {
  const isSignedIn = userServices.isSignedIn();

  if (to.meta && to.meta.auth !== undefined) {
    if (to.meta.auth) {
      if (!isSignedIn) {
        router.push({ name: 'SignIn' });
      } else {
        next();
      }
    } else if (!isSignedIn) {
      next();
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
