CREATE DATABASE STARWARS;

USE STARWARS;

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT;
    nome VARCHAR(45),
    idade INT,
    planeta_origem VARCHAR(100),
    especie VARCHAR(100),
    nave VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50),
    confirmar_senha VARCHAR(50)
);

CREATE TABLE ranking (
    classificacao VARCHAR(25);
    fkusuario INT,
    CONSTRAINT constusuario FOREIGN KEY (fkusuario) REFERENCES usuario(id)
);

