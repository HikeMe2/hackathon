DROP DATABASE IF EXISTS `hackathon`;
CREATE DATABASE `hackathon`;
USE `hackathon`;

CREATE TABLE `user` (
  `email` varchar(50) PRIMARY KEY,
  `first_name` varchar(50),
  `last_name` varchar(50),
  `password` varchar(50)
);


CREATE TABLE `trail`(
  `trail_id` varchar(50) PRIMARY KEY,
  `name` varchar,
  `length_3d` float,
  `max_elevation` float,
  `min_elevation` float,
  `uphill` float,
  `downhill` float,
  `difficulty` varchar,
  `country` varchar(50),
  `continent` varchar(50),

)


CREATE TABLE `user_images` (
  `img_id` integer PRIMARY KEY,
  `user_id` varchar(50),
  `img_url` varchar(200)
);


ALTER TABLE `user_images` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`email`);
