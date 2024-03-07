package com.example.demo.controller;

import com.example.demo.entity.Visits;
import com.example.demo.service.SiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller


public class VisitController {

    @Autowired
    private SiteService siteService;

   // @GetMapping("/")
   // public String mainpage(){
   //     return "";
   // }

    @GetMapping("/visit")
    @ResponseBody
    public Visits getToday(){
        int day = siteService.getToday();
        int sum = siteService.getSum();
        int total = siteService.getTotal();
        return new Visits(day,sum,total);
    }

    @PostMapping("/visit")
    public Visits getTodayPost(){ return getToday();}

    //以下功能是在代码功能并不成熟的时候写的草稿（开始只想到如何实现在一个页面上面显示访问量），
    //在后期维护的时候如果碰到问题可根据这些代码进行单个功能效果的检验
    //@GetMapping("/changeday")
    //public void changeToday(){siteService.changeToday();}

    //@PostMapping("/changeday")
   // public void changeTodayPost(){siteService.changeToday();}

    //@GetMapping("/changeweek")
    //public void changeWeek(){siteService.changeWeek();}

    //@PostMapping("/changeweek")
    //public void changeWeekPost(){siteService.changeWeek();}

    //@GetMapping("/getsum")
    //public void getSum(){siteService.getSum();}

    //@PostMapping("/getsum")
    //public void getSumPost(){siteService.getSum();}

    //@GetMapping("/gettotal")
    //public int getTotal(){return siteService.getTotal();}

    //@PostMapping("/gettotal")
    //public int getTotalPost(){return siteService.getTotal();}
}