<template>
	<div class="barrages-drop">
		<vue-baberrage
			:isShow="barrageIsShow"
			:barrageList="barrageList"
			:maxWordCount="maxWordCount"
			:throttleGap="throttleGap"
			:loop="barrageLoop"
			:lanesCount="lanesCount"
			:boxHeight="boxHeight"
			:messageHeight="messageHeight"
		></vue-baberrage>
	</div>
</template>
<script>
import { MESSAGE_TYPE } from 'vue-baberrage';
export default {
	name: 'Barrages',
	data() {
		return {
			msg: '鹤鸣刚刚购买了~~~',
			messageHeight: 35,
			boxHeight: 150,
			barrageLoop: true,
			maxWordCount: 3,
			throttleGap: 9000,
			barrageList: [],
			lanesCount:4
		};
	},
	props:['barrageIsShow'],
	mounted() {
		this.addToList();
	},
	methods: {
		addToList() {
			let list = [
				{
					id: 1,
					avatar: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					msg: this.msg,
					time: 5,
					barrageStyle: 'red'
				},
				{
					id: 2,
					avatar: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					msg: this.msg,
					time: 7,
					barrageStyle: 'green'
				},
				{
					id: 3,
					avatar: 'http://txt.fasunspace.com/1665467830860_d84n98qnpqi.png',
					msg: this.msg,
					time: 9,
					barrageStyle: 'normal'
				}
			];
			list.forEach(v => {
				this.barrageList.push({
					id: v.id,
					avatar: v.avatar,
					msg: v.msg,
					time: v.time,
					type: MESSAGE_TYPE.NORMAL,
					barrageStyle: v.barrageStyle
				});
			});
		}
	}
};
</script>
<style lang="less">
.barrages-drop {
	.blue {
		border-radius: 100px;
		background: #e6ff75;
		color: #fff;
	}
	.green {
		border-radius: 100px;
		background: #75ffcd;
		color: #fff;
	}
	.red {
		border-radius: 100px;
		background: #e68fba;
		color: #fff;
	}
	.yellow {
		border-radius: 100px;
		background: #dfc795;
		color: #fff;
	}
	.baberrage-stage {
		position: absolute;
		width: 100%;
		height: 212px;
		overflow: hidden;
		top: 0;
		margin-top: 50px;
	}
	/*头像*/
	::v-deep .baberrage-item .normal {
	  background-color: #82828224;
	}
	::v-deep .baberrage-msg{
		color: #A536F4;
	}
}
</style>
