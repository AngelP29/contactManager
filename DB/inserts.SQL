USE COP4331;

INSERT INTO USERS (FirstName, LastName, Login, Password)
VALUES 
('Rick', 'Leinecker', 'RickL', 'COP4331'),
('Sam', 'Hill', 'SamH', 'Test'),
('Test', 'User', 'testuser', 'password123');

INSERT INTO CONTACTS (FirstName, LastName, Phone, Email, UserID)
VALUES
('John', 'Smith', '4075551111', 'johnsmith@example.com', 1),
('Jane', 'Doe', '4075552222', 'janedoe@example.com', 1),
('Jordan', 'Lee', '4075553333', 'jordanlee@example.com', 1),
('Maria', 'Garcia', '4075554444', 'mariagarcia@example.com', 2),
('Chris', 'Brown', '4075555555', 'chrisbrown@example.com', 2),
('Taylor', 'Johnson', '4075556666', 'taylorjohnson@example.com', 3);
