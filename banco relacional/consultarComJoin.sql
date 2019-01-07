select * from estados as est, cidades as cid 
where cid.estado_id = est.id

select 
    est.nome as Estado,
    cid.nome as Cidade, 
    regiao as Região 
from 
    estados as est,
    cidades as cid 
where cid.estado_id = est.id;

select 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
from estados e
inner join cidades c 
    on e.id = c.estado_id 