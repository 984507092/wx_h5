<template>
	<view class="content">
		<!-- 浏览量 -->
		<view class="browse">
			<view>浏览数:{{InformationInfo.page_browse_num}}</view>
			<view>分享数:{{InformationInfo.page_share_num}}</view>
			<view>报名数:{{InformationInfo.page_creator}}</view>
		</view>
		<!-- 长图 -->
		<view class="iamge-area" id="iamgeArea" ref="iamgeArea">
			<image mode="widthFix" class="imageUrl" :src="InformationInfo.show_imgs||'http://fasun.oss-cn-hangzhou.aliyuncs.com/1665716260706_c33efzjlbii.jpeg'"></image>
		</view>
		<view class="main">
			<!-- 活动倒计时 -->
			<view class="mainCountdown">
				<view class="mainCountdown-text">活动倒计时</view>
				<view class="countDown">
					<view class="dataTimeDay">还剩</view>
					<view class="">
						<uni-countdown :font-size="20" :show-colon="false" :day="countDown.daysVal" :hour="countDown.hoursVal" :minute="countDown.minutesVal" :second="countDown.secondsVal" color="#FFFFFF" background-color="#A536F4" />
					</view>
					<view class="dataTimeDay">结束</view>
				</view>
			</view>
			<!-- 报名人数 -->
			<view class="population">
				<!-- 报名人数 -->
				<view class="population-num">
					<view class="population-numText">{{InformationInfo.page_creator}}</view>
					<view>人参加报名</view>
				</view>
				<!-- 浏览量 -->
				<view class="pageview">
					<view class="pageview-text">
						浏览量
						<text>{{InformationInfo.page_browse_num}}</text>
						次
					</view>
					<view class="participants">已有{{InformationInfo.page_share_num}}人参与</view>
				</view>
			</view>
			<!-- 轮播 -->
			<swiperImage></swiperImage>
			<!-- end -->

			<!-- 参加团 -->
			<!-- 	<view class="attendTraining">
				<view class="attendTraining-title">
					您已参加
					<text>1</text>
					个团
				</view>
				<view class="attendTraining-content">
					<view class="avatarTextLeft">
						<u-avatar size="60" src="../../static/logo.png"></u-avatar>
						<text>昵称</text>
					</view>
					<view class="avatarTextRight">
						已有
						<text>1</text>
						人拼团
						<button @click="">去查看</button>
					</view>
				</view>
			</view> -->

			<!-- 当前拼团详情-->
			<view class="groupBox">
				<!-- 标题 -->
				<view class="groupTitle">
					<view class="groupDetailsLeft">
						<image class="inSpellingImage" src="../../static/组 3.png" mode=""></image>
						<text class="inSpelling">拼团中</text>
					</view>
					<view class="groupDetailsRight">
						还未成团，还需
						<text>2</text>
						人即可成团
						<!-- <image class="groupImage" src="../../static/拼团.png" mode=""></image> -->
					</view>
				</view>
				<!-- 拼团头像 -->
				<view class="avatarText">
					<view class="avatarTextBox colonelIconBox" v-for="item in rollList">
						<u-avatar size="80" :src="item.src"></u-avatar>
						<text class="colonelIcon" v-if="item.rollId == 0">团长</text>
						<text>{{ item.name }}</text>
					</view>
				</view>
				<!-- 还差三人 -->
				<!-- <view class="numberpeople">
					还差
					<text>3</text>
					人
				</view> -->
			</view>
			<!-- 视频 -->
			<view class="video">
				<video style="width: 100%;" :autoplay="false" :src="InformationInfo.video_url" controls></video>
			</view>
			<!-- 视频end -->
			<!-- 详情页 -->
			<view class="iamge-area">
				<image class="imageUrl" mode="widthFix" :src="'http://fasun.oss-cn-hangzhou.aliyuncs.com/1665628713360_6dqk2zothhg.jpeg'||require('../../static/details.jpg')"></image></view>
			<!-- 地图 -->
			<beautyMap></beautyMap>
			<!-- 地图end -->
			<!-- 最新订单记录 -->
			<view class="orderhistory">
				<view class="orderhistoryText">最新订单记录</view>
				<swiper class="swiperAuto" :indicator-dots="false" :autoplay="true" :interval="2000"
					:duration="2000" :circular="true" :vertical="true" :display-multiple-items="5" easing-function="linear">
					<swiper-item v-for="(item, index) in listData" :key="index">
				 	 <view class="information">
						<u-avatar size="50" :src="item.avatar"></u-avatar>
						<text>{{ item.name }}</text>
						<text>{{ item.tel }}</text>
						<view class="informationText">
							<text class="informationTextPrice">已支付{{ item.price }}元</text>
							<text>{{ item.data }}</text>
						</view>
					 </view>
					</swiper-item>
				</swiper>
	
			</view>

			<!-- 感恩排行榜 -->
			<view class="gratitudeList">
				<!-- top -->
				<view class="gratitudeListImage"><image src="../../static/feelgrateful.png" mode=""></image></view>
				<view class="gratitudeListBox">
					<view class="rankinglist" :class="{ bottomBorder: active == 0 }" @click="active = 0">排行榜</view>
					<view class="newRecord" :class="{ bottomBorder: active == 1 }" @click="active = 1">最新记录</view>
					<view class="newRedPacket" :class="{ bottomBorder: active == 2 }" @click="active = 2">我的红包</view>
				</view>
			</view>
			<!-- 排行榜 -->
			<view class="contentLeaderboards">
				
			</view>
			<!-- 最新记录 -->
			<view class="LatestrecordContents">
				
			</view>
			<!-- 我的红包 -->
			<!--感恩排行榜end -->
		</view>
		<!-- 提示 -->
		<view class="warninform">感谢您的参与,快去通知小伙伴吧</view>
		<!-- 底部 -->
		<view class="tabbar" v-if="true">
			<view class="commander" :class="{ activeCommander: flag == true }" @click="groupBuying">
				<text>￥49</text>
				<text>我要当团长</text>
			</view>
			<view class="selfbuying" :class="{ selfbuyingCommander: flag == true }" @click="selfBuying">
				<text>￥179</text>
				<text>自购三张</text>
			</view>
			<view class="tellfriend" v-if="flag">
				<text>告诉朋友</text>
				<text>感谢您的参与</text>
			</view>
		</view>

		<view class="tabbar" v-else>
			<view class="tellfriendShow">
				<text>告诉朋友</text>
				<text>感谢您的参与</text>
			</view>
		</view>
		<!-- ------------------------ -->

		<!-- 锚点 -->
		<view class="wrap"><u-back-top mode="square" :iconStyle="iconStyle" :scroll-top="scrollTop" text="返回" bottom="105px"></u-back-top></view>
		<!-- 弹幕 -->
		<view class="barrage" @click="barrageColor = !barrageColor">
			<image class="barrageImagtwo" src="../../static/组 3 (5).png" mode="" v-show="barrageColor == false"></image>
			<image class="barrageImagone" src="../../static/组 3 (4).png" mode="" v-show="barrageColor == true"></image>
		</view>
		<view class="">
		<!-- 	<view class="barrageContont">
				<u-avatar size="50" src="../../static/组 3 (4).png"></u-avatar>
				<view class="barrageContontText">
					<text>鹤鸣</text>
					<text>刚刚购买了~~~</text>
				</view>
			</view>	 -->
			<barrage-con :barrageIsShow="barrageColor"></barrage-con>
		</view>
		<!-- 弹幕结束 -->
		<!-- 音乐播放器 -->
		<view class="misicImage" @click.stop="misicClickBtn">
			<image style="width: 30px;height: 30px;" :class="misicClick ? 'clickMisicImage' : 'clickMisicImagePaused'"  src="../../static/music.png" mode="widthFix"></image>
		</view>

		<!-- 生成海报 -->
		<view class="bannerCanvas">
			<view class="share" @click="shareShow = true"><image src="../../static/share.png" alt=""></image></view>
			<view class="service" @click="serviceShow = true"><image src="../../static/service.png" alt=""></image></view>
			<view class="order" @click="orderShow = true"><image src="../../static/order.png" alt=""></image></view>
		</view>

		<!-- 弹出层 -->
		<!-- 底部 -->
		<view>
			<u-popup :round="20"  :show="show" @close="show = flag">
				<view>
					<view class="groupBuying">
						<view class="groupBuyingDis">
							<text>输入下方信息参加活动</text>
							<view class="groupBuyingDisPlay">
								<text>63个人已开团</text>
								<text class="eighttWo">82个人参团</text>
							</view>
						</view>
						<view class="MyRegiment" v-if="MimeTypeNum==0">
							<view class="MyRegimentAvatar">
								<u-avatar size="120" src="../../static/zigou.png"></u-avatar>
								<text>我要当团长</text>
							</view>
							<view class="MyRegimentText">
								<text>49</text>
								元
							</view>
						</view>
						<view class="MyRegiment" v-else>
							<view class="MyRegimentAvatar">
								<u-avatar size="120" src="../../static/zigou.png"></u-avatar>
								<text>自购3张</text>
							</view>
							<view class="MyRegimentText">
								<text>179</text>
								元
							</view>
						</view>
						<view class="MyRegimentInput">
							<input type="text" v-model="InputName" placeholder-class="phcolor" placeholder="请输入真实姓名" />
							<input type="text" v-model="InputTel" placeholder-class="phcolor" placeholder="请填写手机号码" />
						</view>
						<button class="MyRegimentBtn" @click="payment">马上支付</button>
					</view>
				</view>
			</u-popup>
		</view>
		<!-- 生成客服 -->
		<view>
			<u-popup :show="serviceShow" mode="center" @close="serviceShow = flag">
				<view class="myKefu">
					<!-- 客服专线 -->
					<view class="callcenter">
						客服专线：
						<text>19958194314</text>
					</view>
					<view class="customerService">
						<view class="customerServiceText">您的专属客服：杨彪</view>
						<view class="">
							电话：
							<text>15158127192</text>
						</view>
					</view>
					<view class=""><image src="" mode="widthFix"></image></view>
				</view>
			</u-popup>
		</view>
		<!-- 生成海报 -->
		<view class="">
			<u-popup :show="shareShow" mode="center" @close="shareShow = flag">
				<view class="iamge-area" id="iamgeArea" ref="iamgeArea">
					<image style="width: 300px;height: 500px;" class="imageUrl" src="../../static/activity.png"></image>
					<button @click="saveImage" download>保存图片</button>
				</view>
			</u-popup>
		</view>

		<!-- 我的订单 -->
		<view>
			<u-popup :show="orderShow" mode="center" @close="orderShow = flag">
				<view class="myOrder">
					<view class="myOrderText" @click="navTor">
						核销使用：
						<text>请员工扫码</text>
					</view>
					<view class="">
						<image src="" mode="widthFix">
					</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>

