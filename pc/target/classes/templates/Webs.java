package templates;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping(value="webs")
public class Webs {

    @GetMapping("dag")
    public String dag(HttpSession session){
        session.getAttribute("id");
        return "dag";
    }

    @GetMapping("hfzc")
    public String hfzc(HttpSession session){
        session.getAttribute("id");
        return "hfzc";
    }

    @GetMapping("jcsz")
    public String jcsz(HttpSession session){
        session.getAttribute("id");
        return "jcsz";
    }

    @GetMapping("jdzw")
    public String jdzw(HttpSession session){
        session.getAttribute("id");
        return "jdzw";
    }

    @GetMapping("sdzs")
    public String sdzs(HttpSession session){
        session.getAttribute("id");
        return "sdzs";
    }

    @GetMapping("syrg")
    public String syrg(HttpSession session){
        session.getAttribute("id");
        return "syrg";
    }

    @GetMapping("wyjb")
    public String wyjb(HttpSession session){
        session.getAttribute("id");
        return "wyjb";
    }

    @GetMapping("xsrj")
    public String xsrj(HttpSession session){
        session.getAttribute("id");
        return "xsrj";
    }
}
