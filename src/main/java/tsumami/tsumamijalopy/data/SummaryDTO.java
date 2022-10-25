package tsumami.tsumamijalopy.data;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SummaryDTO {
    private Long dayNum;
    private Long calories;
    private Long fat;
    private Long carbs;
    private Long protein;
}
