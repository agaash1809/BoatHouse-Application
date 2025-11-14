package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.book;
import com.example.demo.Services.Bookservice;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/boathouse")
@CrossOrigin(origins="*")
public class BookController {

    @Autowired Bookservice bookservice;

    @PostMapping("/book")
    public String postMethodName(@RequestBody book entity) {
      return  bookservice.booking(entity);
    
       
    }
    
    
}
