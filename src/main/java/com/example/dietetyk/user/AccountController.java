package com.example.dietetyk.user;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/account")
public class AccountController {

	private UserService userService;

	@Autowired
	AccountController(UserService userService) {
		this.userService = userService;
	}

	@PostMapping("/register")
	public ResponseEntity<?> save(@RequestBody UserDto user) {
		if (user.getId() != null)
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"The object being saved cannot be overwritten with an existing ID");
		UserDto savedUser = userService.save(user);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/success/{id}").buildAndExpand(savedUser.getId())
				.toUri();
		return ResponseEntity.created(location).body(savedUser);
	}

	@GetMapping("/register/success/{id}")
	public ResponseEntity<UserDto> findById(@PathVariable Long id) {
		return userService.findById(id).map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}
}