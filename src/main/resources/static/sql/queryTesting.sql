USE tsumami;

SELECT plan_timeslots.* FROM plan_timeslots  
        JOIN plan_days ON plan_timeslots.plan_day_id = plan_days.id  
        INNER JOIN plan_weeks ON plan_days.plan_week_id = plan_weeks.id  
        WHERE plan_weeks.start_date = :start_date  
        AND plan_days.day_num = :day_num  
        AND plan_timeslots.timeslot = :timeslot  
        AND plan_weeks.user_id = :user_id

# SELECT * FROM plan_timeslot
#       INNER JOIN plan_day
#          ON plan_timeslot.plan_day_id = plan_day.id
#       INNER JOIN plan_week
#          ON plan_day.plan_week_id = plan_week.id
# WHERE plan_week.start_date = :start_date
#   AND plan_day.day_num = :day_num
#   AND plan_week.user_id = :user_id


