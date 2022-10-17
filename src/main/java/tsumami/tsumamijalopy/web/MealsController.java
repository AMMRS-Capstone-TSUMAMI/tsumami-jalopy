package tsumami.tsumamijalopy.web;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tsumami.tsumamijalopy.data.Meal;
import tsumami.tsumamijalopy.data.MealsRepository;
import tsumami.tsumamijalopy.data.Recipe;
import tsumami.tsumamijalopy.data.RecipesRepository;

import java.util.Optional;

@AllArgsConstructor
@RestController
@ResponseBody
@RequestMapping(value = "/api/meals", produces = "application/json")
@CrossOrigin(origins = "http://localhost:8080/", exposedHeaders = "Content-Range")
public class MealsController {
//    private MealsRepository mealsRepository;
//    private RecipesRepository recipesRepository;

//    @GetMapping("/meals/{id}")
//    public ResponseEntity<Recipe>getRecipeById(PathVariable("id") Recipe id) {

//    }
}