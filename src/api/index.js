import ajax from './ajax'

export const reqData = ()=>ajax('/data')

export const reqFocusList = () => ajax('/banner')

export const reqHome = () => ajax('/home')

export const reqDetail = () => ajax('/detail')

export const reqNav = () => ajax('/nav')
