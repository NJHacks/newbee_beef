package com.njhacks.newbee_beef.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by coapion on 2018. 7. 22..
 */
@Controller
public class WebController {

    @RequestMapping(path = "/")
    public ModelAndView main() {
        return new ModelAndView("main");
    }
}
