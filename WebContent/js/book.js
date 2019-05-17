$(document).ready(function(){
	var sign = document.getElementById('sign');
	sign.innerHTML = sessionStorage.username ? sessionStorage.username : '请登录';
	var options = {
			'method' : 'get',
			'url' : '/ssh_demo/book/get',
			'async' : 'false',
			'dataType' : 'XML'
	};
	myAjax(options);
})
	
//	function onSuccess(data) {
//    	if (opt.dataType === 'JSON') {
//    		alert('JSON');
//        }else if (opt.dataType === 'XML') {
//        	console.log(data.response);
//        }
//    }

	function myAjax(opt) {
	    opt = opt || {}; // 短路运算符 opt = opt && '3'
	    opt.method = opt.method || 'POST';
	    opt.url = opt.url || '';
	    opt.async = opt.async || true;
	    opt.data = opt.data || null;
	    opt.dataType = opt.dataType || 'JSON'
	    opt.success = opt.success || function (data) {
		    	if (opt.dataType === 'JSON') {
		    		alert('JSON');
		        }else if (opt.dataType === 'XML') {
		        	var xmlDoc = null;
		        	var txt = xmlHttp.response;
		        	if (window.DOMParser) {
		        	    parser = new DOMParser();
		        	    xmlDoc = parser.parseFromString(txt, "application/xml");
		        	} else {// Internet Explorer 
		        	    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		        	    xmlDoc.async = false;
		        	    xmlDoc.loadXML(txt);// 兼容低版本的ie，高版本已支持上面的w3c标准
		        	}
		        	if(xmlDoc != null) {
		        		var root = xmlDoc.documentElement;// xmlDoc是XMLDocument对象  root为element对象
		        		var sum = root.childNodes.length;
		        		var subSum = root.childNodes[0].childNodes.length;
		        		var dataList = new Array(sum);
		        		var dataJson = {};
		        		for(var i = 0; i < sum; i++) {// 太难搞了，还是用JSON数据格式吧》~《
		        			dataList[i] = {};
		        			for(var k = 0; k < subSum; k++) {
		        				var tagName = root.childNodes[i].childNodes[k].tagName;
		        				dataList[i][tagName] = root.childNodes[i].childNodes[k].textContent;
		        			}
		        			
		        		}
		        		renderData(dataList);
		        	}else {
		        		
		        	}
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
	function renderData(dataList){
		var list = document.getElementById("dataList");
		var length = dataList.length;
		
		var str = '';
		for(var i=0; i < length; i++){
			str += `
			<section class="features11 cid-roqP0VSGKz">

    <div class="container">   
        <div class="col-md-12">
            <div class="media-container-row">
                <div class="mbr-figure m-auto" style="width: 25%;">
                    <img src="${dataList[i].pic}" alt="Mobirise" title="">
                </div>
                <div class=" align-left aside-content">
                    <h2 class="mbr-title pt-2 mbr-fonts-style display-2">
                        ${dataList[i].title}</h2>
                    <div class="mbr-section-text">
                        
                    </div>

                    <div class="block-content">
                        <div class="card p-3 pr-3">
                            <div class="media">
                                     
                                <div class="media-body">
                                    
                                </div>
                            </div>                

                            <div class="card-box">
                                <p class="block-text mbr-fonts-style display-7">
                                  ${dataList[i].content}</p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div> 
    </div>
         
</section>
			`
		}
		list.innerHTML = str;
	}
	
	function creatScript(url, data) {
		var oScript = document.createElement('script');
		oScript.src = url + '?' + data + '&callback=getEn';
		document.body.appendChild(oScript);
	}
