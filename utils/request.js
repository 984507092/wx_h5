let baseURL = process.env.NODE_ENV === 'development' ? '/h5' : 'https://wxweb_test.fasunspace.com:11121/'
// let baseURL='https://localtest.fasunspace.com:10031/'

let base64_auth_string = 'Basic RkdpbWczZ0w2eHJQcmx2aWJRbGZ0cGVWUE1IcjpPVUlETXRWWjBUb1NHYXU5ODZSZmpiaXdqUUFG'

export const gettingData = ({
	url,
	data = {},
	method = 'GET'
}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + url,
			data: data,
			header: {
				'authorization': base64_auth_string,
				'Access-Control-Allow-Headers': '*',
				'Access-Control-Allow-Origin':'*',
				'Access-Control-Allow-Method':'*'
			},
			method: method,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			},
			complete: (res) => {
				resolve(res)
				reject(res)
			}
		})
	})
}
