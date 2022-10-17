package tsumami.tsumamijalopy.web;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tsumami.tsumamijalopy.data.Meal;
import tsumami.tsumamijalopy.data.MealsRepository;

import java.util.Optional;

@AllArgsConstructor
@RestController
@ResponseBody
@RequestMapping(value = "/api/meals", produces = "application/json")
@CrossOrigin(origins = "http://localhost:8080/", exposedHeaders = "Content-Range")
public class MealsController {
    private MealsRepository mealsRepository;

    @GetMapping("/{id}")
    private Optional<Meal> getById(Long id) {
        return mealsRepository.findById(id);

    }
}