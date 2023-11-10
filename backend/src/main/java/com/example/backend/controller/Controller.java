package com.example.backend.controller;

import java.util.List;

import com.example.backend.models.User;
import com.example.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class Controller {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public String test(){
        return ("Something");
    }

    @CrossOrigin
    @GetMapping("/getUsers")
    public List<User> getAllUsers(){
        return this.userRepository.findAll();
    }

}
