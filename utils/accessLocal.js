export const getItem = (key) => {
	let searchHistory;
	uni.getStorage({
		key: key,
		success: (res) => {
			// console.log(res.data);
			searchHistory = res.data
		},
		fail: (err) => {
			console.log(err);
		}
	})
	return searchHistory
}


export const setItem = (key, data) => {
	uni.setStorage({
		key: key,
		data: data,
		success: (res) => {
			console.log(res);
		},
		fail: (err) => {
			console.log(err);
		}
	})
}


export const romveItem = (key) => {
	uni.removeStorage({
		key: key,
		success: function(res) {
			console.log('success');
		},
		fail: (err) => {
			console.log(err);
		}
	});
}
