package com.example.backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.models.User;
import com.example.backend.repository.UserRepository;

import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class Controller {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/getUsers/{id}")
    public ResponseEntity<User> getUser(@PathVariable long id) {
        User user = this.userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return ResponseEntity.ok(user);
    }

    @GetMapping("/getUsers")
    public List<User> getAllUsers()
    {
        return this.userRepository.findAll();
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user)
    {
        return userRepository.save(user);
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable long id)
    {
        User user = this.userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        this.userRepository.delete(user);
        Map<String, Boolean> res = new HashMap<>();
        res.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(res);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<Map<String, Boolean>> updateUser(@PathVariable long id, @RequestBody User updateUser)
    {
        User user = this.userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        user.setName(updateUser.getName());
        user.setAge(updateUser.getAge());
        this.userRepository.save(user);
        Map<String, Boolean> res = new HashMap<>();
        res.put("updated", Boolean.TRUE);
        return ResponseEntity.ok(res);
    }
}