import beautyMap from '../../components/map/map.vue'; //地图
import swiperImage from '@/components/swiper/swiper.vue'; //轮播
import dateIndex from './dateIndex.js';//混入的 data
import barrageCon from '@/components/barrage/barrage.vue'//弹幕
export default {
	components: {
		swiperImage,
		beautyMap,
		barrageCon
	},
	mixins: [dateIndex]
};
</script>

<style lang="scss" scoped>
.content {
	width: 100%;
	padding-bottom: 50px;
	.imageUrl {
		width: 100%;
		height: 4000rpx;
	}
}
// 浏览量
.browse {
	position: fixed;
	z-index: 999;
	top: 0;
	width: 100%;
	display: flex;
	color: #fff;
	align-items: center;
	justify-content: space-around;
	background-color: #8f8f8f91;
}

// 活动倒计时
.mainCountdown {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
}
.mainCountdown-text {
	font-size: 35px;
	font-weight: 600;
	margin-bottom: 10px;
}
// 倒计时
.countDown {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	.dataTimeDay {
		font-size: 20px;
	}
	.dataTimeDay:nth-child(1) {
		padding-right: 8px;
	}
}

// 报名人数
.population {
	margin: 10px 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 95px;
	border-radius: 3px;
	box-shadow: 0px 5px 10px 2px #999;
	// 报名数量
	.population-num {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		padding: 0 15px;
		.population-numText {
			color: #a536f4;
			font-size: 60rpx;
			margin-bottom: 5px;
		}
	}

	// 浏览量
	.pageview {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		padding: 0 15px;
		.pageview-text {
			font-size: 30rpx;
			text {
				color: #999;
				font-size: 12px;
			}
		}
		.participants {
			margin-top: 20px;
			color: #999;
			font-size: 12px;
		}
	}
}

