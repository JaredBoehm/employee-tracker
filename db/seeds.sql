INSERT INTO departments (department_name)
VALUES ("Department One"),
       ("Department Two");

INSERT INTO roles (department_id, job_title, salary)
VALUES (001, "Department One Manager", 500000),
       (001, "Department One Grunt", 50000),
       (002, "Department Two Manager", 600000),
       (002, "Department Two Grunt", 60000);

INSERT INTO employees (department_id, role_id, manager_id, first_name, last_name)
VALUES (001, 001, NULL, "Sam", "Smith"),
       (001, 002, 001, "Jack", "More"),
       (001, 002, 001, "John", "Doe"),
       (002, 003, NULL, "Morgan", "Black"),
       (002, 004, 004, "Abby", "Real"),
       (002, 004, 004, "Mark", "Twain");