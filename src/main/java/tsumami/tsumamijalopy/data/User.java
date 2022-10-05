package tsumami.tsumamijalopy.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.*;

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
