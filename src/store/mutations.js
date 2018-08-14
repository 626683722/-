// import Vue from 'vue'

import {
  RECEIVE_FOCUSLIST,
  RECEIVE_DATA,
  RECEIVE_HOME,
  RECEIVE_DETAIL,
  RECEIVE_NAV
} from './mutation-types'

export default {

  [RECEIVE_DATA] (state, {data}) {
    state.data = data
    console.log(data);
  },
  [RECEIVE_FOCUSLIST] (state,{focusList}) {
    state.focusList = focusList
  },
  [RECEIVE_HOME] (state,{home}) {
    state.home = home
  },
  [RECEIVE_DETAIL] (state,{detail}) {
    state.detail = detail
  },
  [RECEIVE_NAV] (state,{nav}) {
    state.nav = nav
  }
}