// 还差人数
.numberpeople {
	margin: 10px auto;
	text-align: center;
}
//视频
.video {
	margin-top: 20px;
}

// 参加人数
.attendTraining {
	border-bottom: 1px solid #ccc;
	margin-bottom: 5px;
	.attendTraining-title {
		font-size: 20px;
		color: #000;
		padding: 15px 10px;
		border-bottom: 1px solid #ccc;
	}

	.attendTraining-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 15px;
		margin: 10px 0;
		.avatarTextLeft {
			display: flex;
			align-items: center;
			justify-content: space-between;
			text {
				font-size: 18px;
				margin-left: 10px;
			}
		}
		.avatarTextRight {
			display: flex;
			align-items: center;
			justify-content: space-between;

			text {
				color: red;
			}
			button {
				font-size: 12px;
				color: #fff;
				background-color: #e32e27;
				width: 65px;
				height: 30px;
				margin: 0 5px;
			}
		}
	}
}

// 拼团详情
.groupBox {
	.groupTitle {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
		.groupDetailsLeft {
			margin: 10px 0;
			font-size: 20px;
			font-weight: 600;
			position: relative;
			.inSpellingImage {
				width: 260px;
				height: 10px;
			}
			.inSpelling {
				color: #a536f4;
				position: absolute;
				left: 97px;
				font-size: 22px;
				font-weight: 600;
			}
		}
	}
	.groupDetailsRight {
		width: 235px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		font-weight: 600;
		margin-bottom: 10px;
		text {
			color: #a536f4;
		}
	}
	.groupImage {
		width: 60px;
		height: 50px;
	}
	.avatarText {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-around;
		.avatarTextBox {
			width: 75px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			margin-top: 15px;
			text {
				margin-top: 15px;
			}
		}
	}
}
.colonelIconBox {
	position: relative;
}

