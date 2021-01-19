import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


let router =  new VueRouter({
  routes : [
    {
      path: '/',
      component: () => import('./views/Home'),
      children : [
        {
          path: 'film',
          component: () => import('./components/Film'),
          children : [
            {
              path : 'nowPlaying',
              component : () => import('./components/Film/nowPlaying')
            },
            {
              path : 'comingSoon',
              component : () => import('./components/Film/comingSoon')
            },
            {
              path : '/',
              redirect : '/film/nowPlaying'
            },
            {
              path : '*',
              redirect : '/film/nowPlaying'
            }
          ]
        },
        {
          path: 'cinema',
          component: () => import('./components/Cinema')
        },
        {
          path: 'center',
          component: () => import('./components/Center')
        },
        {
          path: '',
          redirect: '/film/nowPlaying'
        }
      ]
    },
    {
      path : '/card',
      component : () => import('./views/Card')
    },
    {
      path : '/money',
      component : () => import('./views/Money')
    },
    {
      path : '/system',
      component : () => import('./views/System')
    },
    // 城市选择
    {
      path: '/city',
      component: () => import('./views/City')
    },
    // 重定向
    {
      path: '*',
      redirect : '/film/nowPlaying'
    }
  ]
});

export default router;

