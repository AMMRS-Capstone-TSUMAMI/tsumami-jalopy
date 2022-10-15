USE tsumami;

SELECT *
FROM plan_timeslots
         INNER JOIN plan_days ON plan_timeslots.plan_day_id = plan_days.id
         INNER JOIN plan_weeks ON plan_days.plan_week_id = plan_weeks.id
WHERE plan_weeks.start_date = '2022-10-10'
  AND plan_days.day_num = 2
  AND plan_timeslots.timeslot = 1
  AND plan_weeks.user_id = 1;