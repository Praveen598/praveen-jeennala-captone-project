package com.example.billing.entity;





import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "billing")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Billing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long patientId;   // reference to Patient (not a relation since you asked simple)

    private Double price = 2500.0;  // default price
}

