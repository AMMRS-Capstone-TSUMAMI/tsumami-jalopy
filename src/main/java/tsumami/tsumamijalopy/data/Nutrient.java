package tsumami.tsumamijalopy.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="nutrient")
@Table

public class Nutrient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


}
