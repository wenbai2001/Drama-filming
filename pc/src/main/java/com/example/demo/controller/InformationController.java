package com.example.demo.controller;


import com.example.demo.entity.BoolBack;
import com.example.demo.entity.FeedBack;
import com.example.demo.entity.UserInformation;
import com.example.demo.service.MailService;
import com.example.demo.service.UserInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/webs")
public class InformationController {

    @Autowired
    private UserInformationService userInformationService;
    @Autowired
    private MailService mailService;

    @GetMapping("/sendemail")
    @ResponseBody
    public FeedBack sendEmail(String email, HttpSession session){
        String code = (int)((Math.random()*9+1)*100000)+"";
        session.setAttribute("code",code);
        mailService.sendSimpleMail(email,"验证信息","【黄梅戏迷】专属于您的验证码已生成，您的验证码是"+code+"，请妥善保存并尽快进行验证。");
        return new FeedBack(94,code);
    }

    @GetMapping("/verify")
    @ResponseBody
    public BoolBack verify(String code,HttpSession session){
        String orgCode = (String) session.getAttribute("code");
        boolean bool = orgCode.matches(code);
        return new BoolBack(bool);
    }

    @GetMapping("/register")//注册接口
    @ResponseBody
    public FeedBack addUser(String name, String password, String tel, String registerdate, HttpSession session) {
        //try {
        int pageid;
        String message;
            Integer id = userInformationService.getIdByName(name);
            if(id != null) {
                session.setAttribute("msg","用户已存在");
                pageid = 91;
                message = "用户已存在！";
                return new FeedBack(pageid, message);
            }
            UserInformation userInformation = new UserInformation(null, name, password, tel, registerdate);
            userInformationService.addUser(userInformation);
            id = userInformationService.getId(name, password);
            session.setAttribute("id", id);
            pageid = 94;
            message = "注册成功！";
            return new FeedBack(pageid, message);
        //} catch (Exception e) {
        //    session.setAttribute("msg","注册失败");
        //       return "register";
        //}
    }

    @GetMapping("/getinformation")
    @ResponseBody
    public UserInformation getInformation(HttpSession session){
        Integer id = (Integer) session.getAttribute("id");
        UserInformation userInformation;
        userInformation = userInformationService.getInformation(id);
        userInformation.setPassword("*");
        return userInformation;
    }

    @GetMapping("/getidbyname")//通过用户名字获取用户id
    @ResponseBody
    public BoolBack getIdByName(String name){
        Integer id = userInformationService.getIdByName(name);
        if(id == null) return new BoolBack(false);
        return new BoolBack(true);
    }

    @GetMapping("/getidbytel")//通过用户电话获取用户id
    @ResponseBody
    public BoolBack getIdByTel(String tel){
        Integer id = userInformationService.getIdByTel(tel);
        if(id == null) return new BoolBack(false);
        return new BoolBack(true);
    }

    @GetMapping("/getidbyemail")//通过用户邮箱获取用户id
    @ResponseBody
    public BoolBack getIdByEmail(String email){
        Integer id = userInformationService.getIdByEmail(email);
        if(id == null) return new BoolBack(false);
        return new BoolBack(true);
    }

    @GetMapping("/getnamebyid")//通过用户邮箱获取用户id
    @ResponseBody
    public FeedBack getNameById(HttpSession session){
        Integer id = (Integer) session.getAttribute("id");
        String name = userInformationService.getNameById(id);
        return new FeedBack(id, name);
    }

    @GetMapping("/login")//用户登录
    @ResponseBody
    public FeedBack getId(String str,String password,Model model, HttpSession session){
        Object get = session.getAttribute("id");
        if( get != null ) return new FeedBack(94,"用户已登录！");
        Integer id = userInformationService.getId(str, password);
        if(id == null) id=userInformationService.getIdTel(str,password);
        if(id == null) id=userInformationService.getIdEmail(str,password);
        if(id != null) {
            session.setAttribute("id",id);
            return new FeedBack(94,"用户登录成功！");
        }
        else {
            return new FeedBack(92,"用户名或密码错误！");
        }
    }

    @GetMapping("/complete")//用户信息完善
    @ResponseBody
    public FeedBack completeInformation(String birthday, String position, String email, HttpSession session){
        Integer id = (Integer) session.getAttribute("id");
        if(id == null) return new FeedBack(92,"用户未登录！");
        userInformationService.completeInformation(id,birthday,position,email);
        return new FeedBack(94,"信息完善成功！");
    }

    @GetMapping("/logout")
    @ResponseBody
    public void logout(HttpSession session)
    {
        session.setAttribute("id",null);
    }

    @GetMapping("/changename")
    @ResponseBody
    public BoolBack changeName(HttpSession session, String name){
        Integer id = (Integer) session.getAttribute("id");
        userInformationService.changeName(id,name);
        return new BoolBack(true);
    }

