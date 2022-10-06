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
@Entity
@Table(name="ingredients")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String photo;
    private Long price;
    private Long unit;

}
