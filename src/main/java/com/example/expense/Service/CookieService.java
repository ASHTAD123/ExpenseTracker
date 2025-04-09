package com.example.expense.Service;

import org.springframework.stereotype.Service;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

@Service
public class CookieService {

	public String getCookie(HttpServletRequest request) {

		Cookie[] cookies = request.getCookies();
		String value="";
		
		if (cookies != null) {
			for (Cookie cookie : cookies) {
				 value = cookie.getValue();
			}
		}
		return value;
	}
}
