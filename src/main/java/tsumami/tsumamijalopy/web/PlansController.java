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
    private PlanTimeslotsRepository planTimeslotsRepository;

    @GetMapping("/week")
    public List<PlanWeek> getAllWeeks() {
        return planWeeksRepository.findAll();
    }
    @GetMapping("/day")
    public List<PlanDay> getAllDays() {
        return planDaysRepository.findAll();
    }
    @GetMapping("/timeslot")
    public List<PlanTimeslot> getAllTimeslots() {
        return planTimeslotsRepository.findAll();
    }
    @PostMapping("/create")
    public void createWeek(@RequestBody PlanWeek planWeek) {
        usersRepository.save(newUser);
    }
}
