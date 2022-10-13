package tsumami.tsumamijalopy.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class ViewsController {
    @GetMapping(value="doLogin")
    public RedirectView oauthRedirect(RedirectAttributes attributes) {
        System.out.println("oauthRedirect called");
        return new RedirectView("index.html");
    }

    @RequestMapping({"/", "/landing", "/register", "/login", "/meals", "/about", "/account", "logout", "/recipes"})
    public String showView() {
        return "forward:/index.html";
    }
}