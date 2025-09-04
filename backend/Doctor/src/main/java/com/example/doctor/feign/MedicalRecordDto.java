package com.example.doctor.feign;

import java.time.LocalDate;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
