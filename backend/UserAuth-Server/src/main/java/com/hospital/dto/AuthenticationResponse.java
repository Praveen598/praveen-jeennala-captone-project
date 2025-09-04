package com.hospital.dto;


import com.hospital.enums.UserRole;

import lombok.Data;

@Data
public class AuthenticationResponse {
	
	private String jwt;
	private Long userId;
	private UserRole userRole;
	//private String profession; 

}
