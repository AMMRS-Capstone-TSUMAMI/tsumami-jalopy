package tsumami.tsumamijalopy.web;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tsumami.tsumamijalopy.data.Recipe;
import tsumami.tsumamijalopy.data.RecipesRepository;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/recipes", produces = "application/json")
public class RecipesController {
    private RecipesRepository recipesRepository;
    @PostMapping("/create")
    public void createRecipe(@RequestBody Recipe newRecipe) {
        recipesRepository.save(newRecipe);
    }
}
