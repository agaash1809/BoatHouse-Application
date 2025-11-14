package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.book;

@Repository
public interface Bookrepo extends JpaRepository<book,Integer>{


    
} 