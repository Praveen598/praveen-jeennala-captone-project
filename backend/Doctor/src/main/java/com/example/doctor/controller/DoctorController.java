package com.example.doctor.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.doctor.entity.Doctor;
import com.example.doctor.feign.PatientDto;
import com.example.doctor.service.service;

import java.util.List;

@RestController
public class DoctorController {

    @Autowired
    private service doctorService;

    // ✅ Create doctor
    @PostMapping("/addDoctors")
    public Doctor createDoctor(@RequestBody Doctor doctor) {
        return doctorService.saveDoctor(doctor);
    }

    // ✅ Get all doctors
    @GetMapping("/getAllDoctors")
    public List<Doctor> getAllDoctors() {
        return doctorService.getAllDoctors();
    }

    // ✅ Get doctor by id
    @GetMapping("/getDoctorsById/{id}")
    public Doctor getDoctorById(@PathVariable Long id) {
        return doctorService.getDoctorById(id);
    }

    // ✅ Update doctor
    @PutMapping("/updateDoctors/{id}")
    public Doctor updateDoctor(@PathVariable Long id, @RequestBody Doctor doctor) {
        return doctorService.updateDoctor(id, doctor);
    }

    // ✅ Delete doctor
    @DeleteMapping("/DeleteDoctors/{id}")
    public String deleteDoctor(@PathVariable Long id) {
        doctorService.deleteDoctor(id);
        return "Doctor deleted with id " + id;
    }
    
    @GetMapping("/getpatientById/{id}")
    public PatientDto getpatientById(@PathVariable Long id) {
        return doctorService.getpatientById(id);
    }

    // ✅ Get all doctors
    @GetMapping("/getAllmedicalRecords")
    public List<Doctor> getAllmedicalRecords() {
        return doctorService.getAllDoctors();
    }
}

