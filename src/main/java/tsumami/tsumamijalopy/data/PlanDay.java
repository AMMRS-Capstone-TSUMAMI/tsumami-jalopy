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
@Entity(name="planDay")
@Table

public class PlanDay {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotEmpty
    private int dayNum;

    @ManyToOne
    @JsonIgnoreProperties({"plan_day"})
    private  PlanWeek planWeek;

    @OneToMany(mappedBy = "planDay")
    @JsonIgnoreProperties({"plan_week_id"})
    private Collection<PlanTimeslot> planTimeslots;


}
