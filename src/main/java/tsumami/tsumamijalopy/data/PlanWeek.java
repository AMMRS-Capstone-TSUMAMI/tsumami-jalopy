package tsumami.tsumamijalopy.data;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;
import java.util.Date;

public class PlanWeek {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Transient
    @NotEmpty
//    @Column(length = 100)
    private Date start_date;


}
