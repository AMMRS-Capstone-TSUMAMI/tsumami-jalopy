package tsumami.tsumamijalopy.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewsController {

    @RequestMapping({"/", "/landing", "/register", "/login", "/meals", "/about", "/account"})
    public String showView() {
        return "forward:/index.html";
    }
}