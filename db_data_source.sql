-- criar banco de dados
CREATE DATABASE photoboxzero;

-- Primeiro, criamos nossa tabela de posts
CREATE TABLE posts (
    id  INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(80) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    descricao TEXT
);

-- Para adicionar um novo campo a tabela 
ALTER TABLE posts ADD id  INT UNSIGNED AUTO_INCREMENT PRIMARY KEY

-- o comando apaga a tabela e todos os dados contidos nela
DROP TABLE posts