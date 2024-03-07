package com.example.demo.mapper;

import com.example.demo.entity.UserInformation;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserInformationMapper {
    Integer getId(String name,String password);

    UserInformation getInformation(Integer id);

    Integer getIdTel(String tel,String password);

    Integer getIdEmail(String email,String password);

    void addUser(UserInformation userInformation);

    Integer getIdByName(String name);

    Integer getIdByTel(String tel);

    Integer getIdByEmail(String email);

    String getNameById(Integer id);

    void completeInformation(Integer id,String birthday,String position,String email);

    void changename(Integer id,String name);

    void changetel(Integer id,String tel);

    void changeemail(Integer id,String email);

    void changepassword(Integer id,String password);

    void changebirthday(Integer id,String birthday);

    void changeposition(Integer id,String position);
}
