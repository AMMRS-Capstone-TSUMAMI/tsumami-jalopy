package tsumami.tsumamijalopy.data;

import lombok.*;

import java.time.LocalDate;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserAuthInfoDTO {
    private Long id;
    private String username;
    private String email;
    private String photo;
    private LocalDate birthdate;
    private String gender;
    private Long calorieGoal;

}
