package com.example.dietetyk.user;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

	private final ModelMapper mapper;

	@Autowired
	public UserMapper(ModelMapper mapper) {
		this.mapper = mapper;
	}

	User userDtoToUser(UserDto userDto) {
		return mapper.map(userDto, User.class);
	};

	UserDto userToUserDto(User user) {
		return mapper.map(user, UserDto.class);
	};
}
