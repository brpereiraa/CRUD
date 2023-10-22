package com.example.backend.models;

public class User {
    private int id;
    private String name;
    private int age;
    private String password;

    private User(){}

    public User(String name, int age, String password)
    {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    public String getName(){
        return (this.name);
    }

    public int getAge()
    {
        return (this.age);
    }

    public String getPassword(){
        return (this.password);
    }
}
