package com.example.demo.Model;

import java.sql.Date;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookid;
    private String Name;
    private int NumOfPeople;
    private LocalTime time;
    private Date Date;
    private int totalhrs;
    public int getBookid() {
        return bookid;
    }
    public void setBookid(int bookid) {
        this.bookid = bookid;
    }
    public String getName() {
        return Name;
    }
    public void setName(String name) {
        Name = name;
    }
    public int getNumOfPeople() {
        return NumOfPeople;
    }
    public void setNumOfPeople(int numOfPeople) {
        NumOfPeople = numOfPeople;
    }
    public LocalTime getTime() {
        return time;
    }
    public void setTime(LocalTime time) {
        this.time = time;
    }
    public Date getDate() {
        return Date;
    }
    public void setDate(Date date) {
        Date = date;
    }
    public int getTotalhrs() {
        return totalhrs;
    }
    public void setTotalhrs(int totalhrs) {
        this.totalhrs = totalhrs;
    }


    
    
    
}
