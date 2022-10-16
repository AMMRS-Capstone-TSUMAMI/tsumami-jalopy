USE tsumami;

INSERT IGNORE INTO plan_weeks (start_date, user_id)
VALUES
    ('2022-10-03', 1);
SET @plan_week_id = LAST_INSERT_ID();
INSERT IGNORE INTO plan_days (day_num, plan_week_id)
VALUES
    (7, @plan_week_id);
SET @plan_day_id = LAST_INSERT_ID();
INSERT IGNORE INTO plan_timeslots (timeslot, plan_day_id)
VALUES
    (1, @plan_day_id);
SET @plan_timeslot_id = LAST_INSERT_ID();
INSERT IGNORE INTO recipes (id, name, photo)
VALUES
    ('655537', 'Pecan Waffles', 'https://spoonacular.com/recipeImages/655537-312x231.jpg');
INSERT INTO plan_timeslot_recipe (plan_timeslot_id, recipe_id)
VALUES
    (@plan_timeslot_id, '655537');
