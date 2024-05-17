package com.medlink.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medlink.models.UserModel;
@Repository
public interface UserRepository extends JpaRepository<UserModel,Integer>{
    UserModel findByEmail(String string);
    
}
