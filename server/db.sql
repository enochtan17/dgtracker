CREATE DATABASE dgtracker;

CREATE TABLE courses(
  id SERIAL PRIMARY KEY,
  name text,
  scores integer[18],
  total integer
);

CREATE TABLE scores(
  id SERIAL PRIMARY KEY,
  courses_id integer REFERENCES courses (id),
  player text,
  scores integer[18],
  total integer
);

TRUNCATE TABLE courses RESTART IDENTITY CASCADE;
