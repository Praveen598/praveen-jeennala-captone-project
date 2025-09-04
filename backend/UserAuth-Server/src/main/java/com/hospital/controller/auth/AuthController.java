package com.hospital.controller.auth;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.dto.AuthenticationRequest;
import com.hospital.dto.AuthenticationResponse;
import com.hospital.dto.SignupRequest;
import com.hospital.dto.UserDto;
import com.hospital.entities.User;
import com.hospital.repositories.UserRepository;
import com.hospital.services.auth.AuthService;
import com.hospital.services.jwt.UserService;
import com.hospital.utils.JwtUtil;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")

public class AuthController {

	private final AuthService authService;
	
	private final UserRepository userRepository;
	
	private final JwtUtil jwtUtil;
	private final UserService userService;
	
	private final AuthenticationManager authenticationManager;
		

	
	
	@PostMapping("/signup")
	public ResponseEntity<?> signupUser(@Valid @RequestBody SignupRequest signupRequest)
	{
	
		if(authService.hasUserWithEmail(signupRequest.getEmail()))
		{
			
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("user already exist with this email");
		}
		UserDto createdUserDto=authService.signupUser(signupRequest);
		if(createdUserDto==null)
		{
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not created");
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(createdUserDto);
	}
	
	
	@PostMapping("/login")
    public AuthenticationResponse login(@RequestBody AuthenticationRequest authenticationRequest) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                authenticationRequest.getEmail(), authenticationRequest.getPassword()));
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Incorrect password or email!");
        }
 
        Optional<User> optionalUser = userRepository.findFirstByEmail(authenticationRequest.getEmail());
        
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            
            // Create claims with role information
            Map<String, Object> claims = new HashMap<>();
            claims.put("role", user.getUserRole().name());
            claims.put("userRole", user.getUserRole().name());
            
            // Generate token with claims
            final UserDetails userDetails = userService.userDetailsService().loadUserByUsername(authenticationRequest.getEmail());
            final String jwtToken = jwtUtil.generateToken(userDetails);
            
            AuthenticationResponse authenticationResponse = new AuthenticationResponse();
            authenticationResponse.setJwt(jwtToken);
            authenticationResponse.setUserId(user.getId());
            authenticationResponse.setUserRole(user.getUserRole());
            
            return authenticationResponse;
        }
        
        throw new BadCredentialsException("User not found");
    }

	

	
	

	
}
