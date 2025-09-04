package com.example.appointment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.appointment.entity.Appointment;
import com.example.appointment.feign.PatientClient;
import com.example.appointment.feign.PatientDto;

import com.example.appointment.service.service;

import java.util.List;

@RestController
@RequestMapping("/appointments")
@CrossOrigin(origins = "http://localhost:4200")
public class AppointmentController {

    @Autowired
    private service appointmentService;
    
   @Autowired
   private PatientClient client;
    
    @GetMapping("/getPatientById/{id}")
    public PatientDto getPatientDetails(@PathVariable Long id) {
    	PatientDto dto=client.getPatientById(id);
    	return dto;
    }

    // ✅ Create appointment
    @PostMapping("/createAppointments/{id}")
    public Appointment createAppointment(@RequestBody Appointment appointment,@PathVariable Long id) {
        return appointmentService.saveAppointment(appointment,id);
    }

    // ✅ Get all appointments
    @GetMapping("/getAllAppointments")
    public List<Appointment> getAllAppointments() {
        return appointmentService.getAllAppointments();
    }

    // ✅ Get appointment by ID
    @GetMapping("/getAppointmentById/{id}")
    public Appointment getAppointmentById(@PathVariable Long id) {
        return appointmentService.getAppointmentById(id);
    }

    // ✅ Update appointment
    @PutMapping("/updateAppointments/{id}")
    public Appointment updateAppointment(@PathVariable Long id, @RequestBody Appointment appointment) {
        return appointmentService.updateAppointment(id, appointment);
    }

    // ✅ Delete appointment
    @DeleteMapping("/deleteAppointments/{id}")
    public String deleteAppointment(@PathVariable Long id) {
        appointmentService.deleteAppointment(id);
        return "Appointment deleted with id " + id;
    }
}
