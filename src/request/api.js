import request from './request.js'

export const GetHomeData = () => request.get('/index/index')
export const GetCategory = (params) => request.get('goods/category',{params})
export const GetBrand = (params) => request.get('brand/detail',{params})
export const GetGoodsDetail = (params) => request.get('goods/detail',{params})
export const GetGoodsRelated = (params) => request.get('goods/related',{params})

export const GetSub = (params) => request.get('/topic/list',{params})

export const GetClassify = () => request.get('/catalog/index')
export const GetCurrentList = (params) => request.get('/catalog/current',{params})

export const GetUser = () => request.get('/auth/loginByWeb')

export const GetSearch = () => request.get('/search/index')

export const GetClearHis = () => request.get('/search/clearhistory')

export const GetSearchHelper =(params) => request.get('/search/helper',{params})

export const GetGoods = (params) => request.get('/goods/list',{params})
