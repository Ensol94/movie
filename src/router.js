import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


let router =  new VueRouter({
  routes : [
    {
      path: '/film',
      component: () => import('./views/Film')
    },
    {
      path: '/cinema',
      component: () => import('./views/Cinema')
    },
    {
      path: '/center',
      component: () => import('./views/Center')
    },


    // 城市选择
    {
      path: '/city',
      component: () => import('./views/City')
    },
    // 重定向
    {
      path: '/*',
      redirect : '/film'
    }
  ]
});

export default router;

