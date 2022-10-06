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
    private String name;
    private String photo;
    @Column(nullable = false, length = 1000)
    private String description;

}
