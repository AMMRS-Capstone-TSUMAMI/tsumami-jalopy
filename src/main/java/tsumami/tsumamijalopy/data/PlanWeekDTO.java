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
    private String title;
    private String image; //change to photo if image doesn't work
    private Long calories;
    private Long fat;
    private Long carbs;
    private Long protein;
}