    @GetMapping("/changetel")
    @ResponseBody
    public BoolBack changeTel(HttpSession session, String tel){
        Integer id = (Integer) session.getAttribute("id");
        userInformationService.changeTel(id,tel);
        return new BoolBack(true);
    }

    @GetMapping("/changeemail")
    @ResponseBody
    public BoolBack changeEmail(HttpSession session, String email){
        Integer id = (Integer) session.getAttribute("id");
        userInformationService.changeEmail(id,email);
        return new BoolBack(true);
    }

    @GetMapping("/changepassword")
    @ResponseBody
    public BoolBack changePassword(HttpSession session, String password){
        Integer id = (Integer) session.getAttribute("id");
        userInformationService.changePassword(id,password);
        return new BoolBack(true);
    }

    @GetMapping("/changebirthday")
    @ResponseBody
    public BoolBack changeBirthday(HttpSession session, String birthday){
        Integer id = (Integer) session.getAttribute("id");
        userInformationService.changeBirthday(id,birthday);
        return new BoolBack(true);
    }

    @GetMapping("/changeposition")
    @ResponseBody
    public BoolBack changePosition(HttpSession session, String position){
        Integer id = (Integer) session.getAttribute("id");
        userInformationService.changePosition(id,position);
        return new BoolBack(true);
    }


    @PostMapping("/register")//注册接口
    @ResponseBody
    public FeedBack addUserPost(String name, String password, String tel, String registerdate, Integer choice, Model model, HttpSession session) {
        //try {
        int pageid;
        String message;
        if(choice==2){//code就是验证码
            Integer id = userInformationService.getIdByName(name);
            if(id != null) {
                session.setAttribute("msg","用户已存在");
                pageid = 91;
                message = "用户已存在！";
                return new FeedBack(pageid, message);
            }
            UserInformation userInformation = new UserInformation(null, name, password, tel, registerdate);
            userInformationService.addUser(userInformation);
            id = userInformationService.getId(name, password);
            session.setAttribute("id", id);
            pageid = 94;
            message = "注册成功！";
            return new FeedBack(pageid, message);
        }
        else if(choice == 1)  return new FeedBack(92,"返回登录页面");
        else {
            session.setAttribute("msg","选择参数不正确");
            return new FeedBack(91,"选择参数不正确");
        }
        //} catch (Exception e) {
        //    session.setAttribute("msg","注册失败");
        //       return "register";
        //}
    }

    @PostMapping("/getidbyname")//通过用户名字获取用户id
    @ResponseBody
    public BoolBack getIdByNamePost(String name){
        Integer id = userInformationService.getIdByName(name);
        if(id == null) return new BoolBack(false);
        return new BoolBack(true);
    }

    @PostMapping("/getidbytel")//通过用户电话获取用户id
    @ResponseBody
    public BoolBack getIdByTelPost(String tel){
        Integer id = userInformationService.getIdByTel(tel);
        if(id == null) return new BoolBack(false);
        return new BoolBack(true);
    }

    @PostMapping("/getidbyemail")//通过用户邮箱获取用户id
    @ResponseBody
    public BoolBack getIdByEmailPost(String email){
        Integer id = userInformationService.getIdByEmail(email);
        if(id == null) return new BoolBack(false);
        return new BoolBack(true);
    }

    @PostMapping("/getnamebyid")//通过用户邮箱获取用户id
    @ResponseBody
    public FeedBack getNameByIdPost(HttpSession session){
        Integer id = (Integer) session.getAttribute("id");
        String name = userInformationService.getNameById(id);
        return new FeedBack(id, name);
    }

    @PostMapping("/login")//用户登录
    @ResponseBody
    public FeedBack getIdPost(String str,String password,Model model, HttpSession session){
        Object get = session.getAttribute("id");
        if( get != null ) return new FeedBack(94,"用户已登录！");
        Integer id = userInformationService.getId(str, password);
        if(id == null) id=userInformationService.getIdTel(str,password);
        if(id == null) id=userInformationService.getIdEmail(str,password);
        if(id != null) {
            session.setAttribute("id",id);
            return new FeedBack(94,"用户登录成功！");
        }
        else {
            return new FeedBack(92,"用户名或密码错误！");
        }
    }

    @PostMapping("/complete")//用户信息完善
    @ResponseBody
    public FeedBack completeInformationPost(String birthday, String position, String email, HttpSession session){
        Integer id = (Integer) session.getAttribute("id");
        if(id == null) return new FeedBack(92,"用户未登录！");
        userInformationService.completeInformation(id,birthday,position,email);
        return new FeedBack(94,"信息完善成功！");
    }
  /**  @GetMapping("/getatt")
    @ResponseBody
    public String getAtt(HttpSession session){
        Object get = session.getAttribute("id");
        if(get != null) return "欢迎您，id为"+get+"的用户";
        else return "请先登录";
    }

    @GetMapping("/getmsg")
    @ResponseBody
    public String getMsg(HttpSession session){
        Object msg = session.getAttribute("msg");
        return "msg="+msg;
    }
*/

}