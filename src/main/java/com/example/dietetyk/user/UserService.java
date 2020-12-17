package com.example.dietetyk.user;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.dietetyk.user.role.UserRole;
import com.example.dietetyk.user.role.UserRoleRepository;

@Service
public class UserService {

	private static final String DEFAULT_ROLE = "ROLE_USER";

	private final UserRepository userRepository;
	private final UserRoleRepository roleRepository;
	private final UserMapper userMapper;
	private PasswordEncoder passwordEncoder;

	@Autowired
	public UserService(UserRepository userRepository, 
			UserRoleRepository roleRepository, 
			UserMapper userMapper,
			PasswordEncoder passwordEncoder) {
		this.userRepository = userRepository;
		this.roleRepository = roleRepository;
		this.userMapper = userMapper;
		this.passwordEncoder = passwordEncoder;
	}

	List<UserDto> findAll() {
		return userRepository.findAllByOrderByIdAsc()
				.stream()
				.map(userMapper::userToUserDto)
				.collect(Collectors.toList());
	}

	Optional<UserDto> findById(Long id) {
		return userRepository
				.findById(id)
				.map(userMapper::userToUserDto);
	}

	UserDto save(UserDto user) {
		Optional<User> userByEmail = userRepository.findByEmail(user.getEmail());
		userByEmail.ifPresent(u -> {
			throw new ResponseStatusException(HttpStatus.CONFLICT,
					"Saving object can't have setted id");
		});
		String unmodifiableMsg = "You cannot change this user's";
		isUnmodifiableUser(user.getEmail(), unmodifiableMsg);
		return mapAndSaveUser(user, true);
	}

	private UserDto mapAndSaveUser(UserDto user, boolean isUserNotExist) {
		User userEntity = userMapper.userDtoToUser(user);
		if (isUserNotExist) {
			addWithDefaultRole(userEntity);
		} else {
			Optional<User> userById = userRepository.findById(user.getId());
			userById.ifPresent(u -> {
				userEntity.setRoles(u.getRoles());
			});
		}
		User savedUser = userRepository.save(userEntity);
		return userMapper.userToUserDto(savedUser);
	}

	private void addWithDefaultRole(User user) {
		UserRole defaultRole = roleRepository.findByRole(DEFAULT_ROLE);
		user.getRoles().add(defaultRole);
		String passwordHash = passwordEncoder.encode(user.getPassword());
		user.setPassword(passwordHash);
	}

	private void isUnmodifiableUser(String email, String unmodifiableMsg) {
		if (email.equals("admin@example.com") || email.equals("user@example.com")) {
			throw new ResponseStatusException(HttpStatus.LOCKED, unmodifiableMsg
					+ " ('admin@example.com' and 'user@example.com'"
					+ " modifications or delete are not possible)");
		}
	}
}
