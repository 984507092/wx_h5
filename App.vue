<script>
import {setItem} from "@/utils/accessLocal.js"
export default {
	onLaunch: function() {
		console.log('App Launch');
		// 获取code
		let hash = window.location.href;
		if (hash.includes('code')) {
			this.getCode();
		} else {
			this.uesrLogin();
		}
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {    
		console.log('App Hide');
	},
	mounted() {},
	methods: {
		//授权回调
		uesrLogin() {
			let appid = 'wx5ad181cf1ff2927d'
			// let uri = encodeURIComponent('https://www.fasunspace.com/dist/build/h5/index.html');
			let uri =encodeURIComponent('https://www.fasunfitness.com/dist/build/h5/index.html')
			let scope = 'snsapi_userinfo';
			let auth =
				`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${uri}&response_type=code&scope=${scope}&state=state&connect_redirect=1#wechat_redirect`;
			window.location.href = auth;
		},
		
		// 获取code
		getCode() {
			let arr = Object.fromEntries(
				window.location.search
				.slice('1')
				.split('&')
				.map(v => v.split('='))
			);
			let code = arr.code;
			console.log('新的：', code);
			setItem('code',code)
		},
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import '@/uni_modules/uview-ui/index.scss';
body {
	height: 1000vh;
	min-height: 1500vh;
	max-height: 5000vh;
}
</style>
