package com.example.appointment.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "patient-service", url = "http://localhost:8080") 
public interface PatientClient{

    @GetMapping("/patient/getById/{id}")
    PatientDto getPatientById(@PathVariable("id") Long id);
}

