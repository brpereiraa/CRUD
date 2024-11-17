package com.example.backend.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.Id;

@Entity
@Table(name="Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="Id")
    private int id;
    @Column(name="Name")
    private String name;

    @Column(name="Age")
    private int age;

    @Column(name="Password")
    private String password;

    private User(){}

    public User(int id, String name, int age, String password)
    {
        this.id = id;
        this.name = name;
        this.age = age;
        this.password = password;
    }

    public String getName(){
        return (this.name);
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge()
    {
        return (this.age);
    }

    public void setAge(int age)
    {
        this.age = age;
    }

    public String getPassword(){
        return (this.password);
    }

    public void setPassword(String password){
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
