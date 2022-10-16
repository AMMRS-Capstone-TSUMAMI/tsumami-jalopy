package tsumami.tsumamijalopy.web;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tsumami.tsumamijalopy.data.Trophy;
import tsumami.tsumamijalopy.data.TrophyRepository;
import tsumami.tsumamijalopy.data.User;

import java.util.Collection;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/trophies", produces = "application/json")
public class TrophyController {
    private TrophyRepository trophyRepository;
    @GetMapping("/getAllTrophies")
    public Collection<Trophy> getAllUsers() {
        return trophyRepository.findAll();
    }
}
