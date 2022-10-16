package tsumami.tsumamijalopy.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface PlanWeeksRepository extends JpaRepository<PlanWeek, Long> {
    @Transactional
    @Modifying
    @Query(value = "INSERT IGNORE INTO plan_weeks (start_date, user_id) " +
            "VALUES " +
            "    (:start_date, :user_id)", nativeQuery = true)
    void insertWeek(@Param("start_date") String startDate, @Param("user_id") Long userId);
    @Query(value = "SELECT id FROM plan_weeks " +
            "WHERE start_date = :start_date " +
            "   AND user_id = :user_id", nativeQuery = true)
    Long getPlanWeekId(@Param("start_date") String startDate, @Param("user_id") Long userId);
//    @Query(value = "INSERT IGNORE INTO recipes (id, name, photo) " +
//            "VALUES " +
//            "    (:id, :name, :photo); " +
//            "INSERT IGNORE INTO plan_weeks (start_date, user_id) " +
//            "VALUES " +
//            "    (:start_date, :user_id); " +
//            "SET @plan_week_id = LAST_INSERT_ID(); " +
//            "INSERT IGNORE INTO plan_days (day_num, plan_week_id) " +
//            "VALUES " +
//            "    (:day_num, @plan_week_id); " +
//            "SET @plan_day_id = LAST_INSERT_ID(); " +
//            "INSERT IGNORE INTO plan_timeslots (timeslot, plan_day_id) " +
//            "VALUES " +
//            "    (:timeslot, @plan_day_id); " +
//            "SET @plan_timeslot_id = LAST_INSERT_ID(); " +
//            "INSERT INTO plan_timeslot_recipe (plan_timeslot_id, recipe_id) " +
//            "VALUES " +
//            "    (@plan_timeslot_id, :id)", nativeQuery = true)
//    void addRecipeToSlot(@Param("id") Long id,
//                   @Param("name") String name,
//                   @Param("photo") String image,
//                   @Param("start_date") String startDate,
//                   @Param("user_id") Long userId,
//                   @Param("day_num") Long dayNum,
//                   @Param("timeslot") Long timeslot);
}
