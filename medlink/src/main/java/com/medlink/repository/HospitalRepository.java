package com.medlink.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medlink.models.HospitalModel;
@Repository
public interface HospitalRepository  extends JpaRepository<HospitalModel,Integer>{

    List<HospitalModel> findAllByLocation(String location);
    
}