.colonelIcon {
	position: absolute;
	top: 20px;
	width: 30px;
	font-size: 12px;
	border-radius: 50px;
	background-color: #a536f4;
	text-align: center;
	padding: 0 5px;
	color: #fff;
}

// 最新订单记录
.swiperAuto {
	width: 100%;
	height: 250px;
	overflow: hidden;
}
// ::v-deep .uni-swiper-slide-frame {
// 	height: 20% !important;
// }
.orderhistory {
	margin: 0 auto;
	text-align: center;
	.orderhistoryText {
		display: inline-block;
		text-align: center;
		color: #fff;
		background-color: #764a2c;
		padding: 10px 0;
		width: 320px;
	}
	.information {
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-top: 5px;
		background-color: #fffaef;
		.informationText {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			.informationTextPrice {
				color: red;
			}
		}
	}
}
.gratitudeList {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	margin-top: 10px;
	.gratitudeListImage {
		width: 100%;
		image {
			width: 100%;
			height: 80px;
		}
	}
	.gratitudeListBox {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0px 5px 10px 2px #eee;
		.rankinglist {
			width: 34%;
			padding: 15px 0;
			text-align: center;
		}
		.newRecord {
			width: 34%;
			padding: 15px 0;
			text-align: center;
		}
		.newRedPacket {
			width: 34%;
			padding: 15px 0;
			text-align: center;
		}
	}
}

//切换的下边框
.bottomBorder {
	border-bottom: 1px solid #e32e27;
}

// 弹幕
.barrage {
	position: fixed;
	bottom: 135px;
	left: 10px;
	.barrageImagone {
		width: 41px;
		height: 41px;
	}
	.barrageImagtwo {
		width: 48px;
		height: 42px;
	}
}
.barrageContont{
	display: flex;
	justify-content: center;
	align-items: center;
	.barrageContontText{
		margin-left: 8px;
		text{
			margin: 0 5px;
		}
	}
}
// 弹目结束

