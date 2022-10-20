package tsumami.tsumamijalopy.web;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tsumami.tsumamijalopy.data.MacroAllocation;
import tsumami.tsumamijalopy.data.MacroAllocationsRepository;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "api/macros", produces = "application/json")
public class MacroAllocationsController {
    private MacroAllocationsRepository macroAllocationsRepository;
    @GetMapping("")
    public List<MacroAllocation> getAll() {
        return macroAllocationsRepository.findAll();
    }

}
