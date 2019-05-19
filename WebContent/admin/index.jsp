<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>    
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <link rel="shortcut icon" href="images/logo.ico" type="image/x-icon">
  <meta name="Description" content="">
  <title>后台管理</title>
  <link rel="stylesheet" href="css/style.css">
 </head>
 <body>
  <div id="header">
		<img src="images/logo-livejq.png" alt="软件工程"/>
		<span><s:property value="username"/></span>
		<a href="#">退出系统</a>
  </div>
  <div id="float-aside">
		<aside>
		<div id="click-show">
			<h5>用户管理</h5>
				<ul>
					<li id="user-func"><a href="javascript:void(0)">用户列表</a></li>
				</ul>
			<h5>首页管理</h5>
					<ul>
						<li id="index-func"><a href="javascript:void(0)">修改首页</a></li>
					</ul>
			<h5>教师管理</h5>
				<ul>
					<li id="teacher-func"><a href="javascript:void(0)">教师资料</a></li>
				</ul>
			<h5>教师资源管理</h5>
				<ul>
					<li id="resource-func"><a href="javascript:void(0)">课件列表</a></li>
					<li id="book-func"><a href="javascript:void(0)">参考书籍介绍</a></li>
				</ul>
			</li>
		</div>
	</aside>
	<ul class="auto-hidden">
			<li><a href="javascript:void(0)">&lt;</a></li>
		</ul>
</div>
  <div id="content">
	  <div id="user" class="active">
				<div id="des-title"><h4>用户列表</h4><a href="javascript:void(0)" id="add-user-func">添加用户</a></div>
				<table class="table" cellspacing="0">
            <thead>
              <tr class="table-heads"><th class="head-item mbr-fonts-style display-7">
                      编号</th><th class="head-item mbr-fonts-style display-7">用户名</th><th class="head-item mbr-fonts-style display-7">
                      权限</th><th class="head-item mbr-fonts-style display-7">
                      操作</th></tr>
            </thead><tbody class="dataList">
            			<s:iterator value="users" var="user">
							<tr><td class="uid"><s:property value="#user.id"/></td><td class="body-item mbr-fonts-style display-7"><s:property value="#user.username"/></td><td class="body-item mbr-fonts-style display-7"><s:if test="#user.auth==1">管理员</s:if><s:else>普通用户</s:else></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="deleteUser">删除</a></td></tr>
						</s:iterator>
					</tbody>
				</table>
		</div>

		<div id="addUser" style="display: none">
				<div id="des-title"><h4>添加用户</h4><a href="javascript:void(0)" id="add-user-confirm">确认添加</a></div>
				<table class="table" cellspacing="0">
            <tbody class="dataList">
							<tr><td class="body-item mbr-fonts-style display-7">用户名:</td><td class="body-item mbr-fonts-style display-7"><input type="text" name="username" id="username" placeholder="用户名(4~6个字符)"></td></tr>
							<tr><td class="body-item mbr-fonts-style display-7">密码:</td><td class="body-item mbr-fonts-style display-7"><input type="text" name="password" id="password" placeholder="密码(6~12个字符)"></td></tr>
							<tr><td class="body-item mbr-fonts-style display-7">确认密码:</td><td class="body-item mbr-fonts-style display-7"><input type="text" name="password2" id="password2" placeholder="确认密码"></td></tr>
							<tr><td class="body-item mbr-fonts-style display-7">权限:</td><td class="body-item mbr-fonts-style display-7"><select name="auth"><option value="1" id="admin">管理员</option><option value="0" id="normal">普通用户</option></select></td></tr>
						</tbody>
				</table>
		</div>
		<div id="index" style="display: none">
				<div id="des-title"><h4>首页管理</h4><a href="#">确认修改</a></div>
				<textarea name="theme"></textarea>
	  </div>
	  <div id="teacher" style="display: none">
			<div id="des-title"><h4>教师信息</h4><a href="#">确认修改</a></div>
				<table class="table" cellspacing="0">
            <tbody class="dataList">
							<tr><td class="body-item mbr-fonts-style display-7">教师姓名:</td><td class="body-item mbr-fonts-style display-7"><input type="text" name="name"></td></tr>
							<tr><td class="body-item mbr-fonts-style display-7">职位:</td><td class="body-item mbr-fonts-style display-7"><input type="text" name="degree"></td></tr>
							<tr><td class="body-item mbr-fonts-style display-7">研究方向:</td><td class="body-item mbr-fonts-style display-7"><input type="text" name="research"></td></tr>
							<tr><td class="body-item mbr-fonts-style display-7">简介:</td><td class="body-item mbr-fonts-style display-7"><input type="text" name="introduce"></td></tr>
							<tr><td class="body-item mbr-fonts-style display-7">主要成就:</td><td class="body-item mbr-fonts-style display-7"><input type="text" name="achieve"></td></tr>
							<tr><td class="body-item mbr-fonts-style display-7">邮箱:</td><td class="body-item mbr-fonts-style display-7"><input type="text" name="contact"></td></tr>
							<tr><td class="body-item mbr-fonts-style display-7">照片:</td><td class="body-item mbr-fonts-style display-7"><input type="file" name="file"></td></tr>
						</tbody>
				</table>
	  </div>
	  <div id="resource" style="display:none">
				<div id="des-title"><h4>课件列表</h4><a href="#" id="add-resource-func">添加课件</a></div>
				<table class="table" cellspacing="0">
						<thead>
								<tr class="table-heads"><th class="head-item mbr-fonts-style display-7">
												编号</th><th class="head-item mbr-fonts-style display-7">课件名称</th><th class="head-item mbr-fonts-style display-7">
												发布时间</th><th class="head-item mbr-fonts-style display-7">
												下载查看</th><th class="head-item mbr-fonts-style display-7">操作</th></tr>
							</thead><tbody class="dataList">
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">2019-05-19 11:58:40</td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="download">下载</a></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">删除</a></td></tr>
							</tbody>
				</table>
		</div>
		<div id="book" style="display: none">
				<div id="des-title"><h4>参考书籍</h4><a href="#">添加图书</a></div>
				<table class="table" cellspacing="0">
						<thead>
								<tr class="table-heads"><th class="head-item1">
												编号</th><th class="head-item2">书名</th><th class="head-item3">
												图片</th><th class="head-item4">简介</th><th class="head-item5">操作</th></tr>
							</thead><tbody class="dataList">
									<tr><td class="body-item mbr-fonts-style display-7">1</td><td class="body-item mbr-fonts-style display-7">spring boot</td><td class="body-item mbr-fonts-style display-7">xxx.png</td><td class="body-item mbr-fonts-style display-7"><textarea name="theme">温恩二二二无付付付付热玩儿若若若若若若若若若若若戊二醛惹我日而为今日日晚间偶然我我认为ore荣 人为人儿文呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃</textarea></td><td class="body-item mbr-fonts-style display-7"><a href="javascript:void(0)" class="delete">修改</a>&nbsp;&nbsp;<a href="javascript:void(0)" class="delete">删除</a></td></tr>
									</tbody>
				</table>
			</div>
	</div>
	<script src="jquery/jquery-3.4.0.min.js" ></script>
  <script src="js/backstage.js" ></script>
 </body>
</html>
