package tsumami.tsumamijalopy.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PlanTimeslotsRepository extends JpaRepository<PlanTimeslot, Long> {
@Query(value = "USE tsumami; " +
        "SELECT plan_timeslot.* FROM plan_timeslot " +
        "JOIN plan_day ON plan_timeslot.plan_day_id = plan_day.id " +
        "INNER JOIN plan_week ON plan_day.plan_week_id = plan_week.id " +
        "WHERE plan_week.start_date = :start_date " +
        "AND plan_day.day_num = :day_num " +
        "AND plan_timeslot.timeslot = :timeslot " +
        "AND plan_week.user_id = :user_id", nativeQuery = true)
    PlanTimeslot getPlanTimeslotByDayWeekStart(@Param("start_date") String startDate, @Param("day_num") Long dayNum, @Param("timeslot") Long timeslot, @Param("user_id") Long userId);
}
