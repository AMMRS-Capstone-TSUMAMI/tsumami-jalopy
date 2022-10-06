package tsumami.tsumamijalopy.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.Collection;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
//@ToString
@Entity(name="recipes")
@Table
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;




    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH, CascadeType.REFRESH},
            targetEntity = User.class)
    @JoinTable(
            name="user_favorite_recipes",
            joinColumns = {@JoinColumn(name = "recipes_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="users_id", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    @JsonIgnoreProperties("users")
    private Collection<User> users;






    //    @Column(nullable = false, length = 100)
    private String name;

    //    @Column(nullable = false, length = 100)
    private String photo;

    @Column(nullable = false, length = 1000)
    private Integer description;

}
