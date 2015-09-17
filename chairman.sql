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

 Date: 09/17/2015 21:52:20 PM
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Records of `comment`
-- ----------------------------
BEGIN;
INSERT INTO `comment` VALUES ('1', 'sbzlb', '1', '1', '1', '2015-09-17', '0'), ('2', 'yes', '2', '1', '1', '2015-09-17', '1');
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Records of `school`
-- ----------------------------
BEGIN;
INSERT INTO `school` VALUES ('1', '重庆邮电大学', null, '0'), ('2', '西南大学', null, '0'), ('3', '重庆大学', null, '0'), ('4', '西南政法大学', null, '0'), ('5', '重庆医科大学', null, '0'), ('6', '重庆师范大学', null, '0'), ('7', '重庆交通大学', null, '0'), ('8', '重庆工商大学', null, '0'), ('9', '重庆理工大学', null, '0'), ('10', '四川外国语大学', null, '0'), ('11', '四川美术学院', null, '0'), ('12', '重庆三峡学院', null, '0'), ('13', '重庆文理学院', null, '0'), ('14', '长江师范学院', null, '0'), ('15', '重庆第二师范学院', null, '0'), ('16', '重庆警察学院', null, '0'), ('17', '重庆电力高等专科学校', null, '0'), ('18', '重庆医药高等专科学校', null, '0'), ('19', '重庆三峡医药高等专科', null, '0'), ('20', '重庆航天职业技术学院', null, '0'), ('21', '重庆电子工程职业学校', null, '0'), ('22', '重庆工业职业技术学院', null, '0'), ('23', '重庆城市管理职业学院', null, '0'), ('24', '重庆工程职业技术学院', null, '0'), ('25', '重庆机电职业技术学院', null, '0'), ('26', '重庆水利电力职业技术', null, '0'), ('27', '重庆工商职业学院', null, '0'), ('28', '重庆财经职业学院', null, '0'), ('29', '重庆建筑工程职业学院', null, '0'), ('30', '重庆师范大学涉外商贸', null, '0'), ('31', '重庆工商大学融智学院', null, '0'), ('32', '重庆邮电大学移通学院', null, '0'), ('33', '重庆工程学院', null, '0'), ('34', '重庆信息技术职业学院', null, '0'), ('35', '重庆传媒职业学院', null, '0'), ('36', '重庆交通职业学院', null, '0'), ('37', '重庆旅游职业学院', null, '0'), ('38', '重庆公共运输职业学院', null, '0'), ('39', '重庆轻工职业学院', null, '0'), ('40', '重庆幼儿师范高等专科', null, '0');
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
--  Records of `users`
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('1', 'asdf', 'Lich', 'wqe', '1', ''), ('2', 'adfd', 'zlb', 'fd', '2', 'sdc'), ('3', 'gsdf', 'test', 'fdsa', '1', '');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
