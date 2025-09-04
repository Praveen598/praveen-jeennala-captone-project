package com.example.doctor.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.doctor.entity.Doctor;
import com.example.doctor.feign.MedicalRecordDto;
import com.example.doctor.feign.PatientDto;
import com.example.doctor.feign.PatientFeignClient;
import com.example.doctor.repo.doctorRepo;


@Service
public class serviceImpl implements service {
	@Autowired
	private doctorRepo repo;

	 @Override
	    public Doctor saveDoctor(Doctor doctor) {
	        return repo.save(doctor);   // saves new or updates existing doctor
	    }

	    @Override
	    public List<Doctor> getAllDoctors() {
	        return repo.findAll();     // fetch all doctors
	    }

	    @Override
	    public Doctor getDoctorById(Long id) {
	        return repo.findById(id)
	                .orElseThrow(() -> new RuntimeException("Doctor not found with id " + id));
	    }

	    @Override
	    public Doctor updateDoctor(Long id, Doctor doctor) {
	        Doctor existing = repo.findById(id)
	                .orElseThrow(() -> new RuntimeException("Doctor not found with id " + id));

	        // Update only allowed fields
	        existing.setName(doctor.getName());
	        existing.setSpecialization(doctor.getSpecialization());
	        existing.setEmail(doctor.getEmail());
	        existing.setPhone(doctor.getPhone());
	       

	        return repo.save(existing);
	    }

	    @Override
	    public void deleteDoctor(Long id) {
	        if (!repo.existsById(id)) {
	            throw new RuntimeException("Doctor not found with id " + id);
	        }
	        repo.deleteById(id);
	    }
	    @Autowired
	    private  PatientFeignClient patientFeignClient;

	   

	    public PatientDto fetchPatient(Long id) {
	        return patientFeignClient.getPatientById(id);
	    }

	    public MedicalRecordDto saveRecord(MedicalRecordDto record) {
	        return patientFeignClient.saveMedicalRecord(record);
	    }

		@Override
		public PatientDto getpatientById(Long id) {
			// TODO Auto-generated method stub
			 return patientFeignClient.getPatientById(id);
		}
	
	
	

}
