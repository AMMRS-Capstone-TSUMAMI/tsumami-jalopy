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
@Entity(name="ingredients")
@Table
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @Column(nullable = false, length = 100)
    private String name;

//    @Column(nullable = false, length = 100)
    private String photo;

    private Integer price;

    private Integer unit;

}
