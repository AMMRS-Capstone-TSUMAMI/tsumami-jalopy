package tsumami.tsumamijalopy.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;

public interface PlanTimeslotsRepository extends JpaRepository<PlanTimeslot, Long> {

    @Query(value = "SELECT plan_timeslots.* FROM plan_timeslots " +
            "LEFT JOIN plan_days ON plan_timeslots.plan_day_id = plan_days.id " +
            "LEFT JOIN plan_weeks ON plan_days.plan_week_id = plan_weeks.id " +
            "WHERE plan_weeks.start_date = :start_date " +
            "AND plan_days.day_num = :day_num " +
            "AND plan_timeslots.timeslot = :timeslot " +
            "AND plan_weeks.user_id = :user_id", nativeQuery = true)
    PlanTimeslot getPlanTimeslotByDayWeekStart(@Param("start_date") String startDate, @Param("day_num") Long dayNum, @Param("timeslot") Long timeslot, @Param("user_id") Long userId);

    @Query(value = "SELECT pd.day_num AS day, " +
            "pt.timeslot AS timeslot, " +
            "ptr.recipe_id AS recipe " +
            "FROM plan_timeslot_recipe ptr " +
            "LEFT JOIN plan_timeslots pt on pt.id = ptr.plan_timeslot_id " +
            "LEFT JOIN plan_days pd on pt.plan_day_id = pd.id " +
            "LEFT JOIN plan_weeks pw on pd.plan_week_id = pw.id " +
            "WHERE pw.start_date = '2022-10-10' " +
            "AND pw.user_id = 1;", nativeQuery = true)
    Collection<String> getRecipesByPlanWeek(@Param("start_date") String startDate, @Param("user_id") Long userId);
}
