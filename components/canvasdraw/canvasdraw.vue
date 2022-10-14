<template>
	<div class="misicImage">
		<audio :src="musicbg" id="Jaudio" class="media-audio" preload loop="loop" hidden="false"></audio>
		<!-- <image :class="misicClick ? 'clickMisicImage' : 'clickMisicImagePaused'" style="width: 30px;height: 30px;" src="../../static/music.png" mode="widthFix"></image> -->
		<div class="clickMisicImage" @click="audioAutoPlay"></div>
	</div>
</template>
<script>
/* eslint-disable */
export default {
	data() {
		return {
			// http://txt.fasunspace.com/1665468617621_z8ypguavix.mpeg
			musicbg: '../../static/轩姨（相信光） - 缺氧 (Demo).mp3' // 音乐
		};
	},
	props: ['misicClick'],
	methods: {
		// 音乐背景
		play() {
			this.audio.play();
			this.clickMisicImage.classList.add('play');
			this.clickMisicImage.classList.remove('stop');
		},
		stop() {
			this.audio.pause();
			this.clickMisicImage.classList.add('stop');
			this.clickMisicImage.classList.remove('play');
		},
		audioAutoPlay() {
			this.audio.play();
			var that = this;
			//控制小喇叭的播放状态
			this.audio.addEventListener('playing', function() {
				that.clickMisicImage.classList.add('play');
				that.clickMisicImage.classList.remove('stop');
			});
			this.audio.addEventListener('pause', function() {
				that.clickMisicImage.classList.add('stop');
				that.clickMisicImage.classList.remove('play');
			});
			document.addEventListener(
				'WeixinJSBridgeReady',
				function() {
					that.audio.play();
					this.clickMisicImage.classList.add('play');
					this.clickMisicImage.classList.remove('stop');
				},
				false
			);
			this.clickMisicImage.addEventListener(
				'click',
				() => {
					if (this.audio.paused) {
						this.play();
					} else {
						this.stop();
					}
				},
				false
			);

			// 触发播放音乐效果，解决浏览器或者APP自动播放问题
			document.addEventListener(
				'touchstart',
				() => {
					if (!this.isPlay) {
						this.play();
						this.isPlay = true;
					}
				},
				false
			);
		}
	},
	ready() {
		this.audio = window.document.querySelector('.media-audio');
		this.clickMisicImage = window.document.querySelector('.clickMisicImage');
		this.audioAutoPlay();
	}
};
</script>
<style rel="stylesheet/scss" lang="scss">
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


</style>
