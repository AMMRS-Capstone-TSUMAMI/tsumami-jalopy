package tsumami.tsumamijalopy.web;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tsumami.tsumamijalopy.data.Recipe;
import tsumami.tsumamijalopy.data.RecipesRepository;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/recipes", produces = "application/json")
public class RecipesController {
    private RecipesRepository recipesRepository;
    @PostMapping("/create")
    public void createRecipe(@RequestBody Recipe newRecipe) {
        recipesRepository.save(newRecipe);
    }
//    In progress for recipes view:
        @Id
        @GetMapping("/meals/{id}")

    public Optional<Recipe> getRecipeById(@PathVariable("id") Long id) {
        return recipesRepository.findById(id);
    }


}
