package com.example.demo.service;

import com.example.demo.mapper.SiteMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
@EnableScheduling
public class SiteService {

    @Autowired
    private SiteMapper siteMapper;

    public int getToday(){
        int views = siteMapper.getSomeday(1);
        views++;
        siteMapper.changeViews(1,views);
        return siteMapper.getSomeday(1);
    }

    public int getSum(){return siteMapper.getSum();}

    public void changeToday(){
        int views = siteMapper.getSomeday(1);
        views++;
        siteMapper.changeViews(1,views);
    }

    @Scheduled(cron = "0 0 0 * * ?")//0/5 * * * * ?
    public void changeWeek(){
        for(int date=7;date>1;date--){
            int views = siteMapper.getSomeday(date-1);
            siteMapper.changeViews(date,views);
        }
        siteMapper.changeViews(1,0);
    }

    public int getTotal(){
        int views = siteMapper.getSomeday(8);
        views++;
        siteMapper.changeViews(8,views);
        return siteMapper.getSomeday(8);
    }


}
