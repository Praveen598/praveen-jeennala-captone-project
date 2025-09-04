package com.example.appointment.entity;



import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "appointments")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    
    private Long  patientid;
    private String patientName;
    private String email;
    private String description;
   
   

    private LocalDateTime appointmentDateTime;

    
    private Boolean AcceptStatus;
}

