-- criar banco de dados
CREATE DATABASE photoboxzero;

-- Primeiro, criamos nossa tabela de posts
CREATE TABLE posts (
    id  INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(80) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    descricao TEXT,
    imagem VARCHAR(64)
);

-- Para adicionar um novo campo a tabela
ALTER TABLE posts ADD id  INT UNSIGNED AUTO_INCREMENT PRIMARY KEY

-- o comando apaga a tabela e todos os dados contidos nela
DROP TABLE posts


-- novas tabelas do banco

-- tabelas do novo banco para o photobox

CREATE TABLE users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(255),
    role VARCHAR(20),
    created DATETIME DEFAULT NULL,
    modified DATETIME DEFAULT NULL
);
CREATE TABLE category (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created DATETIME,
    modified DATETIME
);

CREATE TABLE posts (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT(11) NOT NULL,
    category_id INT (11),
    title VARCHAR(255) NOT NULL,
    body TEXT,
    keywords TEXT,
    urlImage varchar(2048),
    created DATETIME,
    modified DATETIME
);
