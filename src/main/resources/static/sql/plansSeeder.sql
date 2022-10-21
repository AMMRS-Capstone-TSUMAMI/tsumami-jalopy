USE `tsumami`;

INSERT IGNORE INTO `users` (`id`, `activity_level`, `birthdate`, `calorie_goal`, `carb_goal`, `diet`, `email`, `experience_points`, `fat_goal`, `gender`, `height`, `photo`, `protein_goal`, `username`, `weight`)
VALUES
    (1,	NULL,	'1986-09-28',	NULL,	NULL,	NULL,	'matthew.alan.grayson@gmail.com',	NULL,	NULL,	'male',	NULL,	NULL,	NULL,	NULL,	NULL),
    (2,	NULL,	'1987-08-20',	NULL,	NULL,	NULL,	'ashley.martinez32@gmail.com',	NULL,	NULL,	'female',	NULL,	NULL,	NULL,	NULL,	NULL),
    (3,	NULL,	'1990-07-29',	NULL,	NULL,	NULL,	'ryan.s.yoshimura@gmail.com',	NULL,	NULL,	'male',	NULL,	NULL,	NULL,	NULL,	NULL);

INSERT IGNORE INTO `recipes` (`id`, `description`, `name`, `photo`)
VALUES
    (634476,	NULL,	'Bbq Chicken',	'https://spoonacular.com/recipeImages/634476-312x231.jpg'),
    (634486,	NULL,	'BBQ Beef Brisket',	'https://spoonacular.com/recipeImages/634486-312x231.jpg'),
    (641208,	NULL,	'Dak Bulgogi - Korean BBQ Chicken',	'https://spoonacular.com/recipeImages/641208-312x231.jpg');

INSERT IGNORE INTO `plan_weeks` (`id`, `start_date`, `user_id`)
VALUES
    (1,	'2022-10-10',	1),
    (2,	'2022-10-17',	1);

INSERT IGNORE INTO `plan_days` (`id`, `day_num`, `plan_week_id`)
VALUES
    (1,	2,	1),
    (2,	3,	1),
    (3,	4,	1);

INSERT IGNORE INTO `plan_timeslots` (`id`, `timeslot`, `plan_day_id`)
VALUES
    (1,	1,	1),
    (2,	2,	1),
    (3,	2,	2),
    (4,	3,	2),
    (5,	1,	3);

INSERT IGNORE INTO `plan_timeslot_recipe` (`recipe_id`, `plan_timeslot_id`)
VALUES
    (634476,  1),
    (634486,  2),
    (641208,  3),
    (634486,  4),
    (634476,  5);

INSERT INTO `intolerances` (`id`, `name`)
VALUES
    (1,	'dairy'),
    (2,	'egg'),
    (3,	'gluten'),
    (4,	'grains'),
    (5,	'peanut'),
    (6,	'seafood'),
    (7,	'sesame'),
    (8,	'shellfish'),
    (9,	'soy'),
    (10,	'tree nut'),
    (11,	'wheat'),
    (12,	'corn');

INSERT INTO `chef_levels` (`id`, `description`, `photo`, `required_xp`, `title`)
VALUES
    (1, 'Beginner, but not for long...',    '/img/stationChef.png', 10, 'Station Chef'),
    (2, 'Choppin\' calories and taking names!', '/img/sousChef.png',    20, 'Sous Chef'),
    (3, 'Head Honcho, Keep cookin!',    '/img/exChef.png',  30, 'Executive Chef');

INSERT INTO `trophies` (`id`, `description`, `photo`, `title`)
VALUES
    (1,	'Completed registration!',	NULL,	'New chef!'),
    (2,	'Searched first recipe!',	NULL,	'Surfing for searches!'),
    (3,	'Learned about the development team!',	NULL,	'Team Player!'),
    (4,	'Cooking your first recipe!',	NULL,	'What\'s cookin\' good lookin\'?')



