create database registration;
use registration;

create table users(
	id int not null primary key auto_increment,
	first_name varchar(255) not null,
    email varchar(255) not null,
    phone_number varchar(255) not null, 
    user_password varchar(255) ,
    salt varchar(255),
    token varchar (255),
    isvalid bool default (0),
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE current_timestamp
);

update users set token ='xhlbwbni9m', reg_date = current_timestamp where email = 'chetuparmar@gmail.com';

update users set user_password = '6063195732ae89b1912444d0e7a39e55' where id = '1';
select salt from users where email = 'chetuparmar@gmail.com';

truncate table users;

select * from users;







-- CREATE TABLE logins (
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     email VARCHAR(255) NOT NULL,
--     user_password VARCHAR(255) NOT NULL,
--     user_session_id VARCHAR(255) NOT NULL
-- );

-- insert into logins(email,user_password,user_session_id)
-- values('chetuparmar11@gamil.com','5d1847678293b02313eb5cb89ac8e868','');

-- select * from logins;
