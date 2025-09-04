package com.example.doctor.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
@FeignClient(name = "patient-service", url = "http://localhost:8080") 
public interface PatientFeignClient {

    @GetMapping("/patient/getById/{id}")
    PatientDto getPatientById(@PathVariable("id") Long id);

    @PostMapping("/addMedicalRecord")
    MedicalRecordDto saveMedicalRecord(@RequestBody MedicalRecordDto medicalRecord);
}


