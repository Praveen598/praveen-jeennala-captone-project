package com.example.patient.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MedicalRecordDto {
    private Long id;
    private String description;
    private String doctorName;
    private LocalDate visitedDate;
    private String medicines;
    private Long patientId;   // only keep patient id reference
}

