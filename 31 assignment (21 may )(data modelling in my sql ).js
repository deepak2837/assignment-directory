//31 assignment (21 may )(data modelling in my sql ).js


ERD feature	conceptual; 	logical	physical
Entity (name)	y	y	y
Relationship	n	y	y
Column	n	y	y
Column’s Type	n	y	y
Primary Key	n	n	yy
Foreign Key	n	n	





//answer of 2nd question 
//star sechema 
A star schema is a multi-dimension model used in data warehouses to supports advanced analytics. The strat schema contains a central fact table that is connected with several dimensional tables. Although simple to use, star schema takes a lot of space since dimensional tables do not link to sub-dimensional tables, limiting the extendability of data.

//snow flake echema 
 snowflake schema is also a multi-dimension model used in data warehouses to support advanced analytics. Although both schemas organize the tables around a central fact table, the dimensional tables in the snowflake schema can further connect to sub-dimensional tables. The advantage of a snowflake schema is that less duplicate data is stored than in an equivalent star schema
