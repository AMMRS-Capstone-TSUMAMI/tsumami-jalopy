package tsumami.tsumamijalopy.web;

import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import tsumami.tsumamijalopy.data.*;
import tsumami.tsumamijalopy.services.AuthBuddy;
import tsumami.tsumamijalopy.services.FieldHelper;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/users", produces = "application/json")
public class UsersController {
    private UsersRepository usersRepository;
    private AuthBuddy authBuddy;
    private TrophyRepository trophyRepository;

    @GetMapping("/me")
    private User fetchMe(@RequestHeader(value = HttpHeaders.AUTHORIZATION, required = false) String authHeader) {
        User loggedInUser = authBuddy.getUserFromAuthHeader(authHeader);

        return loggedInUser;
    }

    @GetMapping("")
    public List<User> getAll() {
        return usersRepository.findAll();
    }
    @GetMapping("/{id}")
    private Optional<User> getById(Long id) {
        return usersRepository.findById(id);

    }

    @GetMapping("/authinfo")
    private UserAuthInfoDTO getUserAuthInfo(@RequestHeader(value = HttpHeaders.AUTHORIZATION, required = false) String authHeader) {
        User loggedInUser = authBuddy.getUserFromAuthHeader(authHeader);
//        System.out.println(authBuddy.getUserFromAuthHeader(authHeader).getBirth_date());
        // use email to lookup the user's info
        UserAuthInfoDTO userDTO = new UserAuthInfoDTO();
        userDTO.setBirthdate(loggedInUser.getBirthdate());
        userDTO.setGender(loggedInUser.getGender());
        userDTO.setId(loggedInUser.getId());
        userDTO.setEmail(loggedInUser.getEmail());
        //        userDTO.setRole(loggedInUser.getRole());
        userDTO.setUsername(loggedInUser.getUsername());
        userDTO.setCalorieGoal(loggedInUser.getCalorieGoal());
        userDTO.setPhoto(loggedInUser.getPhoto());

        return userDTO;
    }

    @PostMapping("/create")
    public void createUser(@RequestBody User newUser) {
        usersRepository.save(newUser);
    }

    @PatchMapping("/{id}")
    public void updateUser(@RequestBody User updateUser, @PathVariable long id) {
        Optional<User> optionalUser = usersRepository.findById(id);
        if (optionalUser.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User " + id + " not found");
        }
        User originalUser = optionalUser.get();
        updateUser.setId(id);
        BeanUtils.copyProperties(updateUser, originalUser, FieldHelper.getNullPropertyNames(updateUser));
        usersRepository.save(originalUser);
    }

    @GetMapping("/getAll")
    public Collection<User> getAllUsers() {
        return usersRepository.findAll();
    }

    @PatchMapping("/addTrophy/{trophyId}")
    public void addTrophyAndXp(@PathVariable Long trophyId, @RequestHeader(value = HttpHeaders.AUTHORIZATION, required = false) String authHeader) {
        User loggedInUser = authBuddy.getUserFromAuthHeader(authHeader);
        Trophy newTrophy = trophyRepository.findById(trophyId).get();

        Collection<Trophy> usersTrophies = loggedInUser.getTrophies();

        usersTrophies.add(newTrophy);

        loggedInUser.setTrophies(usersTrophies);

        Integer usersXp = loggedInUser.getExperiencePoints();
        usersXp = usersXp + 10;
        loggedInUser.setExperiencePoints(usersXp);

        usersRepository.save(loggedInUser);
    }

}