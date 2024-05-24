const setStore = function(key, value){
	try{
		uni.setStorageSync(key, value);
		return true;
	} catch (e) {
		return false;
	}
}

const getStore = function(key){
	return uni.getStorageSync(key);
}

export {
	setStore,
	getStore
}  
	
