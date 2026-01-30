CREATE DATABASE `shopleft_database`;
USE `shopleft_database`;

CREATE TABLE `shopleft_database`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `shopleft_database`.`products` (
  `product_code` VARCHAR(40) NOT NULL,
  `product_name` VARCHAR(45) NOT NULL,
  `product_price` DECIMAL(5,2) NOT NULL,
  `product_quantity` INT NOT NULL,
  PRIMARY KEY (`product_code`));

INSERT INTO `shopleft_database`.`users` 
(`email`, `first_name`, `last_name`, `password`) 
VALUES ('matthew@lifechoices.co.za', 'matthew', 'brown', 'matthewbrown');


INSERT INTO `shopleft_database`.`products` 
(`product_code`, `product_name`, `product_price`, `product_quantity`) 
VALUES ('baro1', 'Bar One', '9.99', '20');

INSERT INTO `shopleft_database`.`products` 
(`product_code`, `product_name`, `product_price`, `product_quantity`) 
VALUES ('hand1', 'Handy Andy', '19.00', '5');

INSERT INTO `shopleft_database`.`products` 
(`product_code`, `product_name`, `product_price`, `product_quantity`) 
VALUES ('pota1', 'Potatoes', '38.99', '10');


INSERT INTO `shopleft_database`.`users` 
(`email`, `first_name`, `last_name`, `password`) 
VALUES ('phoenix@lifechoices.co.za', 'phoenix', 'chung', 'phoenixchung');


INSERT INTO `shopleft_database`.`products` 
(`product_code`, `product_name`, `product_price`, `product_quantity`) 
VALUES ('fizz1', 'Fizzer (60g)', '59.99', '9');

INSERT INTO `shopleft_database`.`products` 
(`product_code`, `product_name`, `product_price`, `product_quantity`) 
VALUES ('pamp1', 'Pampers', '79.99', '6');

INSERT INTO `shopleft_database`.`products` 
(`product_code`, `product_name`, `product_price`, `product_quantity`) 
VALUES ('robe1', 'Robertsons', '29.99', '14');
