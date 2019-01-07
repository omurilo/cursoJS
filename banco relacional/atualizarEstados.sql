UPDATE estados 
    SET nome = 'Maranhão'
    WHERE sigla = 'MA'

select nome from estados WHERE sigla = 'MA'

update estados
set 
    nome = 'Paraná',
    populacao = 11.32
where 
    sigla = 'PR'

select 
    est.nome, 
    est.sigla, 
    est.populacao 
from estados est 
WHERE sigla = 'PR'
