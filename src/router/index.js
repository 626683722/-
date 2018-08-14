import Vue from 'vue'
import Router from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Look from '../pages/Look/Look'
import Classify from '../pages/Classify/Classify'
import ShopCar from '../pages/ShopCar/ShopCar'
import Personal from '../pages/Personal/Personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/look',
      component:Look,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/classify',
      component:Classify,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/shopcar',
      component:ShopCar,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/personal',
      component:Personal

    }
  ]
})
