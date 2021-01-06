mysql -u root -p

-- mostrar las bases de datos en mi pc
show databases;

-- seleccionar una base de datos
use (nombre base de datos) ;

-- una vez dentro de una base de datos mostramos las tablas de esa base de datos
show tables;

--crear una nueva base de datos
create database primerabase;

-- crear una tabla dentro de una base de datos
create table tabla1 (
    id int,
    nombre varchar(255),
    edad int
);

-- saber tipo y columnas de una tabla
describe tabla1;

-- insercion en la tabla
insert into tabla1 (id,nombre,edad) values (1,"Raul",25);
insert into tabla1 (id,nombre,edad) values (2,"juan",20);
-- para agregar mas de un refistro se puede ingresar despues de una coma al cerrar el parentesis
insert into tabla1 (id,nombre,edad) values (3,"jose",15), (4,"ana",21);

-- consultar registro de una tabla
select * from tabla1;

--eliminar un registro de la tabla
delete from tabla1 where id = 1;

-- actualizar un registro de la tabala
update tabla1
set nombre = "arturo"
where id = 4;

-- modificar registro, alternar columnas y eliminar columanas
alter table tabla1 change edad edades int;
-- averiguar comando alter
alter table tabla1 rename as usuarios;

--borrar base de datos
drop database zzz;

-- desde de la terminal para importar una base de datos desde la terminal
mysql -u root -p< (nombrearchivo).sql --desde la ubicacion del archivo

-- like sirve para encontrar fracciones de palabras, se ultilizan los % para ejemplificar que hay algo antes o depues de las palabras