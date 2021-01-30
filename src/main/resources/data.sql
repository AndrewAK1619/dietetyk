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

INSERT INTO patients(patient_id, first_name, last_name, email, sex, age, body_weight, height, degree_of_physical_activity, chronic_diseases_ailments_and_medicines_used, allergies_and_food_intolerances, supplements_used) VALUES
  (1, 'Emily', 'Evans', 'emilyEvans@example.com', 'Female', 26, 56.5, 172, '3 - aktywność fizyczna umiarkowana', 'Brak', 'Brak', 'Brak');