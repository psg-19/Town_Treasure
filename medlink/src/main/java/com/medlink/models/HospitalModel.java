package com.medlink.models;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import javax.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@Data
@NoArgsConstructor
public class HospitalModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long id; 

    @NotBlank(message = "Name is required")
    @Column(nullable = false)
    private String name;

    @NotBlank(message = "Address is required")
    @Column(nullable = false)
    private String address;

    @NotBlank(message = "Location is required")
    @Column(nullable = false)
    private String location;

    @NotBlank(message = "Contact info is required")
    @Column(nullable = false)
    private String contactInfo;

    @NotBlank(message = "Beds info is required")
    @Column(nullable = false)
    private Integer beds;
}
