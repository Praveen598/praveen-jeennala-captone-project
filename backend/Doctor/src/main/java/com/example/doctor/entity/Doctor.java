package com.example.doctor.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Doctor {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto-increment id
	    private Long id;

	    private String name;
	    private String specialization;
	    private String email;
	    private String phone;

}
