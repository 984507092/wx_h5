import { gettingData as http} from '@/utils/request.js'

// 登录
export const  uniLogo=(params)=>http({url:'wxWebLogin',data:params,method:'POST'})

// 用户修改资料
export const  uniUserInfo=(params)=>http({url:'wxWebUpdUserInfo',data:params,method:'POST'})

// 进入页面
export const  uniEntrance=(params)=>http({url:'wxWebEntrance',data:params,method:'POST'})

// 获取页面基础信息
export const  uniPageBaseInfo=(params)=>http({url:'wxWebPageBaseInfo',data:params,method:'POST'})

// 获取分享签名
export const  uniConfigPageSign=(params)=>http({url:'WxWebConfigPageSign',data:params,method:'POST'})

// 页面分享
export const  uniUserShare=(params)=>http({url:'WxWebUserShare',data:params,method:'POST'})
