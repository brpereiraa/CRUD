create table if not exists users
(
    id serial primary key,
    age bigint not null,
    name text not null,
    password text not null
);