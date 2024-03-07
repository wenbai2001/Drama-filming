package com.example.demo.controller;

import com.example.demo.entity.FeedBack;
import com.example.demo.entity.Naire;
import com.example.demo.service.NaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Random;

@RestController
@RequestMapping(value = "/webs")
public class NaireController {


    @Autowired
    private NaireService naireService;


    @GetMapping("/findallnaire")//获取所有的问卷信息
    public List<Naire> getUser(){ return naireService.findAll(); }

    @GetMapping("/getbyid")//通过用户id获取问卷信息
    public List<Naire> getById(Integer uid){ return naireService.getById(uid); }

    @GetMapping("/addnaire")//新增问卷内容
    public FeedBack addUser(Integer a1, Integer a2, Integer a3, Integer a4, Integer a5, Integer a6, Integer a7, Integer a8, Integer a9, String a10, Integer a11, String a12, String a13, String a14, String a15, HttpSession session){
        Integer rand, uid;
        uid = (Integer) session.getAttribute("id");
        Random random = new Random();
        rand = random.nextInt(10);
        Naire naire = new Naire(null, uid, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, rand);
        naireService.addUser(naire);
        return new FeedBack(rand,"歌曲序号");
    }

    @GetMapping("/getsongbyid")//无需前端传递参数通过用户登录状态获取用户相应歌曲序号
    public FeedBack getSongById(HttpSession session){
        Integer uid = (Integer) session.getAttribute("id");
        Integer song = naireService.getSongById(uid);
        return new FeedBack(song,"歌曲序号");
    }

    @PostMapping("/findallnaire")//获取所有的问卷信息
    public List<Naire> getUserPost(){ return naireService.findAll(); }

    @PostMapping("/getbyid")//通过用户id获取问卷信息
    public List<Naire> getByIdPost(HttpSession session){
        Integer uid= (Integer) session.getAttribute("id");
        return naireService.getById(uid);
    }

    @PostMapping("/addnaire")//新增问卷内容
    public FeedBack addUserPost(Integer a1, Integer a2, Integer a3, Integer a4, Integer a5, Integer a6, Integer a7, Integer a8, Integer a9, String a10, Integer a11, String a12, String a13, String a14, String a15, HttpSession session){
        Integer rand, uid;
        uid = (Integer) session.getAttribute("id");
        Random random = new Random();
        rand = random.nextInt(10);
        Naire naire = new Naire(null, uid, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, rand);
        naireService.addUser(naire);
        return new FeedBack(rand,"歌曲序号");
    }

    @PostMapping("/getsongbyid")//无需前端传递参数通过用户登录状态获取用户相应歌曲序号
    public FeedBack getSongByIdPost(HttpSession session){
        Integer uid = (Integer) session.getAttribute("id");
        Integer song = naireService.getSongById(uid);
        return new FeedBack(song,"歌曲序号");
    }

}
