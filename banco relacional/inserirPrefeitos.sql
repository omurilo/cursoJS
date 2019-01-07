insert into prefeitos 
    (nome, cidade_id)
values 
('Rodrigo Neves', 2),
('Raquel Lyra', 3),
('Zenaldo Coutinho', null);

select pref.nome as Prefeito, cid.nome as Cidade from cidades cid, prefeitos pref where pref.cidade_id = cid.id

insert into prefeitos
    (nome, cidade_id)
values
    ('Rafael Greca', null);

insert into prefeitos
    (nome, cidade_id)
values
    ('Rodrigo Pinheiro', 3);