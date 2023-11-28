package com.example.backend.models;

import jakarta.persistence.*;

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

    public int getAge()
    {
        return (this.age);
    }

    public String getPassword(){
        return (this.password);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
