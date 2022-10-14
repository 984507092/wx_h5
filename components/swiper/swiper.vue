<template>
	<view class="swiper">
		<swiper
			class="swiperAuto"
			:indicator-dots="false"
			:autoplay="true"
			:interval="2000"
			:duration="2000"
			:circular="true"
			:vertical="true"
			:display-multiple-items="5"
			easing-function="linear"
		>
			<swiper-item v-for="(item, index) in listData" :key="index">
				<view class="swiperBox">
					<view class="avatarTextBox">
						<u-avatar size="80" :src="item.url"></u-avatar>
						<text>{{ item.name }}</text>
					</view>
					<view class="avatarTextBox">
						<u-avatar size="80" :src="item.url"></u-avatar>
						<text>{{ item.name }}</text>
					</view>
					<view class="avatarTextBox">
						<u-avatar size="80" :src="item.url"></u-avatar>
						<text>{{ item.name }}</text>
					</view>
					<view class="avatarTextBox">
						<u-avatar size="80" :src="item.url"></u-avatar>
						<text>{{ item.name }}</text>
					</view>
					<view class="avatarTextBox">
						<u-avatar size="80" :src="item.url"></u-avatar>
						<text>{{ item.name }}</text>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			listData: [
				{
					url: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣'
				},
				{
					url: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣'
				},
				{
					url: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣'
				},
				{
					url: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣'
				},
				{
					url: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣'
				},
				{
					url: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					name: '鹤鸣'
				}
			]
		};
	},

	mounted() {
		this.getHeight();
	},
	methods: {
		getHeight() {}
	}
};
</script>

<style lang="scss" scoped>
// 轮播
.swiper {
	width: 100%;
	height: 600rpx;
}
.swiper-wrapper {
	position: relative;
}

.swiper-item {
	padding: 0 20rpx;
}

.swiperAuto {
	width: 100%;
	height: 300px;
	overflow: hidden;
}
::v-deep .uni-swiper-slide-frame {
	height: 24% !important;
}
.swiperBox {
	display: flex;
	align-items: center;
	justify-content: space-around;
	text-align: center;
}
.avatarTextBox{
	margin-top: 5px;
}
</style>
