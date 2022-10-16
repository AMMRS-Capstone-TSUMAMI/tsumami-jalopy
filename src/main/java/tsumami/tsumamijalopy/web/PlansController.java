package tsumami.tsumamijalopy.web;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tsumami.tsumamijalopy.data.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/plans", produces = "application/json")
public class PlansController {
    private PlanWeeksRepository planWeeksRepository;
    private PlanDaysRepository planDaysRepository;
    private RecipesRepository recipesRepository;
    private PlanTimeslotsRepository planTimeslotsRepository;
    private UsersRepository usersRepository;

    @GetMapping("")
    public List<PlanTimeslot> getAllTimeslots() {
        return planTimeslotsRepository.findAll();
    }

//    @GetMapping("/timeslot")
//    public PlanTimeslot getPlanTimeslotByDayWeekStart(@RequestParam String startDate, @RequestParam Long dayNum, @RequestParam Long timeslot) {
//        return planTimeslotsRepository.getPlanTimeslotByDayWeekStart(startDate, dayNum, timeslot, 1L);
        //TODO replace 1L with userId pulled from auth header
        //TODO add a PostMapping
        //TODO add recipe{id}
        //TODO post request in frontend; parameters passed in url
//    }
    @GetMapping("/planweek")
    public String[][] getRecipesByPlanWeek(@RequestParam String startDate, @RequestParam Long userId) {
        return planTimeslotsRepository.getRecipesByPlanWeek(startDate, userId);
    }
//    @PostMapping("/recipeslot")
//    public void addRecipeToSlot(@RequestParam Long id, @RequestParam String name, @RequestParam String image, @RequestParam String startDate, @RequestParam Long userId, @RequestParam Long dayNum, @RequestParam Long timeslot) {
//        planWeeksRepository.addRecipeToSlot(id, name, image, startDate, userId, dayNum, timeslot);
//    }
    @PostMapping("/create")
    public void createRecipe(@RequestParam Long recipeId, @RequestParam String recipeName, @RequestParam String image, @RequestParam String startDate, @RequestParam Long dayNum, @RequestParam Long timeslot) {
        planWeeksRepository.insertWeek(startDate, 1L);
        Long planWeekId = planWeeksRepository.getPlanWeekId(startDate, 1L);
        planDaysRepository.insertDay(dayNum, planWeekId);
        Long planDayId = planDaysRepository.getPlanDayId(dayNum, planWeekId);
        planTimeslotsRepository.insertTimeslot(timeslot, planDayId);
        Long timeslotId = planTimeslotsRepository.getPlanTimeslotId(timeslot, planDayId);
        recipesRepository.insertRecipe(recipeId, recipeName, image);
        recipesRepository.insertTimeslotRecipe(timeslotId, recipeId);
    }
    @PostMapping("/insertweek")
    public void insertWeek(@RequestParam String startDate, @RequestParam Long userId) {
        planWeeksRepository.insertWeek(startDate, userId);
    }
    @GetMapping("/getweek")
    public Long getWeekId(@RequestParam String startDate, @RequestParam Long userId) {
        return planWeeksRepository.getPlanWeekId(startDate, userId);
    }
//    @PostMapping("/create")
//    public void createRecipe(@RequestParam Long id, @RequestParam String name, @RequestParam String image, @RequestParam String startDate, @RequestParam Long userId, @RequestParam Long dayNum, @RequestParam Long timeslot) {
//        Recipe newRecipe = new Recipe(id, name, image, null, null);
//        newRecipe = recipesRepository.save(newRecipe);
//        PlanWeek planWeek = new PlanWeek();
//        planWeek.setStartDate(LocalDate.parse(startDate));
//        planWeek.setUser(usersRepository.findById(userId).get());
//        PlanDay planDay = new PlanDay();
//        planDay.setDayNum(dayNum);
//    }
}
