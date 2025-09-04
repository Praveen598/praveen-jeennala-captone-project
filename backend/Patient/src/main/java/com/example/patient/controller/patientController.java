package com.example.patient.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.patient.dto.MedicalRecordDto;
import com.example.patient.dto.PatientDto;
import com.example.patient.entity.MedicalRecord;
import com.example.patient.entity.Patient;
import com.example.patient.service.patientServicee;

@RestController
@RequestMapping("/patient")
@CrossOrigin(origins = "http://localhost:4200")
public class patientController {
	@Autowired
	private patientServicee service;
	@PostMapping("/addPatient")
	private Patient addPatient(@RequestBody PatientDto patient) {
		return service.savePatient(patient);
	}
	@PostMapping("/addMedicalRecord")
	private MedicalRecord addRecord(@RequestBody MedicalRecord medicalRecord) {
		return service.saveMedicalRecord(medicalRecord);
	}
	
	 // ✅ Get all medical records
    @GetMapping("/medicalrecords")
    public List<MedicalRecord> getAllMedicalRecords() {
        return service.getAllMedicalRecords();
    }

    // ✅ Update medical record of a patient
    @PutMapping("/update/{id}")
    public Patient updateMedicalRecord(@PathVariable Long id, @RequestBody MedicalRecordDto medicalRecord) {
        return service.updateMedicalRecord(id, medicalRecord);
    }

    // ✅ Delete a patient
    @DeleteMapping("/delete/{id}")
    public String deletePatient(@PathVariable Long id) {
        service.deletePatient(id);
        return "Patient with ID " + id + " deleted successfully.";
    }
    @GetMapping("/getAllPatients")
    public List<Patient> getAllPatients(){
    	return service.getAllPatients();
    }
    @GetMapping("/getById/{id}")
    public Patient getPatientById(@PathVariable Long id) {
        return service.getPatientById(id);
    }

   
   

}
