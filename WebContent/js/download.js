$(document).ready(function(){
	var sign = document.getElementById('sign');
	sign.innerHTML = sessionStorage.username ? sessionStorage.username : '请登录';
	var options = {
			'method' : 'get',
			'url' : '/ssh_demo/res/get',
			'async' : 'false',
			'dataType' : 'JSON'
	};
	myAjax(options);
})
	
	function myAjax(opt) {
	    opt = opt || {}; // 短路运算符 opt = opt && '3'
	    opt.method = opt.method || 'POST';
	    opt.url = opt.url || '';
	    opt.async = opt.async || true;
	    opt.data = opt.data || null;
	    opt.dataType = opt.dataType || 'JSON'
	    opt.success = opt.success || function (data) {
		    	if (opt.dataType === 'JSON') {
		    		var jsonObj = JSON.parse(data.responseText);
		    		renderData(jsonObj['resource']);
		        }else if (opt.dataType === 'XML') {
		        	alert('XML');
		        }
	        };

	    var xmlHttp = null;
	    if (XMLHttpRequest) { 
	        xmlHttp = new XMLHttpRequest(); // 非ie浏览器ajax对象
	    }
	    else {
	        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP'); // ie下的ajax对象
	    }

	    var params = [];var postData = '';
	    if(opt.data != null) {
	        for (var key in opt.data) {
	            params.push(key + '=' + opt.data[key]);
	        }
	        postData = params.join('&');
	    }

	    if (opt.dataType === 'JSONP') {
	        creatScript(opt.url, postData);
	    } else {
	        if (opt.method.toUpperCase() === 'POST') {
	            xmlHttp.open(opt.method, opt.url, opt.async);
	            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
	            xmlHttp.send(postData);
	        } else if (opt.method.toUpperCase() === 'GET') {
	        	if(postData.length > 0) {
	        		xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
	        	}else {
	        		xmlHttp.open(opt.method, opt.url, opt.async);
	        	}
	            xmlHttp.send(null);
	        }
	        
	        xmlHttp.onreadystatechange = function () {
	            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
	            	opt.success(xmlHttp);
	            }
	        };
	    }
	}

	// 渲染数据
	function renderData(dataList) {
		var list = document.getElementById("dataList");
		var length = dataList.length;
		var str = '';
		var isIE = true;
		// if(+[1,])isIE = false; +为将1，转为数值,ie是不能转的，NaN;而其他浏览器会忽略，逗号,所以能转为数字1(高版本的ie可以忽略了。。。)
		for(var i=0; i < length; i++) {
			dataList[i].url = encodeURI(dataList[i].url);
			str += '<tr><td class="body-item mbr-fonts-style display-7">${dataList[i].id}</td><td class="body-item mbr-fonts-style display-7">${dataList[i].title}</td><td class="body-item mbr-fonts-style display-7">${dataList[i].author}</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td></tr>';
		}
		
		list.innerHTML = str;
		var charge = document.getElementsByClassName("download");
		hrefListener(charge, dataList);
	}
	
	function hrefListener(charge, dataList) {
		var i = 0;
		var len = charge.length;
		for(;i < len; i++) {
			(function(i){
				charge[i].onclick = function(){
					if(sessionStorage.username == null || sessionStorage.username.length <= 0) {
						alert("请先登录！");
						return false;
					}else {
						window.location.href = dataList[i].url;
					}
				}
			})(i);
			
		}
	}
	
	function creatScript(url, data) {
		var oScript = document.createElement('script');
		oScript.src = url + '?' + data + '&callback=getEn';
		document.body.appendChild(oScript);
	}
