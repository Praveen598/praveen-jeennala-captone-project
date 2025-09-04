package com.example.patient.service;

import java.util.List;

import com.example.patient.dto.MedicalRecordDto;
import com.example.patient.dto.PatientDto;
import com.example.patient.entity.MedicalRecord;
import com.example.patient.entity.Patient;

public interface patientServicee {

	Patient savePatient(PatientDto patient);

	List<MedicalRecord> getAllMedicalRecords();

	Patient updateMedicalRecord(Long id, MedicalRecordDto medicalRecord);

	void deletePatient(Long id);

	List<Patient> getAllPatients();

	Patient getPatientById(Long id);

	MedicalRecord saveMedicalRecord(MedicalRecord medicalRecord);

	

	

}
