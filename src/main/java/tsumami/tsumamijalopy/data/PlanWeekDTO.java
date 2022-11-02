package tsumami.tsumamijalopy.data;

import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlanWeekDTO {
    private Long dayNum;
    private Long timeslot;
    private Long recipeId;
}
