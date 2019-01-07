alter table empresas modify cnpj varchar(14);

insert into empresas (nome, cnpj)
values
    ('Bradesco', 13245678000186),
    ('Vale', 65832807000136),
    ('Cielo', 47886929000123);

desc empresas;
desc prefeitos;

select * from empresas

select * from cidades

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1),
    (3, 3, 1);