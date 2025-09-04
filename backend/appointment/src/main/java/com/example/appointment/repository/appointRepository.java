package com.example.appointment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.appointment.entity.Appointment;

@Repository
public interface appointRepository extends JpaRepository<Appointment,Long>{

}
