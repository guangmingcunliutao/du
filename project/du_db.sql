/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : du_db

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2018-10-18 11:20:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pro_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pro_img` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pro_sale` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pro_cost` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `pro_tag` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pro_desc` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '小度智能音响', 'images/pro_yx.png', '89', '249', '新品', '伶俐动听的百度 AI 小当家');
INSERT INTO `product` VALUES ('2', '小度在家', 'images/pro_xdzj.png', '699', '1599', null, '百度 AI 首款带屏智能音箱');
INSERT INTO `product` VALUES ('3', 'raven H', 'images/pro_dy.png', null, '1699', null, '小而强大的个人家庭助理');
INSERT INTO `product` VALUES ('4', '博联智能插座', 'images/pro_cz.png', null, '49', '新品', '小插座大能耐');
INSERT INTO `product` VALUES ('5', '博联智能红外遥控', 'images/pro_ykq.png', null, '79', null, '让普通家电变智能');
INSERT INTO `product` VALUES ('6', '百度网盘超级会员', 'images/pro_sp.jpg', null, '30', null, '专属超大容量，极速下载特权');

-- ----------------------------
-- Table structure for pro_img
-- ----------------------------
DROP TABLE IF EXISTS `pro_img`;
CREATE TABLE `pro_img` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pro_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pro_img1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pro_img2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pro_img3` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pro_img4` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of pro_img
-- ----------------------------
INSERT INTO `pro_img` VALUES ('1', '小度智能音响', 'https://product-online.cdn.bcebos.com/1536584253871%EF%BC%88%E8%A7%92%E5%BA%A6%E5%9B%BE4%EF%BC%89%E5%B0%8F%E5%BA%A6%E9%9F%B3%E7%AE%B1%E4%BA%A7%E5%93%81%E5%9B%BE800x800.jpg@w_100,h_100', 'https://product-online.cdn.bcebos.com/1536584258754%EF%BC%88%E8%A7%92%E5%BA%A6%E5%9B%BE2%EF%BC%89%E5%B0%8F%E5%BA%A6%E9%9F%B3%E7%AE%B1%E4%BA%A7%E5%93%81%E5%9B%BE800x800.jpg@w_100,h_100', 'https://product-online.cdn.bcebos.com/1536584262632%EF%BC%88%E8%A7%92%E5%BA%A6%E5%9B%BE3%EF%BC%89%E5%B0%8F%E5%BA%A6%E9%9F%B3%E7%AE%B1%E4%BA%A7%E5%93%81%E5%9B%BE800x800.jpg@w_100,h_100', 'https://product-online.cdn.bcebos.com/1536584275507%EF%BC%88%E8%A7%92%E5%BA%A6%E5%9B%BE5%EF%BC%89%E5%B0%8F%E5%BA%A6%E9%9F%B3%E7%AE%B1%E4%BA%A7%E5%93%81%E5%9B%BE800x800.jpg@w_100,h_100');
INSERT INTO `pro_img` VALUES ('2', '小度在家', 'https://product-online.cdn.bcebos.com/03016000200010004.png@w_100,h_100', 'https://product-online.cdn.bcebos.com/1536580726852%EF%BC%88%E9%BB%912%EF%BC%89%E5%B0%8F%E5%BA%A6%E5%9C%A8%E5%AE%B6%E4%BA%A7%E5%93%81%E5%9B%BE%E6%A8%A1%E7%89%88800x800.jpg@w_100,h_100', 'https://product-online.cdn.bcebos.com/1536580730525%EF%BC%88%E9%BB%913%EF%BC%89%E5%B0%8F%E5%BA%A6%E5%9C%A8%E5%AE%B6%E4%BA%A7%E5%93%81%E5%9B%BE%E6%A8%A1%E7%89%88800x800.jpg@w_100,h_100', 'https://product-online.cdn.bcebos.com/1536580734211%EF%BC%88%E9%BB%914%EF%BC%89%E5%B0%8F%E5%BA%A6%E5%9C%A8%E5%AE%B6%E4%BA%A7%E5%93%81%E5%9B%BE%E6%A8%A1%E7%89%88800x800.jpg@w_100,h_100');
INSERT INTO `pro_img` VALUES ('3', 'raven H', 'https://product-online.cdn.bcebos.com/1536579492459%E6%B8%A1%E9%B8%A6800x800-1.jpg@w_100,h_100', 'https://product-online.cdn.bcebos.com/1536579502405%E6%B8%A1%E9%B8%A6800x800-3.jpg@w_100,h_100', 'https://product-online.cdn.bcebos.com/1536579507920%E6%B8%A1%E9%B8%A6800x800-5.jpg@w_100,h_100', 'https://product-online.cdn.bcebos.com/dy.jpg@w_100,h_100');
INSERT INTO `pro_img` VALUES ('4', '博联智能插座', 'https://product-online.cdn.bcebos.com/chazuo_1.png@w_100,h_100', 'https://product-online.cdn.bcebos.com/15365781843422.jpg@w_100,h_100', 'https://product-online.cdn.bcebos.com/15365781887043.jpg@w_100,h_100', 'https://product-online.cdn.bcebos.com/15365781928714.jpg@w_100,h_100');
INSERT INTO `pro_img` VALUES ('5', '博联智能红外遥控', 'https://product-online.cdn.bcebos.com/15365785665932.jpg@w_100,h_100', 'https://product-online.cdn.bcebos.com/15365785748134.jpg@w_100,h_100', 'https://product-online.cdn.bcebos.com/yaokongqi.png@w_100,h_100', '');
INSERT INTO `pro_img` VALUES ('6', '百度网盘超级会员', 'https://product-online.cdn.bcebos.com/1536577852293%E4%BA%A7%E5%93%81%E5%9B%BE1.png@w_100,h_100', 'https://product-online.cdn.bcebos.com/1536577860489%E4%BA%A7%E5%93%81%E5%9B%BE2.png@w_100,h_100', 'https://product-online.cdn.bcebos.com/1536577864421%E4%BA%A7%E5%93%81%E5%9B%BE3.png@w_100,h_100', 'https://product-online.cdn.bcebos.com/1536577868725%E4%BA%A7%E5%93%81%E5%9B%BE4.png@w_100,h_100');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(16) CHARACTER SET utf8 NOT NULL,
  `password` varchar(16) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'lt', 'lt', '13367306742');
INSERT INTO `user` VALUES ('18', 'testtest', 'testtest', '13367306742');
INSERT INTO `user` VALUES ('17', 'test', 'test11', '13367306742');
INSERT INTO `user` VALUES ('16', 'cx', 'cxcxcx', '');
