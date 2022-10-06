package tsumami.tsumamijalopy.data;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class PlanDay {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    public int dayNum;
}
