package com.njhacks.newbee_beef.controller;

import com.njhacks.newbee_beef.server_deploy.ServerDeployService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by ShinHyun.Kang on 2018. 7. 23..
 */
@Controller
public class ServerDeployController {

    @Autowired
    private ServerDeployService serverDeployService;

    @RequestMapping(path = "/server/deploy")
    @ResponseBody
    public String serverDeploy() {

        return serverDeployService.deploy();
    }
}
