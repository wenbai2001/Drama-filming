package com.example.demo.service;


import com.example.demo.entity.UserInformation;
import com.example.demo.mapper.UserInformationMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserInformationService {

    @Autowired
    private UserInformationMapper userInformationMapper;

    //public List<UserInformation> getById();
    public UserInformation getInformation(Integer id){return userInformationMapper.getInformation(id);}

    public void addUser(UserInformation userInformation){userInformationMapper.addUser(userInformation);}

    public Integer getId(String name,String password){return userInformationMapper.getId(name,password);}

    public Integer getIdTel(String tel,String password){return userInformationMapper.getIdTel(tel,password);}

    public Integer getIdEmail(String email, String password){return userInformationMapper.getIdEmail(email,password);}

    public Integer getIdByName(String name){
        if(name != null) return userInformationMapper.getIdByName(name);
        else return 0;
    }

    public Integer getIdByTel(String tel){
        if(tel != null) return userInformationMapper.getIdByTel(tel);
        else return 0;
    }

    public Integer getIdByEmail(String email){
        if(email != null) return userInformationMapper.getIdByEmail(email);
        else return 0;
    }

    public void completeInformation(Integer id, String birthday,String position,String email){
        userInformationMapper.completeInformation(id, birthday, position, email);
    }

    public String getNameById(Integer id){
        if(id != null) return userInformationMapper.getNameById(id);
        else return "";
    }

    public void changeName(Integer id,String name){userInformationMapper.changename(id,name);}

    public void changeTel(Integer id,String tel){userInformationMapper.changetel(id,tel);}

    public void changeEmail(Integer id,String email){userInformationMapper.changeemail(id,email);}

    public void changePassword(Integer id,String password){userInformationMapper.changepassword(id,password);}

    public void changeBirthday(Integer id,String birthday){userInformationMapper.changebirthday(id,birthday);}

    public void changePosition(Integer id,String position){userInformationMapper.changeposition(id,position);}
}
