package com.example.demo.entity;

public class FeedBack {
    int pageid;
    String message;

    public FeedBack(int pageid, String message) {
        this.pageid = pageid;
        this.message = message;
    }

    public int getPageid() {
        return pageid;
    }

    public void setPageid(int pageid) {
        this.pageid = pageid;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
