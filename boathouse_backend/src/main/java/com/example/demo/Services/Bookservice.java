package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.book;
import com.example.demo.Repository.Bookrepo;

@Service
public class Bookservice {
    

    @Autowired Bookrepo bookrepo;

    public String booking(book details)
    {
        bookrepo.save(details);
        return "booking...";
    }
}
