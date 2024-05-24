import {setStore,getStore} from "../store/store.js"
import { $post, $get } from "../utils/request.js"
import { reType } from "./utils.js"

const $domain = "https://www.daiyuegui.com"

//	登录
const login = function(mobile, password) {
	uni.showLoading({
		title: "登录中...",
		duration: 1500
	})
	let datas = {"mobile":mobile,"password":password,ip: "127.0.0.1"};
	$post($domain+"/login", datas, (data)=>{
		if (data.code == 0) {
			if (setStore("token", data.token) && setStore("userInfo", data.data)) {
				uni.hideLoading();
				uni.switchTab({
					url: '/pages/index/index'
				});
			}
			getCollect((res)=>{
				console.log("获取了书架")
			});
			
		} else if (data.code == 1) {
			showMessage(1, "用户名不存在!");
		} else {
			showMessage(1, "密码错误!");
		}
	})
}

// 微信小程序登录
const wxUserLogin = function(code, nickname, head){
	uni.showLoading({
		title: "登录中...",
		duration: 1500
	})
	
	let datas = {"nickname":nickname,"head":head};
	$post($domain+"/wxlogin/"+code, datas, (data)=>{
		console.log(data)
		if (data.code == 0) {
			if (setStore("token", data.token) && setStore("userInfo", data.data)) {
				uni.hideLoading();
				uni.switchTab({
					url: '/pages/index/index'
				});
			}
			getCollect((res)=>{
				// console.log("获取了书架")
			});
			
		} else if (data.code == 1) {
			showMessage(1, "未知错误!");
		}
	})
	
}

//	获取书籍,每页返回10条数据
const getNewBooks = function(page, callback) {
	
	let url = $domain+"/book/list/" + page;
	return new Promise( resolve => {
		$get(url, (data) => {
			for (var i = 0; i < data.data.length; i++) {
				data.data[i]["type"] = reType(data.data[i]["type"])
			}
			callback(data);
		})
	})
}


//	书籍详情页+用户对书籍的状态
const bookInfo = function(book_id, callback){
	return new Promise(resolve => {
		uni.request({
			method: "GET",
			url: $domain+'/book/getbook/'+book_id,
			success: (data) => {
				callback(data.data);
			}
		})
	})
}

//	放入书架
const addCollect = function(book_id,callback){
	return new Promise(resolve =>{
		let userInfo = verifyLogin();
		let url = $domain+'/user/callectbook?bid='+book_id+'&uid='+userInfo.user_id;
		if (userInfo==false) callback(false);
		$get(url, (data)=>{
			if (data.code==0){
				uni.showToast({
					title:data.msg,
					icon:"none"
				})
				callback(true)
			}
		})
	})
	
}

//	将书籍加入喜欢
const likeBook = function(book_id, callback){
	return new Promise(resolve =>{
		let userInfo = verifyLogin();
		let url = $domain+'/user/likebook/'+userInfo.user_id+'/'+book_id;
		if (userInfo==false) callback(false);
		$get(url, (data)=>{
			if (data.code==0){
				uni.showToast({
					title:data.msg,
					icon:"none"
				})
				callback(true);
			}
		})
	})
}

//	获取章节
const getChapter = function(book_id, callBack){
	return new Promise(resolve =>{
		let bookChapter = getStore("Chapter"+book_id)
		if (bookChapter){
			callBack(bookChapter);
			return;
		}
		var url = $domain+'/book/getchapter/'+book_id;
		$get(url, (data) => {
			setStore("Chapter"+book_id, data);
			callBack(data);
		})
	})
}

//	获取章节内容
const getChapterContent = function(chapter_id, callBack){
	return new Promise(resolve =>{
		var url = $domain+'/chapter/getchaptercontent/'+chapter_id;
		$get(url, (data) => {
			callBack(data);
		})
	})
}


//	获取状态
const getStatus = function(book_id, callBack){
	let userInfo = verifyLogin();
	return new Promise(resolve =>{
		var url = $domain+'/book/getStatus/'+userInfo.user_id+'/'+book_id;
		$get(url, (data) => {
			callBack(data);
		})
	})
}

//	根据书名或者作者名搜索图书
const searchBook = function(name, callBack){
	return new Promise(resolve =>{
		var url = $domain+'/book/searchbook/'+name;
		$get(url, (data) => {
			callBack(data);
		})
	})
}


