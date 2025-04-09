package com.example.expense.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthCheckController {
    @GetMapping("/login")
    public String index() {
        return "✅ ExpenseTracker backend is up!";
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }
}
