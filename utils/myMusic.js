const bgm = uni.createInnerAudioContext();
bgm.src = 'http://txt.fasunspace.com/1665468617621_z8ypguavix.mpeg'
bgm.loop = true;  //循环播放
bgm.autoplay=true;  //自动播放
bgm.sessionCategory = '.soloAmbient'; //在后台时不播放，如有其他播放，会暂停其他播放（但在移动端 h5 中 后台不播放失效）（其他属性自行百度）
bgm.volume = 0.6  //音量
var music = {
	//mute 表示是否是静音，，默认静音
	playBgm({
		mute = false
	}) {
		if (!bgm) return;
		if (mute) {
			bgm.pause()
		} else {
			bgm.play()
		}
 
		bgm.onPause(() => {})
		bgm.onPlay(() => {
			console.log('开始播放');
			this.playing = !bgm.paused;//查看是否可以自动播放
		})
		bgm.onError((res) => {
			console.log(res.errMsg);
			console.log(res.errCode);
		})
	}
}
module.exports = music





