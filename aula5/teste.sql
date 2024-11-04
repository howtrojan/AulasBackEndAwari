-- cria uma tabela
create table users(
    id int primary key auto_increment,
    name varchar(40) not null,
    surname varchar(80) not null,
    document_number varchar(20),
    email varchar(100) not null,
    password varchar(255) not null,
    address_street varchar(100),
    address_number varchar(60),
    address_complement varchar(60),
    address_locality varchar(40),
    address_city varchar(40),
    address_region_code varchar(8),
    address_country varchar(4),
    address_zip_code varchar(10)
)

-- insere um registro na tabela users
insert into users (name, surname, document_number, email, password, address_street, address_number, address_complement, address_locality, address_city, address_region_code, address_country, address_zip_code) values('André', 'Silva', '123.456.789-00', 'UkX2O@example.com', '123456', 'Rua 1', '123', 'Casa 1', 'Bairro 1', 'Cidade 1', 'SP', 'BR', '1234567')

-- atualiza o nome do registro 1 para 'Andr '
update users set name = 'André' where id = 1

-- deleta o registro 1 da tabela users
delete from users where id = 1;

-- seleciona os registros da tabela users onde é igual o email
select user where email = 'UkX2O@example.com'

-- seleciona todos os registros
select * from users

-- seleciona todos os registros onde o email termina em @gmail.com e ordena pelo nome
select * from users where email like = '%@gmail.com' order by name  
