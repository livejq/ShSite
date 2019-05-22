window.onload = function() {
	var btn_login = document.getElementById('btn_login');
	var username = document.getElementById('username');
	username.focus();
	var password = document.getElementById('password');
	var sign = document.getElementById('sign');
	sign.innerHTML = sessionStorage.username ? sessionStorage.username : '请登录';
	btn_login.onclick = doLogin;

	$("#password").keydown(function(e){ 
		if (e.which == 13) {
			doLogin();
		}
	});
}

function doLogin() {
		
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
		}else {
			$.ajax({
				async : true,// 默认为true异步, jquery.min.js中已经抛弃了false这个值，原因是严重影响用户体验
				type : "get",
				url : "/ssh_demo/json/LoginAction?username=" + username.value + "&password=" + password.value,
				success : function(data) {
					$.each(data, function(index, value){// 循环遍历
				  		if(value.status == 1) {
				  			console.log(value);
				  			$('#msg').removeAttr('hidden');					  	
					  		msg.innerHTML = value.text;
					  		msg.style.background = "#70c770";
					  		
					  		username.value = '';
						  	password.value = '';
						    username.focus();
						    var t = 2;
						    var point = '. ';
						    var buffer = new StringBuffer();
						    console.log(value.token);
						    if(value.token == null) {
						    	sessionStorage.username = value.username;
								sign.innerHTML = value.username;
							    var timer = setInterval(function (){
							    	if(t == 0) {
										clearInterval(timer);									
										window.location.href = "teacher.jsp";
							    	}
							    	buffer.append(point);
							    	var result = buffer.toString();
							    	msg.innerHTML = value.text + ' ' + result;
							    	t--;
								}, 1000);
						    }else {
							    var timer = setInterval(function (){
							    	if(t == 0) {
										clearInterval(timer);									
										window.location.href = "/ssh_demo/admin/login?username=" + value.username + "&token=" + value.token;
							    	}
							    	buffer.append(point);
							    	var result = buffer.toString();
							    	msg.innerHTML = value.text + ' ' + result;
							    	t--;
								}, 1000);
						    }
						    
					  	}else if(value.status == 2) {
				  			$('#msg').removeAttr('hidden');					  	
					  		msg.innerHTML = value.text;
					  		msg.style.background = "#cc9900";

					  		username.focus();
					  	}else if(value.status == 3) {
				  			$('#msg').removeAttr('hidden');					  	
					  		msg.innerHTML = value.text;
					  		msg.style.background = "#cc9900";

						    password.focus();
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

// 构造一个字符拼接对象
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
