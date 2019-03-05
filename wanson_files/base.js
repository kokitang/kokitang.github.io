if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
	var paras = document.getElementsByClassName("content");
	for(var i = 0; i < paras.length; i++){
		paras[i].style.width = "100%";
	}
}
var baseConfig = {
	appid : "4C4F3E14-73CB-46D8-ADD8-DAD2AF59B2CB",
	accessToken : "E13CD49E-FE33-4978-AD7F-E9812CA10902",
	requestUrl : getRootPath() + "intf",
	timeout : 60000,
	requestMsg : "requestMsg",
	signature : "4abbcdb5dd6a6cf7c1a353b2f17b5edc",
	secret : "123456789",
	timestamp : "123456798"
};

function getRootPath(){
    var curPath=window.document.location.href;
    var pathName=window.document.location.pathname;
    var pos=curPath.indexOf(pathName);
    var localhostPaht=curPath.substring(0,pos);
    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    return(localhostPaht+projectName+"/");
}

function uuid() {  
    var s = [];  
    var hexDigits = "0123456789abcdef";  
    for (var i = 0; i < 36; i++) {  
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);  
    }  
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010  
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01  
    s[8] = s[13] = s[18] = s[23] = "-";  
   
    var uuid = s.join("").replace(/-/g,"");  
    return uuid;  
}

function checkPhone(phone){
	var phoneRegExp = /^(((13[0-9]{1})|(14[5|7|9]{1})|(15[0-9]{1})|(17[0-3|5-9]{1})|(18[0-9]{1}))+\d{8})$/;
	if(!phoneRegExp.test(phone)){
		return false;
	}
	return true
}

function checkEmail(email){
	var emailRegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	if(!emailRegExp.test(email)){
		return false;
	}
	return true
}
function checkID(str){
	var idRegExp = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
	if(!idRegExp.test(str)){
		return false;
	}
	return true
}
(function(){
	$(".yb_conct").hover(function() {
		$(".yb_conct").css("right", "5px");
		$(".yb_bar .yb_ercode").css('height', '200px');
	}, function() {
		$(".yb_conct").css("right", "-127px");
		$(".yb_bar .yb_ercode").css('height', '53px');
	});
	// 返回顶部
	$(".yb_top").click(function() {
		$("html,body").animate({
			'scrollTop': '0px'
		}, 300)
	});
}())
