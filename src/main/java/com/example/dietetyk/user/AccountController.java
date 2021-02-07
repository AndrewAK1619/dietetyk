package com.example.dietetyk.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin/account")
public class AccountController {

	private UserService userService;

	@Autowired
	AccountController(UserService userService) {
		this.userService = userService;
	}
}
