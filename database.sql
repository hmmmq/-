-- MySQL dump 10.13  Distrib 8.0.40, for macos14 (arm64)
--
-- Host: localhost    Database: culturalcreativemalldb
-- ------------------------------------------------------
-- Server version	8.4.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  `product_id` int DEFAULT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `product_discount_price` decimal(10,2) DEFAULT NULL,
  `product_price_difference` decimal(10,2) DEFAULT NULL,
  `product_category` varchar(50) NOT NULL,
  `product_image_path` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite`
--

DROP TABLE IF EXISTS `favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite` (
  `favorite_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  `product_id` int DEFAULT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `product_discount_price` decimal(10,2) DEFAULT NULL,
  `product_price_difference` decimal(10,2) DEFAULT NULL,
  `product_category` varchar(50) NOT NULL,
  `product_image_path` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`favorite_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite`
--

LOCK TABLES `favorite` WRITE;
/*!40000 ALTER TABLE `favorite` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `order_item_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `product_discount_price` decimal(10,2) DEFAULT NULL,
  `product_price_difference` decimal(10,2) DEFAULT NULL,
  `product_category` varchar(50) NOT NULL,
  `product_image_path` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  PRIMARY KEY (`order_item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (1,4,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',2,20.00),(2,4,2,'测试商品2',12.00,10.00,2.00,'测试商品','test2.png',11,110.00),(3,20,2,'测试商品2',12.00,10.00,2.00,'测试商品','test2.png',3,30.00),(4,21,2,'测试商品2',12.00,10.00,2.00,'测试商品','test2.png',1,10.00),(5,22,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(6,23,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(7,24,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(8,25,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(9,26,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(10,27,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(11,28,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(12,29,2,'测试商品2',12.00,10.00,2.00,'测试商品','test2.png',1,10.00),(13,30,2,'测试商品2',12.00,10.00,2.00,'测试商品','test2.png',1,10.00),(14,31,2,'测试商品2',12.00,10.00,2.00,'测试商品','test2.png',1,10.00),(15,32,2,'测试商品2',12.00,10.00,2.00,'测试商品','test2.png',1,10.00),(16,33,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(17,34,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(18,35,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(19,36,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(20,37,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(21,38,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(22,39,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(23,40,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(24,41,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(25,42,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(26,43,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(27,44,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00),(28,45,1,'测试商品1',11.00,10.00,1.00,'测试商品','test1.png',1,10.00);
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  `discount_price` decimal(10,2) DEFAULT NULL,
  `price_difference` decimal(10,2) GENERATED ALWAYS AS ((`price` - `discount_price`)) VIRTUAL,
  `stock` int NOT NULL,
  `category` varchar(50) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` (`product_id`, `product_name`, `description`, `price`, `discount_price`, `stock`, `category`, `image_path`, `created_at`, `updated_at`) VALUES (1,'测试商品1','测试商品1',11.00,10.00,100,'测试商品','test1.png','2024-11-12 11:24:02','2024-11-12 11:24:02'),(2,'测试商品2','测试商品2',12.00,10.00,100,'测试商品','test2.png','2024-11-12 11:24:41','2024-11-12 11:24:41');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `order_item_id` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  `product_id` int DEFAULT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `product_discount_price` decimal(10,2) DEFAULT NULL,
  `product_price_difference` decimal(10,2) DEFAULT NULL,
  `product_category` varchar(50) NOT NULL,
  `product_image_path` varchar(255) NOT NULL,
  `rating` int DEFAULT NULL,
  `comment_detail` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`review_id`),
  CONSTRAINT `review_chk_1` CHECK (((`rating` >= 1) and (`rating` <= 5)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_type` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin1','12345678',1,'2024-11-11 12:46:10','2024-11-11 12:46:10'),(2,'普通用户2','1234567',0,'2024-11-09 22:12:24','2024-11-09 22:12:24');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userorder`
--

DROP TABLE IF EXISTS `userorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userorder` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `total_price` decimal(10,2) DEFAULT NULL,
  `status_name` varchar(255) DEFAULT NULL,
  `status_code` int DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `receive_province` varchar(255) DEFAULT NULL,
  `receive_postcode` varchar(255) DEFAULT NULL,
  `receive_city` varchar(255) DEFAULT NULL,
  `receive_detail_address` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userorder`
--

LOCK TABLES `userorder` WRITE;
/*!40000 ALTER TABLE `userorder` DISABLE KEYS */;
INSERT INTO `userorder` VALUES (4,2,'普通用户2',130.00,'未支付',1,'2024-11-12 17:10:37','2024-11-12 17:10:37',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,2,'普通用户2',0.00,'未支付',1,'2024-11-12 17:14:02','2024-11-12 17:14:02',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,2,'普通用户2',0.00,'未支付',1,'2024-11-12 17:14:54','2024-11-12 17:14:54',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,2,'普通用户2',10.00,'未支付',1,'2024-11-12 17:55:07','2024-11-12 17:55:07',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,2,'普通用户2',10.00,'未支付',1,'2024-11-12 17:57:42','2024-11-12 17:57:42',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,2,'普通用户2',10.00,'未支付',1,'2024-11-12 17:59:49','2024-11-12 17:59:49',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,2,'普通用户2',10.00,'未支付',1,'2024-11-12 18:01:31','2024-11-12 18:01:31',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,2,'普通用户2',10.00,'未支付',1,'2024-11-12 18:02:12','2024-11-12 18:02:12',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,2,'普通用户2',10.00,'未支付',1,'2024-11-12 18:03:16','2024-11-12 18:03:16',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(13,2,'普通用户2',10.00,'未支付',1,'2024-11-12 18:04:02','2024-11-12 18:04:02',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(14,2,'普通用户2',60.00,'未支付',1,'2024-11-12 20:24:06','2024-11-12 20:24:06',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(15,2,'普通用户2',50.00,'未支付',1,'2024-11-12 20:24:27','2024-11-12 20:24:27',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(16,2,'普通用户2',50.00,'未支付',1,'2024-11-12 20:24:45','2024-11-12 20:24:45',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,2,'普通用户2',30.00,'未支付',1,'2024-11-12 20:24:59','2024-11-12 20:24:59',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,2,'普通用户2',30.00,'未支付',1,'2024-11-12 20:27:19','2024-11-12 20:27:19',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(19,2,'普通用户2',30.00,'未支付',1,'2024-11-12 20:28:07','2024-11-12 20:28:07',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,2,'普通用户2',30.00,'未支付',1,'2024-11-12 20:28:54','2024-11-12 20:28:54',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(21,2,'普通用户2',10.00,'未支付',1,'2024-11-12 20:33:45','2024-11-12 20:33:45',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(22,2,'普通用户2',10.00,'未支付',1,'2024-11-12 20:34:45','2024-11-12 20:34:45',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(23,2,'普通用户2',10.00,'未支付',1,'2024-11-12 20:35:51','2024-11-12 20:35:51',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(24,2,'普通用户2',10.00,'未支付',1,'2024-11-12 20:37:50','2024-11-12 20:37:50',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(25,2,'普通用户2',10.00,'未支付',1,'2024-11-12 20:40:34','2024-11-12 20:40:34',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(26,2,'普通用户2',10.00,'未支付',1,'2024-11-12 20:41:02','2024-11-12 20:41:02',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(27,2,'普通用户2',10.00,'未支付',1,'2024-11-12 20:41:20','2024-11-12 20:41:20',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(28,2,'普通用户2',10.00,'未支付',1,'2024-11-12 20:42:37','2024-11-12 20:42:37',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(29,2,'普通用户2',10.00,'未支付',1,'2024-11-12 21:05:09','2024-11-12 21:05:09',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(30,2,'普通用户2',10.00,'未支付',1,'2024-11-12 21:06:55','2024-11-12 21:06:55',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(31,2,'普通用户2',10.00,'已支付',2,'2024-11-12 21:07:43','2024-11-12 21:07:45',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(32,2,'普通用户2',10.00,'已支付',2,'2024-11-12 21:13:16','2024-11-12 21:13:20','Dublin',NULL,'Dublin','38Apt 25 Wolfe Tone Street','Meiqi','Huang','0877151091'),(33,2,'普通用户2',10.00,'已支付',2,'2024-11-12 21:24:57','2024-11-12 21:25:03','Dublin',NULL,'Dublin','38Apt 25 Wolfe Tone Street','Meiqi','Huang','0877151091'),(34,2,'普通用户2',10.00,'已支付',2,'2024-11-12 21:26:27','2024-11-12 21:26:28',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(35,2,'普通用户2',10.00,'未支付',1,'2024-11-12 21:26:45','2024-11-12 21:26:45',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(36,2,'普通用户2',10.00,'已支付',2,'2024-11-12 21:26:47','2024-11-12 21:27:01','Dublin',NULL,'Dublin','38Apt 25 Wolfe Tone Street','Meiqi','Huang','0877151091'),(37,2,'普通用户2',10.00,'未支付',1,'2024-11-12 21:27:45','2024-11-12 21:27:45',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(38,2,'普通用户2',10.00,'已支付',2,'2024-11-12 21:27:49','2024-11-12 21:27:57','Dublin',NULL,'Dublin','38Apt 25 Wolfe Tone Street','Meiqi','Huang','0877151091'),(39,2,'普通用户2',10.00,'未支付',1,'2024-11-12 21:29:11','2024-11-12 21:29:11',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(40,2,'普通用户2',10.00,'已支付',2,'2024-11-12 21:29:58','2024-11-12 21:30:02','Dublin',NULL,'Dublin','38Apt 25 Wolfe Tone Street','Meiqi','Huang','0877151091'),(41,2,'普通用户2',10.00,'已支付',2,'2024-11-12 21:30:34','2024-11-12 21:30:40','Dublin',NULL,'Dublin','38Apt 25 Wolfe Tone Street','Meiqi','Huang','0877151091'),(42,2,'普通用户2',10.00,'已支付',2,'2024-11-12 21:31:45','2024-11-12 21:31:48','Dublin',NULL,'Dublin','38Apt 25 Wolfe Tone Street','Meiqi','Huang','0877151091'),(43,2,'普通用户2',10.00,'已支付',2,'2024-11-12 21:35:57','2024-11-12 21:36:01','Dublin',NULL,'Dublin','38Apt 25 Wolfe Tone Street','Meiqi','Huang','0877151091'),(44,2,'普通用户2',10.00,'已支付',2,'2024-11-12 21:36:55','2024-11-12 21:36:58','Dublin',NULL,'Dublin','38Apt 25 Wolfe Tone Street','Meiqi','Huang','0877151091'),(45,2,'普通用户2',10.00,'已支付',2,'2024-11-12 05:46:28','2024-11-12 05:46:28','Dublin',NULL,'Dublin','38Apt 25 Wolfe Tone Street','Meiqi','Huang','0877151091');
/*!40000 ALTER TABLE `userorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `violation`
--

DROP TABLE IF EXISTS `violation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `violation` (
  `violation_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `username` varchar(50) NOT NULL,
  `content` text,
  `detected_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`violation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `violation`
--

LOCK TABLES `violation` WRITE;
/*!40000 ALTER TABLE `violation` DISABLE KEYS */;
/*!40000 ALTER TABLE `violation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-13  5:52:12
