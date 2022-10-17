package tsumami.tsumamijalopy.web;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tsumami.tsumamijalopy.data.MealsRepository;
import tsumami.tsumamijalopy.data.Recipe;
import tsumami.tsumamijalopy.data.RecipesRepository;


@AllArgsConstructor
@RestController
@ResponseBody
@RequestMapping(value = "/api/meals", produces = "application/json")
@CrossOrigin(origins = "http://localhost:8080/", exposedHeaders = "Content-Range")
public class MealsController {
    private MealsRepository mealsRepository;
    private RecipesRepository recipesRepository;

    @GetMapping("/meals/{id}")
    public ResponseEntity<Recipe>getRecipeById(@PathVariable("id") Recipe id) {
        Recipe entity = data.Recipe.getRecipeById(Recipe id);

        return new ResponseEntity<>(entity, new HttpHeaders(), HttpStatus.OK);
    }
}