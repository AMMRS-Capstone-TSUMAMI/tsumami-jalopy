package tsumami.tsumamijalopy.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

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
}
