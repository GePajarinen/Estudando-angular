CREATE TABLE cliente (
  id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(60) NOT NULL,
  senha VARCHAR (20) NOT NULL,
  documento VARCHAR(20) NOT NULL,
  cadastro DATE
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO cliente (nome, email, senha, documento, cadastro) values ('Benjamin Sisko', 'Benjamin.Sisko@hotmail.com', 'Sisko3214','35164', '2017-06-10');
INSERT INTO cliente (nome, email, senha, documento, cadastro) values ('Odo', 'Odo@gmail.com', 'Odo3695', '38400', '2020-06-14');
INSERT INTO cliente (nome, email, senha, documento, cadastro) values ('Jadzia Dax', 'Jadzia.Dax@hotmail.com', 'Jadzia3889', '85164', '2020-07-14');
INSERT INTO cliente (nome, email, senha, documento, cadastro) values ('Worf', 'Worf@hotmail.com', 'Worf8794', '95169', '2020-08-20');
INSERT INTO cliente (nome, email, senha, documento, cadastro) values ('Quark', 'Quark@hotmail.com', 'Quark9969', '85584', '2020-06-21');
INSERT INTO cliente (nome, email, senha, documento, cadastro) values ('Julian Bashir', 'Julian.Bashir@hotmail.com', 'Bashir7814', '56964', '2020-10-22');
INSERT INTO cliente (nome, email, senha, documento, cadastro) values ('Kira Nerys', 'Kira.Nerys@hotmail.com', 'Nerys8547', '58668', '2020-11-11');
INSERT INTO cliente (nome, email, senha, documento, cadastro) values ('Nog', 'Nog.Nog@hotmail.com', 'Nog7415', '58699', '2018-12-18');
INSERT INTO cliente (nome, email, senha, documento, cadastro) values ('Miles OBrien', 'Miles.OBrien@hotmail.com', 'OBrien7778', '58233', '2019-11-25');
INSERT INTO cliente (nome, email, senha, documento, cadastro) values ('Elim Garak', 'Elim.Garak@hotmail.com', 'Elim9956', '55896', '2019-01-30');
