DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
  department_id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30),
  PRIMARY KEY (department_id)
);

CREATE TABLE roles (
  role_id INT NOT NULL AUTO_INCREMENT,
  department_id INT,
  job_title VARCHAR(30),
  salary INT,
  PRIMARY KEY (role_id),
  FOREIGN KEY (department_id)
  REFERENCES departments(department_id)
  ON DELETE SET NULL
);

CREATE TABLE employees (
  employee_id INT NOT NULL AUTO_INCREMENT,
  department_id INT,
  role_id INT,
  manager_id INT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (employee_id),
  FOREIGN KEY (department_id)
  REFERENCES departments(department_id)
  ON DELETE SET NULL,
  FOREIGN KEY (role_id)
  REFERENCES roles(role_id)
  ON DELETE SET NULL,
  FOREIGN KEY (manager_id)
  REFERENCES employees(employee_id)
  ON DELETE SET NULL
);