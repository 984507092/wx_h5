<template>
	<view>
		<u-navbar title="数据中心" fixed placeholder border bgColor="#F7F7F7" leftIconSize="25px" @leftClick="" :autoBack="true"></u-navbar>
		<!-- 线 -->
		<view class="line"></view>
		<view class="fisrtBox">
			<view class="topTitle">
				<view class="topTitleAvatar">
					<u-avatar size="50" src="../../static/logo.png"></u-avatar>
					<text>鹤鸣</text>
				</view>
				<view class="topTitleText"><text>ID:327419【团员】【未核销】</text></view>
			</view>
			<!-- 个人信息 -->
			<view class="information">
				<view class="informationPersonage">
					<image src="../../static/activity.png" mode="widthFix"></image>
					<view class="informationDatum">
						<view class="">
							<view class="fontSize">
								<text>沐风</text>
								<text>19958914314</text>
							</view>
							<view class="colorGreen">我要当团长</view>
							<text class="colorGray">默认 默认</text>
						</view>
					</view>
				</view>
				<view class="informationPrice">
					<text>金额</text>
					<text>49.00</text>
				</view>
			</view>
			<!-- 订单编号 -->
			<view class="indent">
				<view>订单编号：2022092414404864001648024777</view>
				<view>下单时间：2022-09-24 14:40:47</view>
			</view>
			<!-- 线 -->
			<view class="line"></view>
			<!-- 红包 -->
			<view class="redenvelope">
				<view>
					累计
					<text>4</text>
					人查看过您的推荐
				</view>
				<view>
					红包:已获得
					<text>0</text>
					元
				</view>
			</view>
			<!-- 线 -->
			<view class="line"></view>
			<!-- 我的粉丝 -->
			<view class="myFans">
				<view class="Fans" :class="{ fontColor: activeColor == 0 }" @click="activeColor = 0">我的粉丝</view>
				<view class="redbag" :class="{ fontColor: activeColor == 1 }" @click="activeColor = 1">我的红包</view>
			</view>
			<!-- 查看资料 -->
			<view class="lookup" v-show="activeColor === 0">
				<view class="lookupPro">
					<view class="lookupProAvatar">
						<u-avatar size="70" src="../../static/logo.png"></u-avatar>
						<view class="lookupProAvatarText">
							<text class="lookupName">鹤鸣</text>
							<text class="lookupTime">{{ yearDate }}</text>
						</view>
					</view>
					<view class="acknowledged">
						<text>已浏览</text>
						<text class="directDrive">直推:0</text>
					</view>
					<view class="responsive">响应:0</view>
					<!-- 占位开始 -->
					<view class=""></view>
					<view class=""></view>
					<view class=""></view>
					<view class=""></view>
					<!-- 占位结束 -->
				</view>
			</view>
			<view class="myRedBag" v-show="activeColor === 1">11111</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			activeColor: 0,
			yearDate: new Date().getTime()
		};
	},
	filters: {},
	methods: {}
};
</script>

<style lang="scss">
.line {
	background-color: #f2f2f2;
	height: 10px;
	width: 100%;
}

// 顶部
.topTitle {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px 0;
	.topTitleAvatar {
		width: 80px;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.topTitleText {
		color: green;
		font-size: 16px;
		font-weight: 500;
	}
}

// 信息
.information {
	background-color: #f9f9f9;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px 10px;
	.informationPersonage {
		width: 160px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		image {
			width: 30px;
			height: 60px;
		}
		.informationDatum {
			.fontSize {
				font-size: 12px;
				font-weight: 600;
			}
			.colorGreen {
				color: green;
				font-size: 14px;
			}
			.colorGray {
				color: #999;
				font-size: 14px;
			}
		}
	}
	.informationPrice {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}
}

// 订单编号
.indent {
	font-size: 14px;
	color: #999;
	padding: 15px 10px;
}

// 红包
.redenvelope {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 10px;
	text {
		color: green;
		padding: 0 2px;
	}
}

// 我的粉丝
.myFans {
	display: flex;
	align-items: center;
	justify-content: space-around;
	text-align: center;
	.Fans {
		width: 50%;
		padding: 15px 0;
	}
	.redbag {
		padding: 15px 0;
		width: 50%;
	}
	.fontColor {
		color: green;
	}
}

// 查看资料
// 我的粉丝
.lookup {
	background-color: #f9f9f9;
	.lookupPro {
		display: flex;
		justify-content: space-between;
		padding: 12px 10px;
		.lookupProAvatar {
			width: 150px;
			display: flex;
			align-items: center;
			justify-content: space-around;
			align-items: center;
			.lookupProAvatarText {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				padding-left: 10px;
				.lookupName {
					font-size: 14px;
				}
				.lookupTime {
					font-size: 14px;
					color: #999;
				}
			}
		}
		.acknowledged {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-evenly;
			font-size: 14px;
			.directDrive {
				font-size: 12px;
				color: #999;
			}
		}
		.responsive {
			color: #999;
			font-size: 12px;
			margin: 0 0 30px 0;
		}
	}
}

// 我的红包
.myRedBag {
}
</style>
