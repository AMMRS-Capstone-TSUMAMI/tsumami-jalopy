USE `tsumami`;

INSERT INTO `users` (`id`, `activity_level`, `birthdate`, `calorie_goal`, `carb_goal`, `diet`, `email`, `experience_points`, `fat_goal`, `gender`, `height`, `photo`, `protein_goal`, `username`, `weight`)
VALUES
    (1,	NULL,	'1986-09-28',	NULL,	NULL,	NULL,	'matthew.alan.grayson@gmail.com',	NULL,	NULL,	'male',	NULL,	NULL,	NULL,	NULL,	NULL);

INSERT INTO `plan_weeks` (`id`, `start_date`, `user_id`)
VALUES
    (1,	'2022-10-10',	1),
    (2,	'2022-10-17',	1);

INSERT INTO `plan_days` (`id`, `day_num`, `plan_week_id`)
    VALUES
        (1,	2,	1),
        (2,	3,	1),
        (3,	4,	1);

INSERT INTO `plan_timeslots` (`id`, `timeslot`, `plan_day_id`)
    VALUES
        (1,	1,	1),
        (2,	2,	1),
        (3,	2,	2),
        (4,	3,	2),
        (5,	1,	3);



