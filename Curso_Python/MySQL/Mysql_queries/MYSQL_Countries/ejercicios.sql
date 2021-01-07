select * from languages where language like '%sloven%';
select * from languages where language = 'Slovene';

select * from countries 
where id in (16, 96, 107, 200);

select * from languages 
inner join countries 
on languages.country_id = countries.id
 where language = 'Slovene';
 
 select countries.name, languages.language, languages.percentage from languages 
inner join countries 
on languages.country_id = countries.id
 where language = 'Slovene'
 order by languages.percentage desc ;
 
 -- 2
 select * from cities;
 
  select count(cities.id),  countries.name from cities 
  inner join countries on
  cities.country_id = countries.id
  group by countries.id
  order by count(cities.id) desc
 ;
 -- o alias funcionan solo dentro de las queries
 
  select couns.name as nombre_pais, count(ct.id) as total_ciudades
  from cities as  ct
  inner join countries as couns on
  ct.country_id = couns.id
  group by couns.id
  order by total_ciudades desc
 ;
 
 -- 3
select id, name from countries
where name like '%exi%'; 
 
select cities.name, cities.population
from cities 
inner join countries on cities.country_id = countries.id
where countries.id = 136
and cities.population > 500000
order by cities.population desc
;

-- 4
-- ¿Qué consulta ejecutarías para obtener todos los idiomas en cada país con un porcentaje superior al 89%? 
-- Tu consulta debe organizar el resultado por porcentaje en orden descendente.

select countries.name nombre_pais , languages.language lenguaje , languages.percentage porcentaje from
countries inner join languages on countries.id = languages.country_id
where languages.percentage > 89
order by languages.percentage desc
;

select count(country_id), language, percentage from languages
group by country_id
order by languages.percentage desc ;

-- 5
-- ¿Qué consulta haría para obtener todos los países con un área de superficie inferior a 501 y una población superior a 100,000? (2)
describe countries;

select countries.name nombre_pais , countries.surface_area area , countries.population poblacion 
from countries
where countries.surface_area < 501 and
population > 100000;

-- 6
-- ¿Qué consulta harías para obtener países con solo Monarquía Constitucional con un capital superior a 200 y una esperanza de vida superior a 75 años?

select name, life_expectancy, government_form, capital from countries
where government_form like 'Constitutional Monarchy' and life_expectancy > 75 and capital > 200
order by name;

-- 7 
-- ¿Qué consulta harías para obtener todas las ciudades de Argentina dentro del distrito de Buenos Aires y tener una población superior a 500,000? La consulta debe devolver el nombre del país, el nombre de la ciudad, el distrito y la población. (2)
select id, name from countries
where name like '%arg%'; -- 9

select countries.name Pais,  cities.name Ciudad , cities.district distrito, cities.population Poblacion  from
countries inner join cities on cities.country_id = countries.id
where cities.country_id = 9 
and cities.district like 'Buenos Aires' and
cities.population > 500000
;

-- 8. 
-- ¿Qué consulta harías para resumir el número de países en cada región? La consulta debe mostrar el nombre de la región y el número de países. Además, la consulta debe organizar el resultado por el número de países en orden descendente. (2)

select countries.region Regiones, count(countries.region) Cantidad_Paises from countries
group by countries.region
order by count(countries.region) desc;


