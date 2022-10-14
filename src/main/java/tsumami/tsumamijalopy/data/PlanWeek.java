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
@Table(name="plan_weeks")

public class PlanWeek {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate startDate;

    @ManyToOne
    @JsonIgnoreProperties({"intolerances", "planWeeks", "recipes", "trophies", "chefLevels"})
    private User user;

    @OneToMany(mappedBy = "planWeek")
    @JsonIgnoreProperties("planTimeslots")
    private Collection<PlanDay> planDays;

}
