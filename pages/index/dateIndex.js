// ##总逻辑  
// 登录  
import {uniLogo} from '@/utils/API/index.js';
import html2canvas from 'html2canvas'; //canvas
import {
	getItem,
	romveItem,
	setItem
} from "@/utils/accessLocal.js"
import entrance from './entrance.js'//混入的 页面data数据
export default {
	data() {
		return {
			code:'',
			userInfo: {}, //用户信息
			title: 'Hello',
			value1: 1,
			active: 0,
			InputName: '俊杰', //开团姓名
			InputTel: 13112345678, //开团电话
			MimeTypeNum: 1, //开团自购
			rollList: [{
					src: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣',
					rollId: 0
				},
				{
					src: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣',
					rollId: 1
				},
				{
					src: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣',
					rollId: 1
				},
				{
					src: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣',
					rollId: 1
				},
				{
					src: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣',
					rollId: 1
				},
				{
					src: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣',
					rollId: 1
				},
				{
					src: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣',
					rollId: 1
				},
				{
					src: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣',
					rollId: 1
				},
				{
					src: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣',
					rollId: 1
				},
				{
					src: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣',
					rollId: 1
				}
			],
			muteBgMusic: false, //静音
			misicClick: true, //音乐
			serviceShow: false, //客服弹出层
			orderShow: false, //我的订单弹出层
			shareShow: false, //生成海报
			flag: false, //底部显示控件
			show: false, //底部
			scrollTop: 0, //返回顶部
			liulanshu: 4025, //浏览数
			liu: 0,
			barrageColor: true, //弹幕开关
			iconStyle: {
				fontSize: '32rpx',
				color: '#ccc'
			},
			listData: [{
					avatar: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣',
					tel: 19958914314,
					price: 49,
					data: '09-21 20:22:01'
				},
				{
					avatar: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣',
					tel: 19958914314,
					price: 49,
					data: '09-21 20:22:01'
				},
				{
					avatar: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣',
					tel: 19958914314,
					price: 49,
					data: '09-21 20:22:01'
				},
				{
					avatar: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣',
					tel: 19958914314,
					price: 49,
					data: '09-21 20:22:01'
				},
				{
					avatar: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣',
					tel: 19958914314,
					price: 49,
					data: '09-21 20:22:01'
				},
				{
					avatar: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣',
					tel: 19958914314,
					price: 49,
					data: '09-21 20:22:01'
				}
			],
			list1: [{
					name: '排行榜'
				},
				{
					name: '最新记录'
				},
				{
					name: '我的红包'
				}
			],
		};
	},
	mixins:[entrance],
	onLoad() {
		this.code=getItem('code')
			setTimeout((v)=>{
				this.LoginCode(this.code)
			},200)	
	},
	watch: {
		muteBgMusic(newValue, oldValue) {
			if (newValue) {
				// 开启静音
				this.$music.playBgm({
					mute: true
				});
			} else {
				// 关闭 静音
				this.$music.playBgm({
					mute: false
				});
			}
		}
	},

	created() {
		
	},
	mounted() {
		// 判断登录过期
		let {
			wx_expires_in,
			access_token
		} = this.userInfo
		let expires = wx_expires_in * 1000 //令牌过期时间
		let dateToken = new Date().getTime() //当前时间戳
		// 判断当前的时间是否大于令牌过期时间
		if (expires <= dateToken) {
			romveItem('userInfo')
			this.uesrLogin()
		}else{
		// 分享
		this.share()
		}
		
	},
	methods: {
		// 登录接口
		LoginCode(code) {
			const that = this
			uniLogo({
				login_code: code
			}).then((res) => {
				console.log('登录的数据：',res);
				// 保存用户信息
				if(res.status=='ok'){
					that.userInfo = res
					setItem('userInfo', res)
					this.entryPage(res)//进入页面的接口
				}
			}).catch((err) => {
				console.log(err);
			})
		},
		// 分享
		share() {
			let pageShare= getItem('pageShare')
			if(!pageShare){
				let u=window.location.href.split('?')[0]+'?'+`share_id=${1000}`
				//分享微信好友
				if (this.$wechat && this.$wechat.isWechat()) {
					this.$wechat.share({
						url:encodeURIComponent(u),
						title: "妍美活动",
						desc: "拥有多年财富管理经验的理财专家",
						img: "http://fasun.oss-cn-hangzhou.aliyuncs.com/1665554497123_y01m23bnlt9.png",
					});
					this.pageShareId(u)
				}
			}else{
				let u=window.location.href.split('?')[0]+'?'+`share_id=${pageShare.my_share_id}`
				//分享微信好友
				if (this.$wechat && this.$wechat.isWechat()) {
					this.$wechat.share({
						url:encodeURIComponent(u),
						title: "妍美活动",
						desc: "拥有多年财富管理经验的理财专家",
						img: "http://fasun.oss-cn-hangzhou.aliyuncs.com/1665554497123_y01m23bnlt9.png",
					});
					this.pageShareId(u)
				}
			}
			
			
		},


		// 自购
		selfBuying() {
			this.show = true
			this.MimeTypeNum = 1
		},
		// 开团
		groupBuying() {
			this.show = true
			this.MimeTypeNum = 0
		},
		// 支付
		payment() {
			this.show = false
		},

		// 跳转
		navTor() {
			uni.navigateTo({
				url: '/pages/myDataCentral/myDataCentral'
			});
		},

		//返回顶部
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},

		// 音乐播放
		misicClickBtn() {
			this.misicClick = !this.misicClick;
			this.muteBgMusic = !this.muteBgMusic;
		},

		// 音乐结束

		// 生成图片
		//下面是methods中的内容
		//图片转换格式的方法 直接使用就好  不需要知道为什么
		dataURLToBlob(dataurl) {
			let arr = dataurl.split(',');
			let mime = arr[0].match(/:(.*?);/)[1];
			let bstr = atob(arr[1]);
			let n = bstr.length;
			let u8arr = new Uint8Array(n);
			while (n--) {
				u8arr[n] = bstr.charCodeAt(n);
			}
			return new Blob([u8arr], {
				type: mime
			});
		},
		/*保存图片的方法（即按钮点击触发的方法）   
			          第一个参数为需要保存的div的id名  
			          第二个参数为保存图片的名称 */
		saveImage() {
			let dataText = new Date().getTime();
			let canvasID = document.getElementById('iamgeArea');
			this.shareShow = false;
			let that = this;
			let a = document.createElement('a');
			html2canvas(canvasID, {
				useCORS: true,
				allowTaint: true
			}).then(canvas => {
				let dom = document.body.appendChild(canvas);
				dom.style.display = 'none';
				a.style.display = 'none';
				document.body.removeChild(dom);
				let blob = that.dataURLToBlob(dom.toDataURL('image/png'));
				a.setAttribute('href', URL.createObjectURL(blob));
				//这块是保存图片操作  可以设置保存的图片的信息
				a.setAttribute('download', dataText + '.png');
				document.body.appendChild(a);
				a.click();
				URL.revokeObjectURL(blob);
				document.body.removeChild(a);
			});
		}
	}
}
