import Vue from 'vue'
import Router from 'vue-router'

// import Msite from '../pages/Msite/Msite'
// import Look from '../pages/Look/Look'
// import Classify from '../pages/Classify/Classify'
// import ShopCar from '../pages/ShopCar/ShopCar'
// import Personal from '../pages/Personal/Personal'
const Msite = () => import('../pages/Msite/Msite')
const Look = () => import('../pages/Look/Look')
const Classify = () => import('../pages/Classify/Classify')
const ShopCar = () => import('../pages/ShopCar/ShopCar')
const Personal = () => import('../pages/Personal/Personal')
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/',
      redirect:'/msite',

    },
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true,
        showTop:true
      }
    },
    {
      path:'/look',
      component:Look,
      meta:{
        showFooter:true,
        showTop:true

      }
    },
    {
      path:'/classify',
      component:Classify,
      meta:{
        showFooter:true,
        showTop:true

      }
    },
    {
      path:'/shopcar',
      component:ShopCar,
      meta:{
        showFooter:true,
        showTop:true

      }
    },
    {
      path:'/personal',
      component:Personal

    }
  ],

})

router.afterEach((to,from)=>{
  window.scrollTo(0,0)
})

export default router
