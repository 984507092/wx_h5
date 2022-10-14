// 另外值得一提的是，第一次使用props 对象和Array的默认值，要求以工厂函数的方式返回默认值 学习了
 
// 封装的处理时间差方法 返回 天 时 分 秒 判断活动是否结束 或未开始 
 
/*
	@处理时间差， 返回相差的 天(不包含当天) / 时 / 分 / 秒 数
	@sTime 开始日期
	@eTime 结束日期 
	方法会判断是否活动已结束 或 暂未开始 
*/
 
export function formTimer(sTime, eTime,StimeDate,EndTimeDate) {
	//如果传入的格式是 2021-09-01 12:00:00 为了避免ios兼容性问题 处理成正常格式
	sTime = sTime.replace(/-/g, '\/');
	eTime = eTime.replace(/-/g, '\/');
	console.log(sTime, '转换格式后的开始时间')
	console.log(eTime, '转换格式后的结束时间')
	//当前时间戳
	let NowDate = new Date().getTime();
	//开始时间戳
	// let StimeDate = new Date(sTime).getTime();
	//结束时间戳
	// let EndTimeDate = new Date(eTime).getTime()
	console.log(NowDate, '当前时间戳');
	console.log(StimeDate, '开始时间');
	console.log(EndTimeDate, '结束时间');
 
	//判断如果活动开始时间 大于 当前时间 说明 活动未开始
	if (StimeDate > NowDate) {
		console.log('活动暂未开始')
		return '活动暂未开始'
	}
 
	//判断如果活动结束时间 - 小于 当前时间 则直接return 代表活动结束
	if (EndTimeDate < NowDate) {
		console.log('活动已结束')
		return '活动已结束'
	}
 
	//否则计算 活动结束时间 到当前时间的时间差 返回出 天 时 分 秒 数据对象
 
	//@返回天数不包含今天 
	let dateDiff = (EndTimeDate - NowDate);
	// 计算出相差天数
	let days = Math.floor(dateDiff / (24 * 3600 * 1000));
 
	// 计算出小时数
	let residue1 = dateDiff % (24 * 3600 * 1000); // 计算天数后剩余的毫秒数
	let hours = Math.floor(residue1 / (3600 * 1000));
 
	// 计算相差分钟数
	let residue2 = residue1 % (3600 * 1000); // 计算小时数后剩余的毫秒数
	let minutes = Math.floor(residue2 / (60 * 1000));
 
	// 计算相差秒数
	let residue3 = residue2 % (60 * 1000); // 计算分钟数后剩余的毫秒数
	let seconds = Math.round(residue3 / 1000);
 
	let returnVal =
		((days == 0) ? "" : days + "天") +
		((hours == 0) ? "" : hours + "时") +
		((minutes == 0) ? "" : minutes + "分") +
		((seconds == 0) ? "" : seconds + "秒");
	console.log(returnVal, '相差时间字符串')
	//返回出数据对象
	let TimeObject = {
		daysVal: days == 0 ? "0" : days,
		hoursVal: hours == 0 ? "0" : hours,
		minutesVal: minutes == 0 ? "0" : minutes,
		secondsVal: seconds == 0 ? "0" : seconds
	}
	return TimeObject;
	console.log(TimeObject, 'timeObj')
}