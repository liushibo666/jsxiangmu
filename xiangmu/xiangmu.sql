-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-05-18 08:39:08
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xiangmu`
--
CREATE DATABASE IF NOT EXISTS `xiangmu` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `xiangmu`;

-- --------------------------------------------------------

--
-- 表的结构 `banner`
--

CREATE TABLE `banner` (
  `sid` tinyint(10) NOT NULL,
  `url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `banner`
--

INSERT INTO `banner` (`sid`, `url`) VALUES
(1, 'http://img06.yiguoimg.com/d/others/180510/9288722802910378.jpg'),
(2, 'http://img07.yiguoimg.com/d/others/180512/9288722876114092.jpg'),
(3, 'http://img07.yiguoimg.com/d/others/180507/9288722652505255.jpg'),
(4, 'http://img06.yiguoimg.com/d/others/180510/9288722795111594.jpg'),
(5, 'http://img06.yiguoimg.com/d/others/180510/9288722824471722.jpg'),
(6, 'http://img07.yiguoimg.com/d/others/180509/9288722767520937.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `photos`
--

CREATE TABLE `photos` (
  `sid` tinyint(10) NOT NULL,
  `url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `photos`
--

INSERT INTO `photos` (`sid`, `url`) VALUES
(1, 'http://img06.yiguoimg.com/e/others/170217/9288701136937553.jpg'),
(2, 'http://img07.yiguoimg.com/e/others/170317/9288705349755505.jpg'),
(3, 'http://img06.yiguoimg.com/d/others/180327/9288720830768251.jpg'),
(4, 'http://img06.yiguoimg.com/d/others/180327/9288720830768251.jpg'),
(5, 'http://img07.yiguoimg.com/d/others/171102/9288714534265698.jpg'),
(6, 'http://img05.yiguoimg.com/d/others/180313/9288720228852845.jpg'),
(7, 'http://img05.yiguoimg.com/d/others/180309/9288720096601193.jpg'),
(8, 'http://img05.yiguoimg.com/d/others/180327/9288720830801019.jpg'),
(9, 'http://img07.yiguoimg.com/d/others/180316/9288720384894064.jpg'),
(10, 'http://img05.yiguoimg.com/d/others/180117/9288718115152945.jpg'),
(11, 'http://img07.yiguoimg.com/d/others/180511/9288722856715435.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `tu4`
--

CREATE TABLE `tu4` (
  `sid` tinyint(10) NOT NULL,
  `url` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `tu4`
--

INSERT INTO `tu4` (`sid`, `url`) VALUES
(1, 'http://img06.yiguoimg.com/e/others/160303/9288692687216739.jpg'),
(2, 'http://img07.yiguoimg.com/e/others/160314/9288692888445038.jpg'),
(3, 'http://img07.yiguoimg.com/d/others/180115/9288718007313455.jpg'),
(4, 'http://img06.yiguoimg.com/e/others/170622/9288709403714262.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `twomenu`
--

CREATE TABLE `twomenu` (
  `id` tinyint(10) NOT NULL,
  `ziti` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `twomenu`
--

INSERT INTO `twomenu` (`id`, `ziti`) VALUES
(1, '奇异果'),
(2, '车厘子'),
(3, '黄桃'),
(4, '牛油果'),
(5, '李子'),
(6, '苹果'),
(7, '山竹'),
(8, '香蕉');

-- --------------------------------------------------------

--
-- 表的结构 `xinxi`
--

CREATE TABLE `xinxi` (
  `id` tinyint(4) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `xinxi`
--

INSERT INTO `xinxi` (`id`, `username`, `password`, `email`) VALUES
(1, 'zhangsan', '202cb962ac59075b964b07152d234b70', '123@qq.com'),
(2, 'lisi', 'e10adc3949ba59abbe56e057f20f883e', 'liu@qq.com'),
(3, 'kkk', '310dcbbf4cce62f762a2aaa148d556bd', 'jj@qq.com'),
(4, 'ggg', '827ccb0eea8a706c4c34a16891f84e7b', '123@qq.com'),
(5, 'ppp', '202cb962ac59075b964b07152d234b70', '12345@qq.com'),
(6, 'mmm', '202cb962ac59075b964b07152d234b70', '123@qq.com'),
(7, 'bbb', '202cb962ac59075b964b07152d234b70', '12345@qq.com'),
(8, 'cccc', '202cb962ac59075b964b07152d234b70', '12345@qq.com'),
(9, 'eee', '202cb962ac59075b964b07152d234b70', '1133@qq.com'),
(10, 'ffffffff', '81dc9bdb52d04dc20036dbd8313ed055', '1133@qq.com'),
(11, 'hhh', '827ccb0eea8a706c4c34a16891f84e7b', '12345@qq.com'),
(12, 'qqqqqqq', 'd41d8cd98f00b204e9800998ecf8427e', ''),
(13, 'fffffff', '96e79218965eb72c92a549dd5a330112', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `tu4`
--
ALTER TABLE `tu4`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `twomenu`
--
ALTER TABLE `twomenu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `xinxi`
--
ALTER TABLE `xinxi`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `banner`
--
ALTER TABLE `banner`
  MODIFY `sid` tinyint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- 使用表AUTO_INCREMENT `photos`
--
ALTER TABLE `photos`
  MODIFY `sid` tinyint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- 使用表AUTO_INCREMENT `tu4`
--
ALTER TABLE `tu4`
  MODIFY `sid` tinyint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- 使用表AUTO_INCREMENT `twomenu`
--
ALTER TABLE `twomenu`
  MODIFY `id` tinyint(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- 使用表AUTO_INCREMENT `xinxi`
--
ALTER TABLE `xinxi`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
