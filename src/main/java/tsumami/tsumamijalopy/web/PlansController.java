package tsumami.tsumamijalopy.web;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tsumami.tsumamijalopy.data.*;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/plans", produces = "application/json")
public class PlansController {
    private PlanWeeksRepository planWeeksRepository;
    private PlanDaysRepository planDaysRepository;
    private RecipesRepository recipesRepository;
    private PlanTimeslotsRepository planTimeslotsRepository;

    @GetMapping("")
    public List<PlanTimeslot> getAllTimeslots() {
        return planTimeslotsRepository.findAll();
    }

    @GetMapping("/timeslot")
    public PlanTimeslot getPlanTimeslotByDayWeekStart(@RequestParam String startDate, @RequestParam Long dayNum, @RequestParam Long timeslot) {
        return planTimeslotsRepository.getPlanTimeslotByDayWeekStart(startDate, dayNum, timeslot, 1L);
        //TODO replace 1L with userId pulled from auth header
        //TODO add a PostMapping
        //TODO add recipe{id}
        //TODO post request in frontend; parameters passed in url
    }
    @GetMapping("/planweek")
    public Collection<String> getRecipesByPlanWeek(@RequestParam String startDate) {
        return planTimeslotsRepository.getRecipesByPlanWeek(startDate, 1L);
    }
}
