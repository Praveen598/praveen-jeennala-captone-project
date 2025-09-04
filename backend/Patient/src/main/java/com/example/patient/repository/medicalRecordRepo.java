package com.example.patient.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.patient.entity.MedicalRecord;

public interface medicalRecordRepo extends JpaRepository<MedicalRecord, Long> {

	

}
