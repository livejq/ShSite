window.onload = function() {
	var btn_register = document.getElementById('btn_register');
	var username = document.getElementById('username');
	var password = document.getElementById('password');
	var password2 = document.getElementById('password2');
	var msg = document.getElementById('msg');
	var sign = document.getElementById('sign');
	sign.innerHTML = sessionStorage.username ? sessionStorage.username : '请登录';
	
	btn_register.onclick = doRegister;
	username.onblur = function() {
		
		$.ajax({
			async : true,
			type : "get",
			url : "/ssh_demo/json/RegisterAction?username=" + username.value,
			dataType : "json",
			success : function(data) {
			  	if(data.msg.status == 2) {// 2 表示存在此用户，不可以创建，所以显示提示信息	
			  		$('#msg').removeAttr('hidden');
				  	msg.innerHTML = data.msg.text;
				  	msg.style.background = "#cc9900";
				  	
				  	username.select();
				  	username.focus();
				}
			},
			error : function(data) {
				$('#msg').removeAttr('hidden');
			  	msg.innerHTML = "请检查网络连接！";
			  	msg.style.background = "#cc9900";
			}
		})
	}
	$("#password2").keydown(function(e){ 
		if (e.which ==13) {
			doRegister();
		}
	});
}

function doRegister() {
	
	if(username.value.length < 4 || username.value.length > 6 || !(/\w{4,6}/.test(username.value))) {		
		alert("用户名为4~6个字符!");
		username.select();
		username.focus();
		return false;
	}else if(password.value.length < 6 || password.value.length > 12 || !(/\w{6,12}/.test(password.value))) {
		alert("密码为6~12个字符!");
		password.select();
		password.focus();
		return false;
	}else if(password.value != password2.value) {
		alert("密码不相符!");
		return false;
	}else {
		$.ajax({
			async : true,
			type : "get",
			url : "/ssh_demo/json/RegisterAction?username=" + username.value + "&password=" + password.value,
			success : function(data) {							
			  	$.each(data, function(index, value){// 循环遍历
			  		if(value.status == 1) {
			  			$('#msg').removeAttr('hidden');					  	
				  		msg.innerHTML = value.text;
				  		msg.style.background = "#70c770";
				  		
				  		username.value = '';
					  	password.value = '';
					  	password2.value = '';
					    username.focus();
					    var t = 2;
					    var point = '. ';
					    var buffer = new StringBuffer();
					    var timer = setInterval(function (){
					    	if(t == 0) {
								clearInterval(timer);									
								window.location.href = "index.jsp";
					    	}
					    	buffer.append(point);
					    	var result = buffer.toString();
					    	msg.innerHTML = value.text + ' ' + result;
					    	t--;
						}, 1000);
				  	}
			    })
			},
			error : function(data) {
				$('#msg').removeAttr('hidden');
				msg.innerHTML = "请检查网络连接！";
				msg.style.background = "#cc9900";
			}
		}) 
	}	
}

//构造一个字符拼接对象
function StringBuffer() {
    this.__strings__ = new Array();
}
StringBuffer.prototype.append = function (str) {// prototype 原型
    this.__strings__.push(str);
    return this;    // 方便链式操作, 也就是可以.append().append()
}
StringBuffer.prototype.toString = function () {
    return this.__strings__.join("");
}

// 不使用下面的方法原因是其加载速度比上面要慢上3毫秒左右(尽量使用原生js来提高性能)
// 与window.onload（所有资源均加载完毕后执行里面的函数，且最后一个总是覆盖前面的）不同的是，
// 当加载出网页的dom结构时即执行里面的函数，且可以执行多个
/*$(document).ready(function(){
	$("button").click(function(){
		  
		var username = document.getElementById('username');
		var password = document.getElementById('password');
		var password2 = document.getElementById('password2');
		if(username.value.length < 4 || username.value.length > 6 || !(/\w{4,6}/.test(username.value))) {		
			alert("用户名为4~6个字符!");
			username.select();
			username.focus();
			return false;
		}else if(password.value.length < 6 || password.value.length > 12 || !(/\w{6,12}/.test(password.value))) {
			alert("密码为6~12个字符!");
			password.select();
			password.focus();
			return false;
		}else if(password.value != password2.value) {
			alert("密码不相符!");
			return false;
		}
		
	    $.post("/ssh_demo/register",
	    {
	      username : username.value,
	      password : password.value
	    },
	    function(data){
	    	$('#msg').removeAtt('hidden');
		  	var msg = document.getElementById('msg');
		  	msg.innerHTML = data;
		  	console.log = data;
	    });
	  });
	});*/
