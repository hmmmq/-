drop database IF EXISTS `culturalcreativemalldb`;
create database IF NOT EXISTS `culturalcreativemalldb`;
use `culturalcreativemalldb`;
-- 用户表
CREATE TABLE `user` (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    user_type int not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 商品表
CREATE TABLE product (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL, -- 原价
    discount_price DECIMAL(10, 2), -- 折扣价
    price_difference DECIMAL(10, 2) GENERATED ALWAYS AS (price - discount_price) VIRTUAL, -- 差价
    stock INT NOT NULL,
    category VARCHAR(50) NOT NULL, -- 商品类别
    image_path VARCHAR(255) NOT NULL, -- 图片路径
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 购物车表
CREATE TABLE cart (
    cart_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    username VARCHAR(50) NOT NULL, -- 冗余字段：用户名
    product_id INT,
    product_name VARCHAR(100) NOT NULL, -- 冗余字段：商品名称
    product_price DECIMAL(10, 2) NOT NULL, -- 冗余字段：商品价格
    product_discount_price DECIMAL(10, 2), -- 冗余字段：商品折扣价
    product_price_difference DECIMAL(10, 2), -- 冗余字段：商品差价
    product_category VARCHAR(50) NOT NULL, -- 冗余字段：商品类别
    product_image_path VARCHAR(255) NOT NULL, -- 冗余字段：商品图片路径
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 收藏表
CREATE TABLE favorite (
    favorite_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    username VARCHAR(50) NOT NULL, -- 冗余字段：用户名
    product_id INT,
    product_name VARCHAR(100) NOT NULL, -- 冗余字段：商品名称
    product_price DECIMAL(10, 2) NOT NULL, -- 冗余字段：商品价格
    product_discount_price DECIMAL(10, 2), -- 冗余字段：商品折扣价
    product_price_difference DECIMAL(10, 2), -- 冗余字段：商品差价
    product_category VARCHAR(50) NOT NULL, -- 冗余字段：商品类别
    product_image_path VARCHAR(255) NOT NULL, -- 冗余字段：商品图片路径
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 订单表
CREATE TABLE `order` (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    username VARCHAR(50) NOT NULL, -- 冗余字段：用户名
    total_price DECIMAL(10, 2) NOT NULL,
    status_name VARCHAR(50) NOT NULL,
    status_code INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 订单商品表
CREATE TABLE order_item (
    order_item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product_id INT,
    product_name VARCHAR(100) NOT NULL, -- 冗余字段：商品名称
    product_price DECIMAL(10, 2) NOT NULL, -- 冗余字段：商品价格
    product_discount_price DECIMAL(10, 2), -- 冗余字段：商品折扣价
    product_price_difference DECIMAL(10, 2), -- 冗余字段：商品差价
    product_category VARCHAR(50) NOT NULL, -- 冗余字段：商品类别
    product_image_path VARCHAR(255) NOT NULL, -- 冗余字段：商品图片路径
    quantity INT NOT NULL,
    amount  DECIMAL(10, 2) NOT NULL
);

-- 评论表
CREATE TABLE review (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    order_item_id INT,
    order_id INT,
    user_id INT,
    username VARCHAR(50) NOT NULL, -- 冗余字段：用户名
    product_id INT,
    product_name VARCHAR(100) NOT NULL, -- 冗余字段：商品名称
    product_price DECIMAL(10, 2) NOT NULL, -- 冗余字段：商品价格
    product_discount_price DECIMAL(10, 2), -- 冗余字段：商品折扣价
    product_price_difference DECIMAL(10, 2), -- 冗余字段：商品差价
    product_category VARCHAR(50) NOT NULL, -- 冗余字段：商品类别
    product_image_path VARCHAR(255) NOT NULL, -- 冗余字段：商品图片路径
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment_detail TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 违规检测表
CREATE TABLE violation (
    violation_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    username VARCHAR(50) NOT NULL, -- 冗余字段：用户名
    content TEXT,
    detected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);