//	获取书架
const getCollect = function(callBack){
	let userInfo = verifyLogin();
	if (userInfo==false) return false;
	return new Promise(resolve =>{
		var url = $domain+'/user/getcollect/'+userInfo.user_id;
		$get(url, (data) => {
			var collectData = [];
			for (var i = 0; i < data.data.length; i++) {
				collectData.push(data.data[i]);
			}
			setStore("Collect" ,collectData)
			callBack(collectData);
		})
	})
}

//	搜索书架
const searchCollectBook = function(name, callBack){
	let userInfo = verifyLogin();
	return new Promise(resolve =>{
		var url = $domain+'/user/searchcollectbook/'+userInfo.user_id+'/'+name;
		$get(url, (data) => {
			callBack(data);
		})
	})
}
//	查询分类信息
const getClassify = function( callBack ){
	return new Promise(resolve => {
		$get($domain+'/book/getclassify', (data) => {
			callBack(data);
		})
	})
}
//	根据分类查询图书
const getClassifyBooks = function( class_id, page, callBack ){
	return new Promise(resolve => {
		$get($domain+'/book/getclassbook/'+class_id+'/'+page, (data) => {
			for (var i = 0; i < data.data.length; i++) {
				data.data[i]["type"] = reType(data.data[i]["type"])
			}
			callBack(data);
		})
	})
}


//	获取top榜单,每页返回10条数据
const getTopTenBooks = function(page, callback) {
	let url = $domain+"/book/topbooks/" + page;
	return new Promise( resolve => {
		$get(url, (data) => {
			for (var i = 0; i < data.data.length; i++) {
				data.data[i]["type"] = reType(data.data[i]["type"])
			}
			callback(data);
		})
	})
	
}

//	查询热门分类信息
const getHotClassify = function( callBack ){
	return new Promise(resolve => {
		$get($domain+'/book/gethotclassify', (data) => {
			callBack(data);
		})
	})
}

//	获取最新书籍,每页返回10条数据
const getNewBooksTwo = function(page, callback) {
	
	let url = $domain+"/book/newbooks/" + page;
	return new Promise( resolve => {
		$get(url, (data) => {
			for (var i = 0; i < data.data.length; i++) {
				data.data[i]["type"] = reType(data.data[i]["type"])
			}
			callback(data);
		})
	})
	
}

//	获取月榜单数据
const getMonthTop = function(page, callback) {
	
	let url = $domain+"/book/monthtopbook/" + page;
	return new Promise( resolve => {
		$get(url, (data) => {
			for (var i = 0; i < data.data.length; i++) {
				data.data[i]["type"] = reType(data.data[i]["type"])
			}
			callback(data);
		})
	})
	
}

//	获取周榜单数据
const getWeekTop = function(page, callback) {
	let url = $domain+"/book/weektopbook/" + page;
	return new Promise( resolve => {
		$get(url, (data) => {
			for (var i = 0; i < data.data.length; i++) {
				data.data[i]["type"] = reType(data.data[i]["type"])
			}
			callback(data);
		})
	})
}

//	获取喜欢榜单
const getLikeTop = function(page, callback) {
	let url = $domain+"/book/toplikebook/" + page;
	return new Promise( resolve => {
		$get(url, (data) => {
			for (var i = 0; i < data.data.length; i++) {
				data.data[i]["type"] = reType(data.data[i]["type"])
			}
			callback(data);
		})
	})
}

function showMessage(code, message) {
	setTimeout(function() {
		if (code == 0) {
			uni.showLoading({
				title: message,
				duration: 800
			})
		} else if (code == 1) {
			uni.showToast({
				title: message,
				icon: "none"
			})
		}
	}, 1000);
}

function verifyLogin(){
	let userInfo = getStore("userInfo");
	if ( Boolean(userInfo)==false ){
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
		return false;
	}
	
	return userInfo;
}

export {
	login,
	getNewBooks,
	bookInfo,
	addCollect,
	getChapter,
	getStatus,
	likeBook,
	getChapterContent,
	searchBook,
	getCollect,
	searchCollectBook,
	getClassify,
	getClassifyBooks,
	getTopTenBooks,
	getHotClassify,
	getNewBooksTwo,
	getMonthTop,
	getWeekTop,
	getLikeTop,
	wxUserLogin
}
