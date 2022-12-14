package tsumami.tsumamijalopy.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.Collection;
import java.util.Optional;
import tsumami.tsumamijalopy.data.RecipesRepository;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="recipes")
public class Recipe {
    @Id
    private Long id;

    private String name;
    private Long calories;
    private Long fat;
    private Long carbs;
    private Long protein;

    @Column(length = 1000)
    private String photo;

    @Column(length = 1000)
    private String description;

//    @ManyToMany(
//            fetch = FetchType.LAZY,
//            cascade = {CascadeType.DETACH, CascadeType.REFRESH},
//            targetEntity = PlanTimeslot.class)
//    @JoinTable(
//            name="plan_timeslot_recipe",
//            joinColumns = {@JoinColumn(name = "recipe_id", nullable = false, updatable = false)},
//            inverseJoinColumns = {@JoinColumn(name="plan_timeslot_id", nullable = false, updatable = false)},
//            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
//            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
//    )
//    @JsonIgnoreProperties({"recipes", "planDay"})
//    private Collection<PlanTimeslot> planTimeslots;

//TODO add ManyToMany

//    In progress for recipes view:

}
