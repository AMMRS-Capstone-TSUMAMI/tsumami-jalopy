USE tsumami;

SELECT pd.day_num AS day,
       SUM(r.calories) AS calories,
       SUM(r.fat) AS fat,
       SUM(r.carbs) AS carbs,
       SUM(r.protein) AS protein
FROM plan_timeslot_recipe ptr
         LEFT JOIN recipes r ON r.id = ptr.recipe_id
         LEFT JOIN plan_timeslots pt ON pt.id = ptr.plan_timeslot_id
         LEFT JOIN plan_days pd ON pt.plan_day_id = pd.id
         LEFT JOIN plan_weeks pw ON pd.plan_week_id = pw.id
WHERE pw.start_date = '2022-10-24'
  AND pw.user_id = 10
GROUP BY day;

INSERT IGNORE INTO recipes (id, name, photo)
VALUES
    (634477, 'Bbq Chicken', 'https://spoonacular.com/recipeImages/634476-312x231.jpg');

INSERT IGNORE INTO recipes (id, name, photo)
VALUES
    (:id, :name, :photo);
SET @recipe_id = LAST_INSERT_ID();
INSERT IGNORE INTO plan_weeks (start_date, user_id)
VALUES
    (:start_date, :user_id);
SET @plan_week_id = LAST_INSERT_ID();
INSERT IGNORE INTO plan_days (day_num, plan_week_id)
VALUES
    (:day_num, @plan_week_id);
SET @plan_day_id = LAST_INSERT_ID();
INSERT IGNORE INTO plan_timeslots (timeslot, plan_day_id)
VALUES
    (:timeslot, @plan_day_id);
SET @plan_timeslot_id = LAST_INSERT_ID();
INSERT INTO plan_timeslot_recipe (plan_timeslot_id, recipe_id)
VALUES
    (@plan_timeslot_id, @recipe_id);

SELECT * FROM plan_weeks
WHERE start_date = '2022-10-03'
  AND user_id = 1;

DELETE FROM plan_timeslot_recipe
WHERE recipe_id = :recipe_id AND plan_timeslot_id = :plan_timeslot_id
LIMIT 1;






