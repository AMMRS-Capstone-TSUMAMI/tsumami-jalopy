package tsumami.tsumamijalopy.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    @Entity
    @Table(name="intolerances")
    public class Intolerance {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @ManyToMany(
                fetch = FetchType.LAZY,
                cascade = {CascadeType.DETACH, CascadeType.REFRESH},
                targetEntity = User.class)
        @JoinTable(
                name="user_intolerance",
                joinColumns = {@JoinColumn(name = "intolerance_id", nullable = false, updatable = false)},
                inverseJoinColumns = {@JoinColumn(name="user_id", nullable = false, updatable = false)},
                foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
                inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
        )
        @JsonIgnoreProperties("intolerances")
        private Collection<User> users;

        @Column(nullable = false, length = 100)
        private String name;

}