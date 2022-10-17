package tsumami.tsumamijalopy.web;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tsumami.tsumamijalopy.data.ChefLevel;
import tsumami.tsumamijalopy.data.ChefLevelRepository;
import tsumami.tsumamijalopy.data.Trophy;

import java.util.Collection;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/chefLevels", produces = "application/json")
public class ChefLevelController {
    private ChefLevelRepository chefLevelRepository;
    @GetMapping("/getAllChefLevels")
    public Collection<ChefLevel> getAllChefLevels() {
        return chefLevelRepository.findAll();
    }
}
