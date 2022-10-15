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

