package com.example.demo.entity;

public class Visits {
    int day;
    int week;
    int sum;

    public Visits(int day, int week, int sum) {
        this.day = day;
        this.week = week;
        this.sum = sum;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public int getWeek() {
        return week;
    }

    public void setWeek(int week) {
        this.week = week;
    }

    public int getSum() {
        return sum;
    }

    public void setSum(int sum) {
        this.sum = sum;
    }
}
