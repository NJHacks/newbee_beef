package com.njhacks.newbee_beef.server_deploy;

import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

/**
 * Created by ShinHyun.Kang on 2018. 7. 23..
 */
@Service
public class ServerDeployService {
    public String deploy() {
        try {
            return shellCmd("/home/ec2-user/build_deploy.sh");
        } catch (Exception e) {
            return "error";
        }
    }

    public String shellCmd(String command) throws Exception {
        String shellResult = "";
        Runtime runtime = Runtime.getRuntime();
        Process process = runtime.exec(command);
        InputStream is = process.getInputStream();
        InputStreamReader isr = new InputStreamReader(is);
        BufferedReader br = new BufferedReader(isr);
        String line;
        while ((line = br.readLine()) != null) {
            shellResult += line + "\n";
        }

        return shellResult;
    }
}

