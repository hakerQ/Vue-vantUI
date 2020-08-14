import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js'
// import Popup from '@/components/common/Popup.vue'

Vue.use(Router)

const routes = [
    {
      path: '/',
      redirect:'/home',
  		component: ()=>import('@/pages/home'),
    },
    {
      path: '/home',
      name: 'home',
      component: ()=>import('@/pages/home'),
      children:[
        {
          path:'popup',
          name:'popup',
          component:()=>import('@/components/common/Popup')
        }
      ]
    },
    {
      path: '/subject',
      name: 'subject',
      component: ()=>import('@/pages/subject')
    },
    {
      path: '/classify',
      name: 'classify',
      component: ()=>import('@/pages/classify')
    },
    {
      path: '/shoppingcar',
      name: 'shoppingcar',
      component: ()=>import('@/pages/shoppingcar')
    },
    {
      path: '/me',
      name: 'me',
      component: ()=>import('@/pages/me')
    },
    {
      path:'/channels/:id',
      name:'channels',
      component:()=>import('@/pages/channels')
    },
    {
      path:'/branddetail/:id',
      name:'branddetail',
      component:()=>import('@/pages/branddetail')
    },
    {
      path:'/goodsdetail/:id',
      name:'goodsdetail',
      component:()=>import('@/pages/goodsdetail')
    }

  ]


const router = new Router({
  mode:'history',
  routes
})

// 导航守卫
router.beforeEach((to, from, next)=>{
  // 用户进入首页，必须关掉popup的背景
  if(to.name == 'popup'){
    // store.commit('changeTabBar',false)
    setTimeout(function(){
      // store.commit('changeContent',false)

    },400)
  }else if(to.name == 'home'){
    // store.commit('changeTabBar',true)
  }

  next();
})


export default router
