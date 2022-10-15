package tsumami.tsumamijalopy.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Collection;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="plan_days")

public class PlanDay {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long dayNum;

    @ManyToOne
    @JsonIgnoreProperties({"planDays", "users"})
    private  PlanWeek planWeek;

//    in progress
    @OneToMany(mappedBy = "planDay")
    @JsonIgnoreProperties({"planDay", "recipes"})
    private Collection<PlanTimeslot> planTimeslots;

}
