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
@Table(name="planWeek")

public class PlanWeek {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate startDate;

    @ManyToOne
    @JsonIgnoreProperties({"planWeek"})
    private User user;

    @OneToMany(mappedBy = "planWeek")
    @JsonIgnoreProperties({"plan_week_id"})
    private Collection<PlanDay> planDays;

}
