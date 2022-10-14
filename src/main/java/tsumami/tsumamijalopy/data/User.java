package tsumami.tsumamijalopy.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.*;
import java.time.LocalDate;
import java.util.Collection;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Email
    private String email;

    @Column(unique = true)
    private String username;

    private String gender;
    private LocalDate birthdate;
    private Long height;
    private Long weight;
    private String diet;
    private String activityLevel;
    private Long calorieGoal;
    private Long carbGoal;
    private Long fatGoal;
    private Long proteinGoal;
    private String photo;
    private Integer experiencePoints;

    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.REFRESH},
            targetEntity = Intolerance.class)
    @JoinTable(
            name="user_intolerance",
            joinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="intolerance_id", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    @JsonIgnoreProperties("users")
    private Collection<Intolerance> intolerances;

    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.REFRESH},
            targetEntity = User.class)
    @JoinTable(
            name="user_favorite_recipes",
            joinColumns = {@JoinColumn(name = "users_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="recipes_id", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    @JsonIgnoreProperties({"users", "planTimeslots"})
    private Collection<Recipe> recipes;

    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties("planDays")
    private Collection<PlanWeek> planWeeks;

//    @OneToMany(mappedBy = "user")
//    @JsonIgnoreProperties({"user_id"})
//    private Collection<Recipe> recipe;


//    creating many to many association between user and trophy
    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.REFRESH},
            targetEntity = Trophy.class)
    @JoinTable(
            name="user_trophy",
            joinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="trophy_id", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
//    @JsonIgnore avoids infinite recursion
    @JsonIgnoreProperties("users")
//    creating a collection of trophies for each user
    private Collection<Trophy> trophies;

    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.REFRESH},
            targetEntity = ChefLevel.class)
    @JoinTable(
            name="user_chef_levels",
            joinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="chef_levels", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    @JsonIgnoreProperties("users")
    private Collection<ChefLevel> chefLevels;

}
