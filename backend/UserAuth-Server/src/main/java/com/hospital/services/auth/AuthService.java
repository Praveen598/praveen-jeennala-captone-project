package com.hospital.services.auth;

import com.hospital.dto.SignupRequest;
import com.hospital.dto.UserDto;

public interface AuthService 
{

	UserDto signupUser(SignupRequest signupRequest);
	boolean hasUserWithEmail(String email);
}
