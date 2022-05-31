# mutants
detector de humanos o mutantes basándose en su secuencia de ADN.

## Required Setup
* Node 16+

## Use

1) npm install
2) node index.js

## Examen Mercadolibre
Magneto quiere reclutar la mayor cantidad de mutantes para poder luchar
contra los X-Men.

## Uso

La api /mutant/ detecta si un ADN de un humano es mutante o no mediante un HTTP POST con un Json el cual tenga el siguiente formato:

POST → http://ec2-23-22-203-145.compute-1.amazonaws.com/mutant

POST → localhost:3000/mutant/

{ "dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"] }

En caso de verificar un mutante, devuelve un HTTP 200-OK, en caso contrario un 403-Forbidden.

La api /stats devuelve un Json con las estadisticas de las verificaciones de ADN:

{"count_mutant_dna":40, "count_human_dna":100, "ratio":0.4}

GET → http://ec2-23-22-203-145.compute-1.amazonaws.com/stats

GET → localhost:3000/stats