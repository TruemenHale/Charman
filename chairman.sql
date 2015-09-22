/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50624
 Source Host           : localhost
 Source Database       : chairman

 Target Server Type    : MySQL
 Target Server Version : 50624
 File Encoding         : utf-8

 Date: 09/22/2015 14:41:11 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `comment`
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) DEFAULT NULL,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `school_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT '0',
  `time` date DEFAULT NULL,
  `father_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Records of `comment`
-- ----------------------------
BEGIN;
INSERT INTO `comment` VALUES ('1', 'sbzlb', '1', '1', '1', '2015-09-17', '0'), ('2', 'yes', '2', '1', '1', '2015-09-17', '1'), ('3', '321', '1', '1', '1', '2015-09-20', '0'), ('5', 'asdf', '2', '1', '1', '2015-09-20', '3'), ('6', '123', '2', '1', '1', '2015-09-20', '3');
COMMIT;

-- ----------------------------
--  Table structure for `president`
-- ----------------------------
DROP TABLE IF EXISTS `president`;
CREATE TABLE `president` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `president` varchar(255) DEFAULT NULL,
  `school_id` int(11) DEFAULT NULL,
  `introduce` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `praise` varchar(255) DEFAULT NULL,
  `posization` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Records of `president`
-- ----------------------------
BEGIN;
INSERT INTO `president` VALUES ('1', 'sb', '1', 'asdf', 'asdf', '12', 'sb'), ('2', 'zlb', '1', 'adsf', 'fvasd', '23', 'bb');
COMMIT;

-- ----------------------------
--  Table structure for `president_praise`
-- ----------------------------
DROP TABLE IF EXISTS `president_praise`;
CREATE TABLE `president_praise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `time` date DEFAULT NULL,
  `school_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Table structure for `role`
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Records of `role`
-- ----------------------------
BEGIN;
INSERT INTO `role` VALUES ('1', 'common'), ('2', 'chairman');
COMMIT;

-- ----------------------------
--  Table structure for `school`
-- ----------------------------
DROP TABLE IF EXISTS `school`;
CREATE TABLE `school` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `school_name` varchar(10) DEFAULT NULL,
  `school_introduce` varchar(1000) DEFAULT NULL,
  `praise` int(11) NOT NULL DEFAULT '0',
  `school_pic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Records of `school`
-- ----------------------------
BEGIN;
INSERT INTO `school` VALUES ('1', '重庆邮电大学', '123', '10', 'fasd'), ('2', '西南大学', null, '0', null), ('3', '重庆大学', null, '0', null), ('4', '西南政法大学', null, '0', null), ('5', '重庆医科大学', null, '0', null), ('6', '重庆师范大学', null, '0', null), ('7', '重庆交通大学', null, '0', null), ('8', '重庆工商大学', null, '0', null), ('9', '重庆理工大学', null, '0', null), ('10', '四川外国语大学', null, '0', null), ('11', '四川美术学院', null, '0', null), ('12', '重庆三峡学院', null, '0', null), ('13', '重庆文理学院', null, '0', null), ('14', '长江师范学院', null, '0', null), ('15', '重庆第二师范学院', null, '0', null), ('16', '重庆警察学院', null, '0', null), ('17', '重庆电力高等专科学校', null, '0', null), ('18', '重庆医药高等专科学校', null, '0', null), ('19', '重庆三峡医药高等专科', null, '0', null), ('20', '重庆航天职业技术学院', null, '0', null), ('21', '重庆电子工程职业学校', null, '0', null), ('22', '重庆工业职业技术学院', null, '0', null), ('23', '重庆城市管理职业学院', null, '0', null), ('24', '重庆工程职业技术学院', null, '0', null), ('25', '重庆机电职业技术学院', null, '0', null), ('26', '重庆水利电力职业技术', null, '0', null), ('27', '重庆工商职业学院', null, '0', null), ('28', '重庆财经职业学院', null, '0', null), ('29', '重庆建筑工程职业学院', null, '0', null), ('30', '重庆师范大学涉外商贸', null, '0', null), ('31', '重庆工商大学融智学院', null, '0', null), ('32', '重庆邮电大学移通学院', null, '0', null), ('33', '重庆工程学院', null, '0', null), ('34', '重庆信息技术职业学院', null, '0', null), ('35', '重庆传媒职业学院', null, '0', null), ('36', '重庆交通职业学院', null, '0', null), ('37', '重庆旅游职业学院', null, '0', null), ('38', '重庆公共运输职业学院', null, '0', null), ('39', '重庆轻工职业学院', null, '0', null), ('40', '重庆幼儿师范高等专科', null, '0', null);
COMMIT;

-- ----------------------------
--  Table structure for `user_praise`
-- ----------------------------
DROP TABLE IF EXISTS `user_praise`;
CREATE TABLE `user_praise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `time` date DEFAULT NULL,
  `school_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Table structure for `user_president`
-- ----------------------------
DROP TABLE IF EXISTS `user_president`;
CREATE TABLE `user_president` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `content` varchar(300) DEFAULT NULL,
  `time` date DEFAULT NULL,
  `president_id` int(11) DEFAULT NULL,
  `father_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Records of `user_president`
-- ----------------------------
BEGIN;
INSERT INTO `user_president` VALUES ('1', '1', 'e', '2015-09-21', '1', '0', '1'), ('2', '1', 'd', '2015-09-21', '0', '1', '1'), ('3', '2', '34', null, '2', '0', '1'), ('4', '2', '234', null, '0', '3', '1');
COMMIT;

-- ----------------------------
--  Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `role_id` int(11) NOT NULL DEFAULT '1',
  `password` varchar(255) NOT NULL,
  `school_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Records of `users`
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('1', 'asdf', 'Lich', 'wqe', '1', '', '0'), ('2', 'test', 'zlb', 'fd', '2', 'd93a5def7511da3d0f2d171d9c344e91', '1'), ('3', 'gsdf', 'test', 'fdsa', '1', '', '0');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
