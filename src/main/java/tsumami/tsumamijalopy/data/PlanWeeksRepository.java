package tsumami.tsumamijalopy.data;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;

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

    @Query(value = "SELECT NEW tsumami.tsumamijalopy.data.PlanWeekDTO(pd.dayNum, pt.timeslot, ptr.recipe.id) " +
            "FROM PlanWeek pw " +
            "LEFT JOIN PlanDay pd ON pw.id = pd.planWeek.id " +
            "LEFT JOIN PlanTimeslot pt ON pd.id = pt.planDay.id " +
            "LEFT JOIN PlanTimeslotRecipeTest ptr ON pt.id = ptr.planTimeslot.id " +
            "WHERE pw.user.id = :user_id " +
            "AND pw.startDate = :start_date")
    List<PlanWeekDTO> getRecipesByPlanWeek(@Param("user_id") Long userId,
                                           @Param("start_date") LocalDate startDate);
}
