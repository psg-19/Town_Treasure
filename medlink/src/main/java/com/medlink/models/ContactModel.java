package com.medlink.models;

import lombok.*;
import jakarta.persistence.*;
import javax.validation.constraints.*;

@Data
@NoArgsConstructor
@Entity
public class ContactModel {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @NotBlank(message = "Email is required")
  @Email(message = "Invalid email format")
  @Column(unique = true, nullable = false, updatable = false)
  private String email;

  @NotBlank(message = "First name is required")
  private String fullName;

  @NotBlank(message = "message is required")
  private String message;

  public ContactModel(String email, String fullName, String message) {
    this.email = email;
    this.fullName = fullName;
    this.message = message;
  }

}
