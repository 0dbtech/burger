
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(45) NULL,
  devoured INT DEFAULT 0,
  PRIMARY KEY (id)
);


UPDATE TABLE burgers (

  devoured BOOLEAN NOT NULL DEFAULT 0,
);