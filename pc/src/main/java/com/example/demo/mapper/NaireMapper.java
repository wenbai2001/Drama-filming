package com.example.demo.mapper;

import com.example.demo.entity.Naire;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface NaireMapper {

    List<Naire> findAll();

    public List<Naire> getById(int uid);

    public void addUser(Naire naire);

    Integer getSongById(Integer uid);
}
