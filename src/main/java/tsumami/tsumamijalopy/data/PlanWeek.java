package tsumami.tsumamijalopy.data;

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

    @ManyToMany
    @JoinTable(
            name = "plan_weeks_fk",
            joinColumns = @JoinColumn(name = "plan_week_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    @JsonIgnoreProperties({"plan_week", "venue"})
    private Collection<User> users;

}
