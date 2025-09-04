package com.example.doctor.service;

import java.util.List;

import com.example.doctor.entity.Doctor;
import com.example.doctor.feign.PatientDto;

public interface service  {

	Doctor saveDoctor(Doctor doctor);

	List<Doctor> getAllDoctors();

	Doctor getDoctorById(Long id);

	Doctor updateDoctor(Long id, Doctor doctor);

	void deleteDoctor(Long id);

	PatientDto getpatientById(Long id);



}
