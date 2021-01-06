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
