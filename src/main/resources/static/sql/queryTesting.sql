USE tsumami;

SELECT * FROM plan_timeslot
    LEFT JOIN plan_day
        ON plan_timeslot.plan_day_id = plan_day.id
    LEFT JOIN plan_week
        ON plan_day.plan_week_id = plan_week.id
    WHERE plan_week.start_date = '2022-10-10'
      AND plan_day.day_num = 3
      AND plan_week.user_id = 1

# SELECT * FROM plan_timeslot
#       INNER JOIN plan_day
#          ON plan_timeslot.plan_day_id = plan_day.id
#       INNER JOIN plan_week
#          ON plan_day.plan_week_id = plan_week.id
# WHERE plan_week.start_date = :start_date
#   AND plan_day.day_num = :day_num
#   AND plan_week.user_id = :user_id


