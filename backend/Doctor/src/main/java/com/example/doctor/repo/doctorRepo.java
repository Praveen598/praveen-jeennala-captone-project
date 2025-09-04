package com.example.doctor.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.doctor.entity.Doctor;

public interface doctorRepo extends JpaRepository<Doctor,Long> {

}
