package tsumami.tsumamijalopy.data;

import lombok.*;


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
    private String birthday;
    private String gender;

}
