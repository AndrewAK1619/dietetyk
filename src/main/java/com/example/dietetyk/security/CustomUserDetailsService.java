package com.example.dietetyk.security;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.dietetyk.user.User;
import com.example.dietetyk.user.UserRepository;
import com.example.dietetyk.user.role.UserRole;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	private UserRepository userRepository;

	@Autowired
	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String emailUser) throws UsernameNotFoundException {
		Optional<User> userOpt = userRepository.findByEmail(emailUser);
		User user = null;

		if (userOpt.isPresent())
			user = userOpt.get();

		if (user == null)
			throw new ResponseStatusException(HttpStatus.NOT_FOUND,
					"Incorrect email or password");
		org.springframework.security.core.userdetails.User 
				userDetails = new org.springframework.security.core.userdetails.User(
						user.getEmail(), 
						user.getPassword(),
						convertAuthorities(user.getRoles()));
		return userDetails;
	}

	private Set<GrantedAuthority> convertAuthorities(Set<UserRole> userRoles) {
		Set<GrantedAuthority> authorities = new HashSet<>();
		for (UserRole ur : userRoles) {
			authorities.add(new SimpleGrantedAuthority(ur.getRole()));
		}
		return authorities;
	}
}