// 音乐
.misicImage {
	position: fixed;
	top: 30px;
	right: 10px;
	width: 30px;
	height: 30px;
	border-radius: 50%;
}
@keyframes audio-rotate-360 {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
@-webkit-keyframes audio-rotate-360 {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
.clickMisicImage {
	animation: audio-rotate-360 1.5s linear infinite;
	-webkit-animation: audio-rotate-360 1.5s linear infinite;
}
.clickMisicImagePaused {
	animation-play-state: paused;
	-webkit-animation-play-state: paused; /* Safari 和 Chrome */
}
// 音乐结束

// 返回顶部
::v-deep.u-back-top[data-v-221951ee] {
	background-color: #f8f8f84f;
}

// 生成海报
.bannerCanvas {
	width: 50px;
	height: 150px;
	position: fixed;
	bottom: 150px;
	right: 0px;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: space-around;
	.share {
		width: 40px;
		height: 40px;
		image {
			width: 40px;
			height: 40px;
		}
	}
	.service {
		width: 4px;
		height: 40px;
		image {
			width: 40px;
			height: 40px;
		}
	}
	.order {
		width: 40px;
		height: 40px;
		image {
			width: 40px;
			height: 40px;
		}
	}
}

// 客服弹出层
// 客服专线
.myKefu{
	background: linear-gradient(0deg, #B564D9, #EE609C);
}
.callcenter {
	width: 100%;
	height: 30px;
	font-weight: 600;
	line-height: 30px;
	color: #fff;
	// background-color: red;
	text-align: center;
	text {
		font-weight: 500;
	}
}
// 专属客服
.customerService {
	font-size: 16px;
	font-weight: 600;
	text-align: center;
	border-bottom: 1px solid #eee;
	padding: 10px 0;
	.customerServiceText {
		margin: 5px 0;
	}
	text {
		color: red;
	}
}

// 警告通知
.warninform {
	position: fixed;
	bottom: 73px;
	background-color: #a536f469;
	width: 100%;
	height: 30px;
	text-align: center;
	color: #fff;
	line-height: 30px;
}

// 底部
.tabbar {
	width: 100%;
	position: fixed;
	bottom: 0px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: #fff;
	padding: 10px 0;
	// 未购买显示
	.commander {
		width: 45%;
		padding: 10rpx 0;
		border: 1px solid #a536f4;
		border-radius: 50px;
		background-color: #a536f4;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	.selfbuying {
		padding: 10rpx 0;
		border: 1px solid #a536f4;
		border-radius: 50px;
		width: 45%;
		background-color: #a536f4;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	// 团员下显示
	.activeCommander {
		border: 1px solid #a536f4;
		border-radius: 50px;
		width: 30%;
		padding: 10rpx 0;
		background-color: #a536f4;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.selfbuyingCommander {
		border: 1px solid #a536f4;
		border-radius: 50px;
		padding: 10rpx 0;
		width: 30%;
		background-color: #a536f4;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.tellfriend {
		border: 1px solid #a536f4;
		border-radius: 50px;
		padding: 10rpx 0;
		width: 30%;
		background-color: #a536f4;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	// 团长下显示
	.tellfriendShow {
		padding: 10rpx 0;
		width: 100%;
		border: 1px solid #a536f4;
		border-radius: 3px;
		background-color: #a536f4;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
}

// 开团弹出的样式
.groupBuying {
	// background-color: #85a4d6;
	border-radius: 10px 10px 0 0;
}
.groupBuyingDis {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	margin: 20px 10px;
	font-weight: 600;
	.groupBuyingDisPlay {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-top: 8px;
		color: #8B10C6;
		font-size: 14px;
		.eighttWo {
		margin-left: 15px;
		}
	}
}
.MyRegiment {
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	background: linear-gradient(94deg, #7D00BC, #AE46E3);
	border-radius: 8px;
	margin: 10px 10px;
	.MyRegimentAvatar{
		width: 165px;
		display:flex;
		justify-content: flex-start;
		align-items: center;
		text{
			font-weight: 600;
			margin-left: 10px;
		}
	}
	.MyRegimentText{
		margin-right: 10px;
		text{
			font-size: 30px;
		}
	}
	
}
.MyRegimentInput {
	margin-top: 50px 5px 10px 5px;
	input {
		border:2px #870CC5 solid;
		padding: 15px 10px;
		margin: 10px 10px;
		border-radius: 8px;
	}
}

.MyRegimentBtn {
	background: linear-gradient(94deg, #7D00BC, #AE46E3);
	color: #fff;
	font-weight: 600;
	margin: 20px 5px 10px 5px;
	border-radius: 40px;
}

// 我的订单弹出层
.myOrder{
	text-align: center;
	background: linear-gradient(0deg, #B564D9, #EE609C);
	color: #fff;

	.myOrderText{
		margin: 20px 0;
		font-size: 18px;
	}
}
</style>
