package com.example.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @GetMapping("/")
    public String test(){
        return "Something";
    }

    @GetMapping("/index")
    public String test1(){
        return "Something else";
    }

}
