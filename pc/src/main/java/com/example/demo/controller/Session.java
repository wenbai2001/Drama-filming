package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

/**
 * SessionShareController <br>
 * 〈session共享控制器〉
 *
 * @author XiaoQiang
 * @create 2019-7-6
 * @since 1.0.0
 */
@RestController
@RequestMapping(value = "/session")
public class Session{

    @Value("${server.port}")
    Integer port;


    @RequestMapping(value = "/set")
    public String set(HttpSession session){
        session.setAttribute("user","afae");
        return String.valueOf(port);
    }

    @RequestMapping(value = "get")
    public String get(HttpSession session){
        return "欢迎您:"+session.getAttribute("user")+",来自端口:"+port;
    }
}
