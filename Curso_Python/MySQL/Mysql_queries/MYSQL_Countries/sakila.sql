-- 1.
-- ¿Qué consulta ejecutarías para obtener todos los clientes dentro de city_id = 312? Su consulta debe devolver el nombre,
-- apellido, correo electrónico y dirección del cliente.

select customer.first_name Nombre, customer.last_name Apellido, customer.email Correo, address.address Direccion from customer
inner join address on address.address_id= customer.address_id
where city_id = 312;

-- 2 
-- ¿Qué consulta harías para obtener todas las películas de comedia? Su consulta debe devolver el título de la película, la
-- descripción, el año de estreno, la calificación, las características especiales y el género (categoría).
 
select * from category where category_id = 5 ;
select * from film_category where category_id = 5;

select film.title titulo, film.description descripcion, film.release_year estreno, film.rating calificacion, film.special_features caract_especiales, category.name genero
from film_category
inner join film on film.film_id = film_category.film_id
inner join category on category.category_id = film_category.category_id
where category.category_id = 5;

-- 3
--  ¿Qué consulta harías para obtener todas las películas unidas por actor_id = 5? Su consulta debe devolver la identificación del
-- actor, el nombre del actor, el título de la película, la descripción y el año de lanzamiento.

select * from actor where actor_id = 5;
select * from film_actor where actor_id = 5;
select * from film where film_id in (19, 54, 85);

select actor.actor_id identi_actor, actor.first_name nombre, film.title titulo, film.description descripcion, film.release_year año_estreno
from film_actor 
inner join actor on film_actor.actor_id = actor.actor_id
inner join film on film_actor.film_id = film.film_id
where film_actor.actor_id = 5
;

select actor.actor_id identi_actor, actor.first_name nombre, film.title titulo, film.description descripcion, film.release_year año_estreno 
from  film_actor 
inner join actor on film_actor.actor_id = actor.actor_id
where film_id in (
select film_id from film_actor where actor_id = 5)
;

-- 4 
-- ¿Qué consulta ejecutaría para obtener todos los clientes en store_id = 1 y dentro de estas ciudades (1, 42, 312 y 459)? Su consulta
-- debe devolver el nombre, apellido, correo electrónico y dirección del cliente.

select * from customer where store_id =1;
select * from city where  city.city_id in (1, 42, 312 , 459);

select customer.first_name nombre, customer.last_name apellido, customer.email correo_electronico, address.address direccion 
from customer 
inner join address on customer.address_id = address.address_id
inner join city on city.city_id = address.city_id
where store_id =1 and city.city_id in (1, 42, 312 , 459);

