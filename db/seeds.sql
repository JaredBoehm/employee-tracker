INSERT INTO departments (id, name)
VALUES (001, "Department One"),
       (002, "Department Two");

INSERT INTO roles (id, department_id, job_title, salary)
VALUES (001, 001, "Department One Manager", 500000),
       (002, 001, "Department One Grunt", 50000),
       (003, 002, "Department One Manager", 600000),
       (004, 002, "Department Two Grunt", 60000);

INSERT INTO employees (id, department_id, role_id, manager_id, first_name, last_name)
VALUES (001, 001, 001, NULL, "Sam", "Smith"),
       (002, 001, 002, 001, "Jack", "More"),
       (003, 001, 002, 001, "John", "Doe"),
       (004, 002, 003, NULL, "Morgan", "Black"),
       (005, 002, 004, 004, "Abby", "Real"),
       (006, 002, 004, 004, "Mark", "Twain");