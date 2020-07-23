<h1 align="center">SSH Demo</h1>
<br>

<p align="center">
  	<a href="http://hits.dwyl.io/livejq/ssh_demo"><img alt="HitCount" src="http://hits.dwyl.io/livejq/ssh_demo.svg"></a>
  	<a href="https://github.com/livejq/ssh_demo/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/livejq/ssh_demo.svg"></a>
  	<a href="https://struts.apache.org/index.html"><img alt="Struts2" src="https://img.shields.io/badge/Struts2-2.3.37-blue"></a>
  	<a href="https://mvnrepository.com/artifact/org.hibernate/hibernate-core"><img alt="Hibernate" src="https://img.shields.io/badge/Hibernate-3.6.10-9cf"></a>
  	<a href="https://mobirise.com/"><img alt="Hibernate" src="https://img.shields.io/badge/Mobirise-4.12.4-FF3377"></a>
	<a href="https://github.com/livejq/ssh_demo/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/livejq/ssh_demo.svg"></a>
</p>

<br>

<p align="center">
<span>基于 Struts 2.x 和 Hibernate 3.x 编写的一个Demo</span>
</p>

<hr>
这是入门JavaWeb的第一个框架，虽然经历了那个事件之后，普遍所采用的首选框架已不再是ssh了，但其精髓还在不断地影响着后来者，其不足之处也被作为下一代框架的前车之鉴。新版本的*Struts*还是有很多优点的，较为轻量、可扩展性强等，用在一些中小项目中还是很容易上手的，此入门级demo则很好的诠释了这些。



## 内容列表

- [实现效果](#实现效果)
- [简单介绍](#简单介绍)
  - [前台](#前台)
  - [后台](#后台)
- [安装配置](#安装配置)
- [注意事项](#注意事项)
- [致谢](#致谢)
- [参与贡献方式](#参与贡献方式)
- [许可证](#许可证)



## 实现效果


![软件工程](https://raw.githubusercontent.com/livejq/blog-comment-repo/master/ssh_demo/splash.png "闪屏页面")

![登录](https://raw.githubusercontent.com/livejq/blog-comment-repo/master/ssh_demo/login.png "登录页面")

![教师](https://raw.githubusercontent.com/livejq/blog-comment-repo/master/ssh_demo/teacher.png "教师页面")

![图书](https://raw.githubusercontent.com/livejq/blog-comment-repo/master/ssh_demo/book.png "图书页面")

![下载](https://raw.githubusercontent.com/livejq/blog-comment-repo/master/ssh_demo/download.png "下载页面")


![后台用户页面](https://raw.githubusercontent.com/livejq/blog-comment-repo/master/ssh_demo/admin_user.png "后台用户页面")

![后台教师页面](https://raw.githubusercontent.com/livejq/blog-comment-repo/master/ssh_demo/admin_teacher.png "后台教师页面")

![后台首页页面](https://raw.githubusercontent.com/livejq/blog-comment-repo/master/ssh_demo/admin_index.png "后台首页页面")

![后台图书页面](https://raw.githubusercontent.com/livejq/blog-comment-repo/master/ssh_demo/admin_book.png "后台图书页面")

![后台资源页面](https://raw.githubusercontent.com/livejq/blog-comment-repo/master/ssh_demo/admin_resources.png "后台资源页面")



## 简单介绍

### 前台

利用JQuery的Ajax请求来获取资源，若无响应则直接使用js解析本地文本文件。运用JavaScript的监听来获取上传进度，从而实现一个进度条。运用localStorage来实现客户端的短暂存储，以便限制用户未登录的状态进行下载电子书。

<br>

### 后台

数据的存储管理则交由Hibernate，通过ORM将实体类映射到数据库中的相应的数据表中，然后通过对象图导航语言、HQL、QBC、或直接的SQL语句来实现业务控制，其一级缓存极大的提高了响应速度；使用Struts来响应客户端的请求，并返回JSON格式的数据（其中有返回XML格式，但终究还是JSON格式的较为简洁和便利），其中用到了struts-dojo-xxx.jar这个库。

<br>

可以试着修改，添加Spring支持，完善后面的CRUD等等...



## 安装配置

<br>

> 我的环境

- Eclipse Java EE IDE for Web Developers. Oxygen.3a
- Tomcat 8.5
- MySQL 5.7

<br>

> 导入到Eclipse

新建Dynamic Web Project，将src和WebContent下的内容复制到对应的目录下即可。

<br>

> 导入数据库

将WebContent/database目录下的 [onlinecourse.sql](https://github.com/livejq/ssh_demo/blob/master/WebContent/database/onlinecourse.sql) 文件导入到MySQL即可。



##  注意事项

- JRE目录下的lib/ext扩展库中别忘了添加servlet-api.jar



## 致谢

<br>

感谢秦老师的耐心指导~



## 参与贡献方式

<br>

欢迎[issuess](https://github.com/livejq/ssh_demo/issues)



## 许可证

<br>

@[MIT](https://github.com/livejq/ssh_demo/blob/master/LICENSE) License