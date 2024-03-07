package com.example.demo.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SiteMapper {

    int getSomeday(int day);

    int getSum();

    int changeViews(Integer day, Integer views);
}
