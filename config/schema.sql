CREATE DATABASE smashing_db;

 use smashing_db;
 
CREATE TABLE smash(
	id INTEGER NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(30) NOT NULL,
    is_smashed BOOLEAN NOT NULL DEFAULT false,
    photo VARCHAR(300) DEFAULT "http://sophieswift.com/wp-content/uploads/2017/09/fanciful-ideas-cat-birthday-cake-and-stylish-cakes-for-cats-with-icing-inspiring-delicious-600x404.jpg",
    PRIMARY KEY(id)
);

INSERT INTO	smash (item_name, photo) VALUES("cake",  "https://www.cakengifts.in/product-images/bfcr001-black-forest-cake-in-round/regular/black-forest-cake-in-round.jpg");
INSERT INTO	smash (item_name, photo) VALUES("Chocholate cake", "https://assets.bonappetit.com/photos/59c924dc32e4b84f5a9e437a/16:9/w_2560,c_limit/1017%20WEB%20WEEK1060.jpg");
INSERT INTO	smash (item_name, photo) VALUES("Strawbery cake", "https://31p86334w2bvkz0249eyr0cr-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/homemade-strawberry-cake-4.jpg");