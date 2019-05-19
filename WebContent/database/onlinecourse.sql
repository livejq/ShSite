-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 2019-05-19 15:43:40
-- 服务器版本： 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onlinecourse`
--

-- --------------------------------------------------------

--
-- 表的结构 `tb_book`
--

DROP TABLE IF EXISTS `tb_book`;
CREATE TABLE IF NOT EXISTS `tb_book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `content` varchar(500) NOT NULL,
  `pic` varchar(150) NOT NULL DEFAULT 'images/none.jpg',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `tb_book`
--

INSERT INTO `tb_book` (`id`, `title`, `content`, `pic`) VALUES
(1, 'Spring Boot编程思想（核心篇）', '本书是《Spring Boot 编程思想》的核心篇，开篇总览Spring Boot核心特性，接着讨论自动装配（Auto-Configuration）与SpringApplication。全书的讨论以Spring Boot为中心，议题发散至Spring技术栈、JSR及Java。希望透过全局的视角，帮助读者了解Spring Boot变迁的历程；经过多方的比较，帮助读者理解Spring Boot特性的原理；整合标准的规范，帮助读者掌握Spring Boot设计的哲学。', 'images/26922557-1_b_8.jpg'),
(2, 'Python编程快速上手 让繁琐工作自动化', '如今，人们面临的大多数任务都可以通过编写计算机软件来完成。Python是一种解释型、面向对象、动态数据类型的高级程序设计语言。通过Python编程，我们能够解决现实生活中的很多任务。本书是一本面向实践的Python编程实用指南。本书的目的，不仅是介绍Python语言的基础知识，而且还通过项目实践教会读者如何应用这些知识和技能。本书的首部分介绍了基本Python编程概念，第二部分介绍了一些不同的任务，通过编写Python程序，可以让计算机自动完成它们。第二部分的每一章都有一些项目程序，供读者学习。每章的末尾还提供了一些习题和深入的实践项目，帮助读者巩固所学的知识。附录部分提供了所有习题的解答。本书适合任何想要通过Python学习编程的读者，尤其适合缺乏编程基础的初学者。通过阅读本书，读者将能利用强大的编程语言和工具，并且会体会到Python编程的快乐。', 'images/23997502-1_b_6.jpg'),
(3, 'Adobe Photoshop CC 2018经典教程 彩色版', '《Adobe Photoshop CC 2018经典教程（彩色版）》由Adobe公司的专家编写，是Adobe Photoshop CC 2018软件的正规学习用书。 《Adobe Photoshop CC 2018经典教程（彩色版）》包括15章，涵盖了照片的校正、修饰和修复、选区的建立方法、图层、蒙版和通道的用法、文字设计、绘制矢量、视频制作、混合器画笔、打印3D对象以及生成和打印一致的颜色等内容。 《Adobe Photoshop CC 2018经典教程（彩色版）》语言通俗易懂并配以大量的图示，特别适合Photoshop新手阅读；有一定使用经验的用户从中也可学到大量高级功能和Photoshop CC 2018新增的功能。本书也适合各类培训班学员及广大自学人员参考。', 'images/25575671-1_b_1.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `tb_resource`
--

DROP TABLE IF EXISTS `tb_resource`;
CREATE TABLE IF NOT EXISTS `tb_resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `author` varchar(150) NOT NULL,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `tb_resource`
--

INSERT INTO `tb_resource` (`id`, `title`, `author`, `url`) VALUES
(1, '跟我学Spring系列', '开涛', 'download/get?filename=跟我学Spring系列.pdf'),
(2, 'JavaScript核心概念及实践', '邱俊涛', 'download/get?filename=JavaScript核心概念及实践.pdf');

-- --------------------------------------------------------

--
-- 表的结构 `tb_user`
--

DROP TABLE IF EXISTS `tb_user`;
CREATE TABLE IF NOT EXISTS `tb_user` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(80) NOT NULL,
  `password` varchar(100) NOT NULL,
  `auth` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `tb_user`
--

INSERT INTO `tb_user` (`id`, `username`, `password`, `auth`) VALUES
(1, 'livejq', '2b0089f4662669389c61c8e3b6214efb1c8494fe', 1),
(58, 'guest', '7c4a8d09ca3762af61e59520943dc26494f8941b', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
