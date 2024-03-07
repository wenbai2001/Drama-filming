package com.example.demo.service;

import com.example.demo.entity.Naire;
import com.example.demo.mapper.NaireMapper;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NaireService {

    @Autowired
    private NaireMapper naireMapper;

    public List<Naire> findAll(){ return naireMapper.findAll(); }

    public List<Naire> getById(int uid) { return naireMapper.getById(uid); }

    public void addUser(Naire naire) { naireMapper.addUser(naire); }

    public Integer getSongById(Integer uid){ return naireMapper.getSongById(uid); }
}
