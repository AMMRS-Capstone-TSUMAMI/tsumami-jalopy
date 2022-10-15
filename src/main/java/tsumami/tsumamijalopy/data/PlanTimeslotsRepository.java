package tsumami.tsumamijalopy.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PlanTimeslotsRepository extends JpaRepository<PlanTimeslot, Long> {

    @Query(value = "USE tsumami; " +
        "SELECT * FROM plan_timeslots " +
        "JOIN plan_days ON plan_timeslots.plan_day_id = plan_days.id " +
        "INNER JOIN plan_weeks ON plan_days.plan_week_id = plan_weeks.id " +
        "WHERE plan_weeks.start_date = :start_date " +
        "AND plan_days.day_num = :day_num " +
        "AND plan_timeslots.timeslot = :timeslot " +
        "AND plan_weeks.user_id = :user_id", nativeQuery = true)
    PlanTimeslot getPlanTimeslotByDayWeekStart(@Param("start_date") String startDate, @Param("day_num") Long dayNum, @Param("timeslot") Long timeslot, @Param("user_id") Long userId);
}
