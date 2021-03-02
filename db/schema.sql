-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:

-- id: an auto incrementing int that serves as the primary key.

-- burger_name: a string.

-- devoured: a boolean.

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
DROP DATABASE IF EXISTS burgers_db;
 CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(50) NOT NULL,
	devoured BOOLEAN,
    PRIMARY KEY (id)
);