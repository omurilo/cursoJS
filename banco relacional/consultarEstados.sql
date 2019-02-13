SELECT * FROM estados

select 
    Sigla, 
    nome as 'Nome do Estado' 
from estados
where regiao = 'Sul'

select 
    nome as 'Nome do Estado',
    regiao as 'Região',
    populacao as 'População'
from estados
where populacao >= 10 order 
by populacao desc