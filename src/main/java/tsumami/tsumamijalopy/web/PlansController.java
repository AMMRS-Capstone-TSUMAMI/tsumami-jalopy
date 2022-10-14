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

    @GetMapping("")
    public List<PlanTimeslot> getAllTimeslots() {
        return planTimeslotsRepository.findAll();
    }

    @GetMapping("/timeslot")
    public PlanTimeslot getPlanTimeslotIdByDayWeekStart(@RequestParam String startDate, @RequestParam Long dayNum, @RequestParam Long timeslot) {
        return planTimeslotsRepository.getPlanTimeslotByDayWeekStart(startDate, dayNum, timeslot, 1L);
        //replace 1L with userId pulled from auth header
        //add a PostMapping
        //add recipe{id}
        //post request in frontend; parameters passed in url}
    }
}
