package tsumami.tsumamijalopy.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.Collection;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//@ToString
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

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

    @Column(nullable = false, unique = true, length = 100)
    private String username;

    @Email
    @NotEmpty
//    @Column(nullable = false, length = 100)
    private String email;

    @NotEmpty
//    @Column(length = 100)
    private String gender;

    @NotEmpty
//    @Column(length = 100)
    private String birth_date;

    @NotEmpty
//    @Column(length = 100)
    private String height;

    @NotEmpty
//    @Column(length = 100)
    private String weight;

    @NotEmpty
//    @Column(length = 100)
    private String diet;

    @NotEmpty
//    @Column(length = 100)
    private String activity_level;

    @NotEmpty
//    @Column(length = 100)
    private String calorie_goal;

    @NotEmpty
    private String carb_goal;

    @NotEmpty
    private String fat_goal;

    @NotEmpty
    private String protein_goal;
}
