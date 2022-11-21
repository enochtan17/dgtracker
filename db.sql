CREATE DATABASE dgtracker;

CREATE TABLE courses(
  course_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  hole1 INT,
);

CREATE TABLE scores(
  scores_id SERIAL PRIMARY KEY,
  courses_id
);
