window.onload = function() {
    
    /*隐藏功能栏*/
    var isShow = false;
    var aShow = document.querySelector('.auto-hidden a');
    var float = document.getElementById('float-aside');
    
	aShow.onclick = function() {
		if(float.style.left == "-190px" && isShow == false) {
            float.style.left = '0';
            isShow = true;
		}else {
            float.style.left = '-190px';
            isShow = false;
		}
    }

    /*下拉列表*/
	var oDiv = document.getElementById('click-show');
	var oH5 = oDiv.getElementsByTagName('h5');
    var oUl = oDiv.getElementsByTagName('ul');
    
	for(var i=0;i<oH5.length;i++) {
		oH5[i].index = i;
		oH5[i].onclick = function(){
			if(oUl[this.index].style.display==='none'){
				oUl[this.index].style.display='block';
			}else{
				oUl[this.index].style.display='none';
			}
		}
    }
    
    /*点击展示信息*/
    showTab();
    
    /*退出登录*/
    var exitEvent = document.getElementById('exit');
    exitEvent.onclick = function() {
    	document.cookie = null;
    	document.location.href = "../index.jsp";
    }
    
    /*确认添加用户*/
    var addUserConfirm = document.getElementById('add-user-confirm');
    addUserConfirm.onclick = function() {
    	var username = document.getElementById('username');
    	var password = document.getElementById('password');
    	var password2 = document.getElementById('password2');
    	var admin = document.getElementById('admin');
    	var auth = 1;
    	if(admin.selected != true) {
    		 auth = 0;
    	}
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
    			url : "/ssh_demo/user/put?username=" + username.value + "&password=" + password.value + "&auth=" + auth,
    			success : function(data) {
    				alert(data);
    				username.value = '';
				  	password.value = '';
				  	password2.value = '';
				    username.focus();
				    window.location.reload();
    			},
    			error : function(data) {
    				alert('请检查网络连接！');
    			}
    		});
    	}
    }
    
    /*删除用户*/
    var deleteUser = document.getElementsByClassName('deleteUser');
    var id = document.getElementsByClassName('uid');
	var len = deleteUser.length;
    for(var k = 0; k < len; k++) {
    	var num = id[k].innerText;
    	(function(k) {
	    	deleteUser[k].onclick = function() {
	    		$.ajax({
					async : true,
					type : "get",
					url : "/ssh_demo/user/delete?id=" + num,
					success : function(data) {
						alert(data);
						var index = $(deleteUser[k]).parents("tr").index(); //这个可获取当前tr的下标
						console.log(index);
						$(deleteUser[k]).parents("tr").remove();
					},
	    			error : function(data) {
	    				alert('请检查网络连接！');
	    			}
	    		});
	    	}
    	})(k);
    }
    
    /*修改首页主题说明*/
    var indexModify = document.getElementById('index-modify');
    var textareaIndex = document.getElementById('textarea-index');
    indexModify.onclick = function() {
    	var txt = textareaIndex.value;
    	$.ajax({
			async : true,
			type : "get",
			url : "/ssh_demo/theme/modify?txt=" + txt,
			success : function(data) {
				alert(data);
			},
			error : function(data) {
				alert('请检查网络连接！');
			}
		});
    }
    
    /*修改教师信息*/
    var teacherConfirm = document.getElementById('teacher-confirm');
    var teaImg = document.getElementById('teaImg');
	var size = null;
	teaImg.addEventListener('change', function() {
		size = teaImg.files[0].size/(1024*1024);
		if(size > 4) {
    		alert("您的文件大小已超过4MB!");
    		return false;
    	}
    	ajax_upload();
    }, false);
	
    teacherConfirm.onclick = function() {
    	var teaName = document.getElementById('teaName');
    	var teaDegree = document.getElementById('teaDegree');
    	var teaResearch = document.getElementById('teaResearch');
    	var teaIntroduce = document.getElementById('teaIntroduce');
    	var teaAchieve = document.getElementById('teaAchieve');
    	var teaContact = document.getElementById('teaContact');
    	
    	if(teaName.value.length > 10 || teaName.value.length < 2) {		
			alert("名字为2~10个字符!");
			teaName.select();
			teaName.focus();
			return false;
		}else if(teaDegree.value.length > 20 || teaDegree.value.length < 2) {
			alert("职位为2~20个字符!");
			teaDegree.select();
			teaDegree.focus();
			return false;
		}else if(teaResearch.value.length > 20 || teaResearch.value.length < 2) {
			alert("研究方向为2~20个字符!");
			teaResearch.select();
			teaResearch.focus();
			return false;
		}else if(teaIntroduce.value.length > 100 || teaIntroduce.value.length < 2) {
			alert("简介为2~100个字符!");
			teaIntroduce.select();
			teaIntroduce.focus();
			return false;
		}else if(teaAchieve.value.length > 20 || teaAchieve.value.length < 2) {
			alert("主要成为2~20个字符!");
			teaAchieve.select();
			teaAchieve.focus();
			return false;
		}else if(teaContact.value.length > 20 || teaContact.value.length < 2) {
			alert("邮箱为2~20个字符!");
			teaContact.select();
			teaContact.focus();
			return false;
		}else if(teaImg.files[0] == null) {
    		alert("您还没选择图片文件呢!");
    		return false;
    	}else {
	    	$.ajax({
				async : true,
				type : "post",
				contentType : "application/json;charset=utf8",
				url : "/ssh_demo/teaMsg/modify",
				dataType : "json",
				data : JSON.stringify({
					"id" : 1,
					"name" : teaName.value,
					"degree" : teaDegree.value,
					"research" : teaResearch.value,
					"introduce" : teaIntroduce.value,
					"achieve" : teaAchieve.value,
					"contact" : teaContact.value,
					"pic" : teaImg.files[0].name
				}),
				success : function(data) {
					alert.log(data);
					
					teaName.value = '';
					teaName.focus();
					teaDegree.value = '';
			    	teaResearch.value = '';
			    	teaIntroduce.value = '';
			    	teaAchieve.value = '';
			    	teaContact.value = '';
			    	teaImg.files[0] = null;
					
				},
				error : function(data) {
					console.log(data);
					alert('请检查网络连接！');
				}
			});
		}
    }
    
}

