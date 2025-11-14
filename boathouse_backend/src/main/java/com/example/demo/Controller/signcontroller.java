package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.signin;
import com.example.demo.Services.signservices;

@RestController
@RequestMapping("boathouse")
@CrossOrigin(origins = "*")
public class signcontroller {

    @Autowired signservices signservices;

    @PostMapping("/adduser")
    public String adduser(@RequestBody signin details)
    {
        return signservices.newuser(details);

    }

   @GetMapping("/get")
   public List<signin> getuser()
   {

        return  signservices.findall();
   }
   


    
}
