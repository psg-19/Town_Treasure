package com.medlink.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medlink.models.ContactModel;


@Repository
public interface ContactRepository extends JpaRepository<ContactModel,Integer> {

}
