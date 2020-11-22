INSERT INTO user_roles(id, role, description) VALUES 
  (1, 'ROLE_USER', 'default role for user'),
  (2, 'ROLE_ADMIN', 'role for admin');

INSERT INTO users(user_id, email, first_name, last_name, password) VALUES
  (1, 'admin@example.com', 'John', 'Smith', 
	'{bcrypt}$2a$10$/qm/jZiwBGAEaS8LCW695egoqzUNoLoXWpX4kUH3Ch09KvyLE1yeW'),
  (2, 'user@example.com', 'Michael', 'Jones', 
	'{bcrypt}$2a$10$Jvi.vrRv34OB.QpUmRK6h.pAub2/Os9o9/9pTdqAV5iS85bSavg8.');
	
INSERT INTO users_roles(user_user_id, roles_id) VALUES
  (1, 2),
  (2, 1);

