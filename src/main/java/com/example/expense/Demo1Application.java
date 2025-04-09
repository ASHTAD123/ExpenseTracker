package com.example.expense;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EntityScan(basePackages = "com.example.expense.Entities")
public class Demo1Application {
	


	public static void main(String[] args) {

			 SpringApplication.run(Demo1Application.class, args);

	}


}