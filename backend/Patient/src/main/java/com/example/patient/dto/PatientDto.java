package com.example.patient.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

import com.example.patient.entity.MedicalRecord;
import com.example.patient.enums.Gender;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PatientDto {
    private Long id;
    private String name;
    private String address;
    private String email;
    private Gender gender;   // can be String, or use Gender enum
    private LocalDate dob;
    private Float weight;
    private Float height;
    
    private List< MedicalRecordDto> MedicalRecord;
}
