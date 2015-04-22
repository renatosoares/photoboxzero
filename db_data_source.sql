-- criar banco de dados
create database photoboxzero;

-- Primeiro, criamos nossa tabela de posts
CREATE TABLE posts (
    id 	INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    descricao TEXT
);
