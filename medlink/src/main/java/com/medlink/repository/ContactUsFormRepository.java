package com.medlink.repository;



import com.medlink.models.ContactUsForm;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactUsFormRepository extends JpaRepository<ContactUsForm,Integer> {

    Optional<ContactUsForm> findByEmail(String email);
}
