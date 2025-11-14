package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Model.signin;
import com.example.demo.Repository.signrepo;

@Service
public class signservices {

    @Autowired signrepo signrepo;

    public String newuser(signin details)
   {
         signrepo.save(details);
    return "new user added";
   }
   public List<signin> findall()
   {
   return  signrepo.findAll();
   
   }





}
