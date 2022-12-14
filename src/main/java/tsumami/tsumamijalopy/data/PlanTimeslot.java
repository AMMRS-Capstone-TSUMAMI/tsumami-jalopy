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
@Table(name="plan_timeslots",
        uniqueConstraints = @UniqueConstraint(columnNames = {"timeslot", "plan_day_id"}))
public class PlanTimeslot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    private Long timeslot;
    @ManyToOne
    @JoinColumn(name = "plan_day_id")
    @JsonIgnoreProperties("planTimeslots")
    private PlanDay planDay;

//    @ManyToMany(
//            fetch = FetchType.LAZY,
//            cascade = {CascadeType.DETACH, CascadeType.REFRESH},
//            targetEntity = Recipe.class)
//    @JoinTable(
//            name="plan_timeslot_recipe",
//            joinColumns = {@JoinColumn(name = "plan_timeslot_id", nullable = false, updatable = false)},
//            inverseJoinColumns = {@JoinColumn(name="recipe_id", nullable = false, updatable = false)},
//            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
//            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
//    )
//    @JsonIgnoreProperties("planTimeslots")
//    private Collection<Recipe> recipes;

}
