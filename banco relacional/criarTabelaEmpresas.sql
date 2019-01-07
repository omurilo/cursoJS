create table if not exists empresas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome varchar(255) not null,
    cnpj int unsigned,
    primary key (id),
    unique key (cnpj)
);

-- cidades_empresas

create table if not exists empresas_unidades (
    empresa_id int unsigned not null,
    cidade_id int unsigned not null,
    sede TINYINT(1) not null,
    primary key (empresa_id, cidade_id)
);