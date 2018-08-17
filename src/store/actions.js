import {
  RECEIVE_NAV,
  RECEIVE_DETAIL,
  RECEIVE_HOME,
  RECEIVE_DATA,
  RECEIVE_FOCUSLIST
} from './mutation-types'

import {
  reqFocusList,
  reqData,
  reqDetail,
  reqHome,
  reqNav
} from '../api'

export default {
  // 异步获取商品列表
  async getGoods ({commit, state}, cb) {
    // 调用接口请求函数从后台获取数据
    const result = await reqGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 数据更新之后执行回调函数
      cb && cb()
    }
  },
  async getData ({commit,state}){
    const result = await reqData();
    if(result.code === 0){
      const data = result.data
      commit(RECEIVE_DATA,{data})
    }
  },
  async getFocusList ({commit,state}){
    const result = await reqFocusList();
    if(result.code === 0){
      const focusList = result.focusList
      commit(RECEIVE_FOCUSLIST,{focusList})
    }
  },
  async getHome ({commit,state},cb){
    const result = await reqHome();
    if(result.code === 0){
      const home = result.home
      commit(RECEIVE_HOME,{home})
      cb && cb()
    }
  },
  async getDetail ({commit,state},cb){
    const result = await reqDetail();
    if(result.code === 0){
      const detail = result.detail
      commit(RECEIVE_DETAIL,{detail})
      cb && cb()
    }
  },
  async getNav ({commit,state},cb){
    const result = await reqNav();
    if(result.code === 0){
      const nav = result.nav
      commit(RECEIVE_NAV,{nav})
      cb && cb()
    }
  }
}


