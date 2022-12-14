package tsumami.tsumamijalopy.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface PlanTimeslotsRepository extends JpaRepository<PlanTimeslot, Long> {
    @Transactional
    @Modifying
    @Query(value = "INSERT IGNORE INTO plan_timeslots (timeslot, plan_day_id) " +
            "VALUES " +
            "    (:timeslot, :plan_day_id)", nativeQuery = true)
    void insertTimeslot(@Param("timeslot") Long timeslot, @Param("plan_day_id") Long planDayId);
    @Query(value = "SELECT id FROM plan_timeslots " +
            "WHERE timeslot = :timeslot " +
            "AND plan_day_id = :plan_day_id", nativeQuery = true)
    Long getPlanTimeslotId(@Param("timeslot") Long timeslot, @Param("plan_day_id") Long planDayId);

    @Query(value = "SELECT CONCAT(pd.day_num, pt.timeslot) AS slot, " +
            "ptr.plan_timeslot_id, " +
            "ptr.recipe_id, " +
            "r.name AS recipe, " +
            "r.photo, " +
            "r.calories, " +
            "r.fat, " +
            "r.carbs, " +
            "r.protein " +
            "FROM plan_timeslot_recipe ptr " +
            "LEFT JOIN recipes r on r.id = ptr.recipe_id " +
            "LEFT JOIN plan_timeslots pt on pt.id = ptr.plan_timeslot_id " +
            "LEFT JOIN plan_days pd on pt.plan_day_id = pd.id " +
            "LEFT JOIN plan_weeks pw on pd.plan_week_id = pw.id " +
            "WHERE pw.start_date = :start_date " +
            "AND pw.user_id = :user_id", nativeQuery = true)
    String[][] getRecipesByPlanWeek(@Param("start_date") String startDate,
                                    @Param("user_id") Long userId);
}
