import {  getStore } from "../store/store.js"
const $post = function(url, datas, callback){
	const userInfo = getStore('userInfo');
	const token = getStore('token');
	return new Promise( resolve => {
		uni.request({
			method: 'POST',
			url: url,
			header:{
				"accept": "*/*",
				"uid":userInfo.user_id,
				"token":token
			},
			data:datas,
			success: (data) => {
				verifyLogin(data.data.code);
				callback(data.data);
			},
			fail: (err) => {
				uni.showToast({
					title: '系统错误,请稍后再试!',
				})
			}
		})
	})
}


const $get = function(url, callback){
	const userInfo = getStore('userInfo');
	const token = getStore('token');
	return new Promise( resolve => {
		uni.showLoading({
			title:"加载中..."
		})
		uni.request({
			method: 'GET',
			url: url,
			header:{
				"accept": "*/*",
				"uid":userInfo.user_id,
				"token":token
			},
			success: (data) => {
				verifyLogin(data.data.code);
				callback(data.data);
			},
			fail: (err) => {
				uni.showToast({
					title: '系统错误,请稍后再试!',
				})
			}
		})
		setTimeout(function () {
		    uni.hideLoading();
		}, 350);
	})
}

function verifyLogin( code ){
	if(code==8){
		uni.showModal({
		    title: '提示',
		    content: '您尚未登录，是否现在去登陆?',
		    success: function (res) {
		        if (res.confirm) {
		            setTimeout(()=>{
						let url = '/pages/login/login';
						// #ifdef MP-WEIXIN
							url = '/pages/login/wxLogin';
						// #endif
		            	uni.navigateTo({
		            		url: url
		            	})
		            },500)
		        } else if (res.cancel) {
		            console.log('用户点击取消');
		        }
		    }
		});
		// setTimeout(()=>{
		// 	uni.navigateTo({
		// 		url: '/pages/login/login'
		// 	})
		// },1200)
	}else if(code==9){
		uni.clearStorageSync()
		uni.showToast({
			title:"登录已过期,请重新登录后再操作!",
			icon:"none"
		})
		setTimeout(()=>{
			uni.navigateTo({
				url: '/pages/login/login'
			})
		},1200);
	}
}

export {
	$post,
	$get
}