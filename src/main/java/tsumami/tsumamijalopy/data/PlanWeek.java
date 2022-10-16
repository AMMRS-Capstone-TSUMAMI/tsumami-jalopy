package tsumami.tsumamijalopy.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Collection;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="plan_weeks",
        uniqueConstraints = @UniqueConstraint(columnNames = {"start_date", "user_id"}))

public class PlanWeek {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "start_date")
    private LocalDate startDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties({"intolerances", "planWeeks", "recipes", "trophies", "chefLevels"})
    private User user;

    @OneToMany(mappedBy = "planWeek")
    @JsonIgnoreProperties({"planTimeslot", "planWeek"})
    private Collection<PlanDay> planDays;

}
