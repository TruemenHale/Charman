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

 Date: 09/17/2015 20:45:09 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

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

SET FOREIGN_KEY_CHECKS = 1;
