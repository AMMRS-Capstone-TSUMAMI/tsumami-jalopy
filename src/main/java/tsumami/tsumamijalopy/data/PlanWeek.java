package tsumami.tsumamijalopy.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Collection;
import java.util.Date;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="planWeek")
@Table

public class PlanWeek {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

//    @Transient
    @NotEmpty
//    @Column(length = 100)
    private Date startDate;

    @ManyToOne
    @JsonIgnoreProperties({"plan_week"})
    private User user;


    @OneToMany(mappedBy = "planWeek")
    @JsonIgnoreProperties({"plan_week_id"})
    private Collection<PlanDay> planDays;

}
