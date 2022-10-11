package tsumami.tsumamijalopy.data;

import lombok.*;

import java.util.Date;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserAuthInfoDTO {
    private Long id;
    private String username;
    private String email;
    private String profilePic;
    private Date birthday;
    private String gender;
    private Long calorie_goal;

}
