package com.example.patient.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.patient.dto.MedicalRecordDto;
import com.example.patient.dto.PatientDto;
import com.example.patient.entity.MedicalRecord;
import com.example.patient.entity.Patient;
import com.example.patient.enums.Gender;
import com.example.patient.repository.medicalRecordRepo;
import com.example.patient.repository.patientRepository;
@Service
public class patientServiceImpl implements patientServicee{
	@Autowired
	private patientRepository repo;
	@Autowired
	private medicalRecordRepo medicalRepo;

	@Override
	public Patient savePatient(PatientDto patientDto) {
	    Patient newPatient = new Patient();
	    newPatient.setName(patientDto.getName());
	    newPatient.setAddress(patientDto.getAddress());
	    newPatient.setEmail(patientDto.getEmail());

	    
	    newPatient.setGender(patientDto.getGender());

	    newPatient.setDob(patientDto.getDob());
	    newPatient.setWeight(patientDto.getWeight());
	    newPatient.setHeight(patientDto.getHeight());

	    return repo.save(newPatient);
	}
	@Override
    public List<MedicalRecord> getAllMedicalRecords() {
        return medicalRepo.findAll();
    }

    // ✅ Update medical record of a patient
   

    // ✅ Delete patient by ID
    @Override
    public void deletePatient(Long id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException("Patient not found with id " + id);
        }
        repo.deleteById(id);
    }
	@Override
	public Patient updateMedicalRecord(Long id, MedicalRecordDto medicalRecordDto) {
		// TODO Auto-generated method stub
		Patient patient = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Patient not found with id " + id));

        MedicalRecord record = new MedicalRecord();
        record.setId(medicalRecordDto.getId());  // if id is null → new record, else update existing
        record.setDescription(medicalRecordDto.getDescription());
        record.setDoctorName(medicalRecordDto.getDoctorName());
        record.setVisitedDate(medicalRecordDto.getVisitedDate());
        record.setMedicines(medicalRecordDto.getMedicines());
        record.setPatient(patient);

        medicalRepo.save(record);

        return patient;
	}
	@Override
	public List<Patient> getAllPatients() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}
	@Override
	public Patient getPatientById(Long id) {
		// TODO Auto-generated method stub
		return repo.findById(id).orElseThrow();
	}
	@Override
	public MedicalRecord saveMedicalRecord(MedicalRecord medicalRecord) {
		return medicalRepo.save(medicalRecord);
		
	}
	
	
	

}
