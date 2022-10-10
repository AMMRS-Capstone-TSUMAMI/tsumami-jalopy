package tsumami.tsumamijalopy.web;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;
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
    @GetMapping("/me")
    private User getMe() {
        User loggedInUser = usersRepository.findAll().get(0);
        return loggedInUser;
    }

    @GetMapping("/authinfo")
    private UserAuthInfoDTO getUserAuthInfo(@RequestHeader(value = HttpHeaders.AUTHORIZATION, required = false) String authHeader) {
        User loggedInUser = authBuddy.getUserFromAuthHeader(authHeader);
//        System.out.println(authBuddy.getUserFromAuthHeader(authHeader).getBirth_date());

        // use email to lookup the user's info
        UserAuthInfoDTO userDTO = new UserAuthInfoDTO();
        userDTO.setEmail(loggedInUser.getEmail());
        //        userDTO.setRole(loggedInUser.getRole());
        userDTO.setUsername(loggedInUser.getUsername());
        //        userDTO.setProfilePic(loggedInUser.getProfilePic());

        return userDTO;
    }

    @PostMapping("/create")
    public void createUser(@RequestBody User newUser) {
        usersRepository.save(newUser);
    }



}
