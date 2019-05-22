$(document).ready(function(){
	var name = document.querySelector('h2');
	var degree = document.querySelector('h3');
	var list = document.querySelectorAll('.card-text p');
	var teaImg = document.querySelector('.teacher-img img');
	var sign = document.getElementById('sign');
	sign.innerHTML = sessionStorage.username ? sessionStorage.username : '请登录';
	$.ajax({
		async : true,
		type : "get",
		url : "/ssh_demo/confirmTea/confirm",
		success : function(data) {
			if(data != '200') {
				$.get("json/summary.json", function(data) {
					for(var i in data) {
						name.innerHTML = data[i].name;
						degree.innerHTML = data[i].degree;
						teaImg.src = data[i].pic;
						for(var k = 0; k < list.length; k++) {
							switch(k) {
								case 0:
									list[k].innerHTML = data[i].research;
									break;
								case 1:
									list[k].innerHTML = data[i].introduce;
									break;
								case 2:
									list[k].innerHTML = data[i].achieve;
									break;
								case 3:
									list[k].innerHTML = data[i].contact;
									break;
								default:
									list[k].innerHTML = "暂无信息";
							}
						}
					}
				});
			}else {
				$.ajax({
					async : true,
					type : "get",
					url : "/ssh_demo/teaMsg/get",
					success : function(d) {
							var data = d.teacher;
							name.innerHTML = data.name;
							degree.innerHTML = data.degree;
							teaImg.src = data.pic;
							for(var k = 0; k < list.length; k++) {
								switch(k) {
									case 0:
										list[k].innerHTML = data.research;
										break;
									case 1:
										list[k].innerHTML = data.introduce;
										break;
									case 2:
										list[k].innerHTML = data.achieve;
										break;
									case 3:
										list[k].innerHTML = data.contact;
										break;
									default:
										list[k].innerHTML = "暂无信息";
								}
							}
					},
					error : function(data) {
						console.log("请检查网络连接！");
					}
				});
			}
		},
		error : function(data) {
			console.log("错误码：" + data);
		}
	});
	
})
