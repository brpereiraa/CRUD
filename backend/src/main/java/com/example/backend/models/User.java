package com.example.backend.models;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.Id;

@Entity
@Table(name="Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name="Name")
    private String name;

    @Column(name="Age")
    private int age;

    @Column(name="Password")
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
