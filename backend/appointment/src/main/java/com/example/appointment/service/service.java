package com.example.appointment.service;

import java.util.List;

import com.example.appointment.entity.Appointment;
import com.example.appointment.feign.PatientDto;

public interface service {

	

	List<Appointment> getAllAppointments();

	Appointment saveAppointment(Appointment appointment,Long id);

	Appointment getAppointmentById(Long id);

	Appointment updateAppointment(Long id, Appointment appointment);

	void deleteAppointment(Long id);

	
	
}
