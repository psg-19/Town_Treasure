package com.medlink.dto;


import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.IdGeneratorType;

@Getter
@Setter
public class ContactUsDto {

    private String email;
    private String name;
    private String phoneNo;
    private String message;

}
