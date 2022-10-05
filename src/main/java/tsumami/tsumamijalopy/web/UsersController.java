package tsumami.tsumamijalopy.web;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tsumami.tsumamijalopy.data.User;
import tsumami.tsumamijalopy.data.UserAuthInfoDTO;
import tsumami.tsumamijalopy.data.UsersRepository;
import tsumami.tsumamijalopy.services.AuthBuddy;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/users", produces = "application/json")
public class UsersController {
    private UsersRepository usersRepository;
    private AuthBuddy authBuddy;

    @GetMapping("/authinfo")
    private UserAuthInfoDTO getUserAuthInfo(@RequestHeader(value = HttpHeaders.AUTHORIZATION, required = false) String authHeader) {
        User loggedInUser = authBuddy.getUserFromAuthHeader(authHeader);

        // use email to lookup the user's info
        UserAuthInfoDTO userDTO = new UserAuthInfoDTO();
        userDTO.setEmail(loggedInUser.getEmail());
        //        userDTO.setRole(loggedInUser.getRole());
        userDTO.setUserName(loggedInUser.getUserName());
        //        userDTO.setProfilePic(loggedInUser.getProfilePic());

        return userDTO;
    }
}
