USE tsumami;

SELECT pw.start_date AS week,
       pd.day_num AS day,
       pt.timeslot AS timeslot,
       ptr.recipe_id AS recipe
FROM plan_timeslot_recipe ptr
LEFT JOIN plan_timeslots pt on pt.id = ptr.plan_timeslot_id
LEFT JOIN plan_days pd on pt.plan_day_id = pd.id
LEFT JOIN plan_weeks pw on pd.plan_week_id = pw.id
WHERE pw.start_date = '2022-10-10'
  AND pw.user_id = 1;

INSERT IGNORE INTO recipes (id, name, photo)
VALUES
    (634477, 'Bbq Chicken', 'https://spoonacular.com/recipeImages/634476-312x231.jpg')

INSERT IGNORE INTO recipes (id, name, photo)
VALUES
    (:id, :name, :photo)

INSERT IGNORE INTO plan_weeks (start_date, user_id)
VALUES
    (:start_date, :user_id)


