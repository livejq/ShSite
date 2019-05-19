window.onload = function() {
    
    /*隐藏功能栏*/
    var isShow = false;
    var aShow = document.querySelector('.auto-hidden a');
    var float = document.getElementById('float-aside');
    
	aShow.onclick = function() {
		if(float.style.left == "-190px" && isShow == false) {
            float.style.left = '0';
            isShow = true;
		}else{
            float.style.left = '-190px';
            isShow = false;
		}
    }

    /*下拉列表*/
	var oDiv = document.getElementById('click-show');
	var oH5 = oDiv.getElementsByTagName('h5');
    var oUl = oDiv.getElementsByTagName('ul');
    
	for(var i=0;i<oH5.length;i++){
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