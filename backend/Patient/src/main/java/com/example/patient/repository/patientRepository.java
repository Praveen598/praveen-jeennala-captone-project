package com.example.patient.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.patient.entity.Patient;

public interface patientRepository extends JpaRepository<Patient, Long> {

}
