package com.medlink.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medlink.models.PatientInfo;

public interface PatientInfoRepository extends JpaRepository<PatientInfo,Integer> {
    List<PatientInfo> findAllByPatientId(Long patientId);
}
