package tsumami.tsumamijalopy.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface PlanDaysRepository extends JpaRepository<PlanDay, Long> {
    @Transactional
    @Modifying
    @Query(value = "INSERT IGNORE INTO plan_days (day_num, plan_week_id) " +
            "VALUES " +
            "    (:day_num, :plan_week_id)", nativeQuery = true)
    void insertDay(@Param("day_num") Long dayNum, @Param("plan_week_id") Long planWeekId);

    @Query(value = "SELECT id FROM plan_days " +
            "WHERE day_num = :day_num " +
            "AND plan_week_id = :plan_week_id", nativeQuery = true)
    Long getPlanDayId(@Param("day_num") Long dayNum, @Param("plan_week_id") Long planWeekId);

    @Query(value = "SELECT pd.day_num AS day,  " +
            "       SUM(r.calories) AS calories,  " +
            "       SUM(r.fat) AS fat,  " +
            "       SUM(r.carbs) AS carbs,  " +
            "       SUM(r.protein) AS protein  " +
            "FROM plan_timeslot_recipe ptr  " +
            "         LEFT JOIN recipes r ON r.id = ptr.recipe_id  " +
            "         LEFT JOIN plan_timeslots pt ON pt.id = ptr.plan_timeslot_id  " +
            "         LEFT JOIN plan_days pd ON pt.plan_day_id = pd.id  " +
            "         LEFT JOIN plan_weeks pw ON pd.plan_week_id = pw.id  " +
            "WHERE pw.start_date = :start_date  " +
            "  AND pw.user_id = :user_id  " +
            "GROUP BY day", nativeQuery = true)
    String[][] summarizeDayNutrients(@Param("start_date") String startDate,
                                        @Param("user_id") Long userId);
}
