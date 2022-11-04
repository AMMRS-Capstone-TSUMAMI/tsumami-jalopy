package tsumami.tsumamijalopy.web;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;
import tsumami.tsumamijalopy.data.*;
import tsumami.tsumamijalopy.services.AuthBuddy;

import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/plans", produces = "application/json")
public class PlansController {
    private PlanWeeksRepository planWeeksRepository;
    private PlanDaysRepository planDaysRepository;
    private RecipesRepository recipesRepository;
    private PlanTimeslotsRepository planTimeslotsRepository;
    private AuthBuddy authBuddy;

    @GetMapping("/recipes")
    public List<PlanWeekDTO> getRecipesByPlanWeek(@RequestHeader(value = HttpHeaders.AUTHORIZATION, required = false) String authHeader, @RequestParam String startDate) {
        User loggedInUser = authBuddy.getUserFromAuthHeader(authHeader);
        Long userId = loggedInUser.getId();
        return planWeeksRepository.getRecipesByPlanWeek(userId, LocalDate.parse(startDate));
    }

    @GetMapping("")
    public List<PlanTimeslot> getAllTimeslots() {
        return planTimeslotsRepository.findAll();
    }


    @GetMapping("/get")
    public String[][] getRecipesByPlanWeekOld(@RequestHeader(value = HttpHeaders.AUTHORIZATION, required = false) String authHeader, @RequestParam String startDate) {
        User loggedInUser = authBuddy.getUserFromAuthHeader(authHeader);
        Long userId = loggedInUser.getId();
        return planTimeslotsRepository.getRecipesByPlanWeek(startDate, userId);
    }
//    @PostMapping("/recipeslot")
//    public void addRecipeToSlot(@RequestParam Long id, @RequestParam String name, @RequestParam String image, @RequestParam String startDate, @RequestParam Long userId, @RequestParam Long dayNum, @RequestParam Long timeslot) {
//        planWeeksRepository.addRecipeToSlot(id, name, image, startDate, userId, dayNum, timeslot);
//    }
    @PostMapping("/post")
    public Long insertRecipe(@RequestHeader(value = HttpHeaders.AUTHORIZATION, required = false) String authHeader, @RequestParam Long recipeId, @RequestParam String recipeName, @RequestParam String image, @RequestParam String startDate, @RequestParam Long dayNum, @RequestParam Long timeslot, @RequestParam Long calories, @RequestParam Long fat, @RequestParam Long carbs, @RequestParam Long protein) {
        User loggedInUser = authBuddy.getUserFromAuthHeader(authHeader);
        Long userId = loggedInUser.getId();
        planWeeksRepository.insertWeek(startDate, userId);
        Long planWeekId = planWeeksRepository.getPlanWeekId(startDate, userId);
        planDaysRepository.insertDay(dayNum, planWeekId);
        Long planDayId = planDaysRepository.getPlanDayId(dayNum, planWeekId);
        planTimeslotsRepository.insertTimeslot(timeslot, planDayId);
        Long timeslotId = planTimeslotsRepository.getPlanTimeslotId(timeslot, planDayId);
        recipesRepository.insertRecipe(recipeId, recipeName, image, calories, fat, carbs, protein);
        recipesRepository.insertTimeslotRecipe(timeslotId, recipeId);
        return timeslotId;


    }
    @DeleteMapping("/delete")
    public void deleteRecipe(@RequestParam Long recipeId, @RequestParam Long planTimeslotId) {
        recipesRepository.deleteRecipe(recipeId, planTimeslotId);
    }
    @GetMapping("/summary")
    public List<SummaryDTO> summarizeDayNutrients(@RequestHeader(value = HttpHeaders.AUTHORIZATION, required = false) String authHeader, @RequestParam String startDate) {
        User loggedInUser = authBuddy.getUserFromAuthHeader(authHeader);
        Long userId = loggedInUser.getId();
        return planWeeksRepository.getSummariesByPlanWeek(userId, LocalDate.parse(startDate));
    }
//    @GetMapping("/summary")
//    public String[][] summarizeDayNutrients(@RequestHeader(value = HttpHeaders.AUTHORIZATION, required = false) String authHeader, @RequestParam String startDate) {
//        User loggedInUser = authBuddy.getUserFromAuthHeader(authHeader);
//        Long userId = loggedInUser.getId();
//        return planDaysRepository.summarizeDayNutrients(startDate, userId);
//    }
}
