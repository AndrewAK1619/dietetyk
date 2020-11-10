package com.example.dietetyk.user;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dietetyk.user.role.UserRoleRepository;

@Service
public class UserService {

	private final UserRepository userRepository;
	private final UserRoleRepository userRoleRepository;
	private final UserMapper userMapper;

	@Autowired
	public UserService(UserRepository userRepository, 
			UserRoleRepository userRoleRepository, 
			UserMapper userMapper) {
		this.userRepository = userRepository;
		this.userRoleRepository = userRoleRepository;
		this.userMapper = userMapper;
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
}
