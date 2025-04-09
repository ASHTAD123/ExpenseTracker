	package com.example.expense;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import jakarta.annotation.PostConstruct;


@ComponentScan
@SpringBootApplication
public class Demo1Application {
	
	@Value("${spring.datasource.url}")
	    private String dbUrl;

	public static void main(String[] args) {
		
		try{
			   System.out.println(">>> Starting ExpenseTracker Application...");
			   
			 SpringApplication.run(Demo1Application.class, args);
		}catch (Exception e) {
	        System.err.println(">>> Application failed to start: " + e.getMessage());
	        e.printStackTrace();
	    }
		
	}

    @PostConstruct
    public void printDbUrl() {
        System.out.println(">>> Final JDBC URL = " + dbUrl);
    }
}