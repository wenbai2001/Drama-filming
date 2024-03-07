package com.example.demo.entity;

public class SiteViews {
    int day;
    int views;

    public SiteViews(int day, int views) {
        this.day = day;
        this.views = views;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public int getViews() {
        return views;
    }

    public void setViews(int views) {
        this.views = views;
    }
}
