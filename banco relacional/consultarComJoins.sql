select * from prefeitos
select * from cidades

select c.nome as Cidade, p.nome as Prefeito from cidades c inner join prefeitos p on c.id = p.cidade_id;

select c.nome as Cidade, p.nome as Prefeito from cidades c left outer join prefeitos p on c.id = p.cidade_id;

select c.nome as Cidade, p.nome as Prefeito from cidades c right join prefeitos p on c.id = p.cidade_id;

-- select c.nome as Cidade, p.nome as Prefeito from cidades c full join 
-- prefeitos p on c.id = p.cidade_id; 
-- FULL JOIN NÃO EXISTE NO mySQL

select c.nome as Cidade, p.nome as Prefeito from cidades c left outer join prefeitos p on c.id = p.cidade_id
union
select c.nome as Cidade, p.nome as Prefeito from cidades c right join prefeitos p on c.id = p.cidade_id;