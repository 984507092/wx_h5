// ##进入页面逻辑
// 	#进入页面
// 	#页面基础信息
import {
	uniEntrance,
	uniPageBaseInfo,
	uniUserShare
} from '@/utils/API/index.js';

import {
	getItem,
	romveItem,
	setItem
} from "@/utils/accessLocal.js"
import {
	formTimer
} from '../../utils/countDown.js'

export default {
	data() {
		return {
			pageInfo: {}, //进入页面数据
			InformationInfo: {}, //页面的基础信息
			countDown: {}, //倒计时
			pageShare: {} //页面分享
		}
	},
	created() {

	},
	mounted() {

	},
	onShow() {
		let userInfo = getItem('userInfo')
		this.entryPage(userInfo)
	},
	computed: {},

	methods: {

		// 进入页面
		entryPage(userInfo) {
			let that = this
			let {
				user_id,
				access_token
			} = userInfo
			let share_id = Number(1000)
			uniEntrance({
				share_id,
				user_id,
				access_token
			}).then((res) => {
				console.log('进入页面数据：', res);
				if (res.status == 'ok') {
					that.pageInfo = res
					setItem("page_id", res.page_id)
					this.pageInformation(res.page_id)
				}
			}).catch((err) => {
				console.log(err);
			})
		},
		// 页面的基础信息
		pageInformation(userInfo) {
			let that = this
			let page_id = userInfo
			let {
				user_id,
				access_token
			} = getItem('userInfo')
			uniPageBaseInfo({
				page_id,
				user_id,
				access_token
			}).then((res) => {
				console.log('页面的基础信息：', res);
				if (res.status == "ok") {
					that.InformationInfo = res
					let {
						begin_time,
						end_time
					} = res
					let st = begin_time * 1000 //开始的unix时间戳转中国时间戳
					let et = end_time * 1000 //结束的unix时间戳转中国时间戳
					let stTime = new Date(st).toLocaleString() //开始的时间
					let endTime = new Date(et).toLocaleString() //结束的时间
					that.countDown = formTimer(stTime, endTime, st, et)
					console.log('1111+:', formTimer(stTime, endTime, st, et));
				}
			}).catch((err) => {
				console.log(err);
			})
		},
		pageShareId(u) {
			// console.log('这是u',u);
			// console.log('分享hashId：', window.location.hash);
			// console.log('分享Id',window.location.href);
			let that=this
			let { share_id } =Object.fromEntries(u.split('?').map((v)=>v.split('=')))
			let {
				access_token,
				user_id
			} = getItem('userInfo')
			uniUserShare({
				share_id,
				access_token,
				user_id
			}).then((res)=>{
				console.log('页面分享：', res);
				if(res.status=='ok'){
					that.pageShare=res
					setItem("pageShare",res)
				}
			}).catch((err)=>{
				console.log(err);
			})
		}
	}

}