function showTab() {

    /*功能列表*/
    var userFunc = document.getElementById('user-func');
    var user = document.getElementById('user');
    userFunc.onclick = function() {
        var active1 = document.querySelector('.active');
        if(user.style.display != 'block') {
            active1.style.display = 'none';
            active1.className = '';
            user.className = 'active';
            user.style.display = 'block';
        }
    }

    var indexFunc = document.getElementById('index-func');
    var index = document.getElementById('index');
    indexFunc.onclick = function() {
        var active2 = document.querySelector('.active');
        if(index.style.display != 'block') {
            active2.style.display = 'none';
            active2.className = '';
            index.className = 'active';
            index.style.display = 'block';
        }
    }

    var teacherFunc = document.getElementById('teacher-func');
    var teacher = document.getElementById('teacher');
    teacherFunc.onclick = function() {
        var active2 = document.querySelector('.active');
        if(teacher.style.display != 'block') {
            active2.style.display = 'none';
            active2.className = '';
            teacher.className = 'active';
            teacher.style.display = 'block';
        }
    }
    
    var teacherModify2 = document.getElementById('teacher-modify');
    var showTeaMsg2 = document.getElementById('showTeaMsg');
    teacherModify2.onclick = function() {
        var active2 = document.querySelector('.active');
        if(showTeaMsg2.style.display != 'block') {
            active2.style.display = 'none';
            active2.className = '';
            showTeaMsg2.className = 'active';
            showTeaMsg2.style.display = 'block';
        }
    }

    var resourceFunc = document.getElementById('resource-func');
    var resource = document.getElementById('resource');
    resourceFunc.onclick = function() {
        var active2 = document.querySelector('.active');
        if(resource.style.display != 'block') {
            active2.style.display = 'none';
            active2.className = '';
            resource.className = 'active';
            resource.style.display = 'block';
        }
    }

    var bookFunc = document.getElementById('book-func');
    var book = document.getElementById('book');
    var bookFunc = document.getElementById('book-func');
    bookFunc.onclick = function() {
        var active2 = document.querySelector('.active');
        if(book.style.display != 'block') {
            active2.style.display = 'none';
            active2.className = '';
            book.className = 'active';
            book.style.display = 'block';
        }
    }
    
    /*表内按钮*/
    var addFunc = document.getElementById('add-user-func');
    var addUser = document.getElementById('addUser');
    addFunc.onclick = function() {
        var active2 = document.querySelector('.active');
        if(addUser.style.display != 'block') {
            active2.style.display = 'none';
            active2.className = '';
            addUser.className = 'active';
            addUser.style.display = 'block';
        }
    }
}

function createXHR() {
	var xhr = null;
	if(window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}else {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xhr;
}
/*上传图片进度条*/
function add(loaded) {
    var tiao = $(".tiao");		
	tiao.css("width",loaded + "%").html(loaded + "%");
}

function xh(loaded) {
	if(loaded > 100) {			
//		$(".ok").html("加载完成").fadeIn("slow");
		return;
	}

	if(loaded <= 100) {
		setTimeout("xh()", 60);
//		var num = Math.ceil(Math.random()*(100-loaded));
		add(loaded);
//		loaded = loaded + num;			
	}
}
function ajax_upload() {
	var xhr = createXHR();
	var formData = new FormData();
	var file = document.getElementById('teaImg').files[0];
	formData.append('file', file);

	xhr.upload.onprogress = function(event) {
		var tbox = document.querySelector('.tbox');
		tbox.style.display = 'block';
		schedule = event.loaded/event.total*100;
		schedule = schedule.toFixed(2);
		xh(schedule);
	}

	xhr.open('POST', '/ssh_demo//teaImg/upload', true);
	xhr.send(formData);
	xhr.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
//			alert(this.responseText);
			var tbox = document.querySelector('.tbox');
			setTimeout(function(){tbox.style.display = 'none';}, 2000);
		}
	}
	
}