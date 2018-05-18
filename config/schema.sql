CREATE DATABASE smashing_db;

 use smashing_db;
 
CREATE TABLE smash(
	id INTEGER NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(30) NOT NULL,
    is_smashed BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY(id)
);


 
INSERT INTO	smash (item_name) VALUES("cake");
INSERT INTO	smash (item_name) VALUES("Chocholate cake");
INSERT INTO	smash (item_name) VALUES("Strawbery cake");