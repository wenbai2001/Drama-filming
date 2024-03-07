package com.example.demo.entity;



public class UserInformation {
    private Integer id;
    private String name;
    private String password;
    private String tel;
    private String email;
    private String registerdate;
    private String birthday;
    private String position;

    public UserInformation(){

    }

    public UserInformation(Integer id, String name,String password, String tel, String registerdate) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.tel = tel;
        this.registerdate=registerdate;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRegisterdate() {
        return registerdate;
    }

    public void setRegisterdate(String registerdate) {
        this.registerdate = registerdate;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }
}
