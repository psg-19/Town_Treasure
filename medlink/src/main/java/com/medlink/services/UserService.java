package com.medlink.services;

import java.time.*;
import java.util.List;
import java.util.*;
import ch.qos.logback.core.util.Duration;
// import com.example.registerapp.util.EmailUtil;
// import com.medlink.registerapp.util.OtpUtil;
import com.medlink.dto.RegisterDto;
import com.medlink.models.ContactModel;

import org.hibernate.type.descriptor.java.LocalDateJavaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.medlink.repository.ContactRepository;

import com.medlink.models.HospitalModel;
import com.medlink.models.JwtRequest;
import com.medlink.models.LoginRequest;
import com.medlink.models.PatientInfo;
import com.medlink.models.UserModel;
import com.medlink.repository.HospitalRepository;
import com.medlink.repository.PatientInfoRepository;
import com.medlink.repository.UserRepository;
import com.medlink.utils.JwtUtils;
import com.medlink.utils.EmailUtil;
import com.medlink.utils.OtpUtil;

import jakarta.mail.MessagingException;
import java.time.LocalDate;
import java.util.Optional;
import java.time.LocalDateTime;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    HospitalRepository hRepository;

    @Autowired
    private OtpUtil otpUtil;

    @Autowired
    private EmailUtil emailUtil;

    @Autowired
    JwtUtils jwt;

    @Autowired
    PatientInfoRepository pRepository;

    @Autowired
    ContactRepository contactRepository;

    public boolean authenticate(String token, JwtRequest user) {
        return this.jwt.validateToken(token, user);
    }

    public String createToken(JwtRequest user) {
        return this.jwt.generateToken(user);
    }

    public String login(LoginRequest log) throws Exception {
        try {
            UserModel user = userRepository.findByEmail(log.getEmail());
            if (user == null) {
                throw new Exception("User not found");
            }
            // Check if the provided password matches the stored password
            if (!user.getPassword().equals(log.getPassword())) {
                throw new Exception("Wrong password");
            }
            // If the email and password match, create and return a JWT token
            JwtRequest jwtRequest = new JwtRequest(log.getEmail(), user.getId());
            return createToken(jwtRequest);
        } catch (Exception e) {
            // e.printStackTrace();
            throw new Exception("Login failed: " + e.getMessage());
        }
    }

    // public String signUp(UserModel user) throws Exception {
    // try {
    // if (userRepository.findByEmail(user.getEmail()) != null) {
    // throw new Exception("User Already Exists");
    // }
    // UserModel s = userRepository.save(user);
    // JwtRequest u = new JwtRequest(s.getEmail(), s.getId());
    // return createToken(u);
    // } catch (Exception e) {
    // throw new Exception("Error SigningUp: " + e.getMessage());
    // }
    // }

    public String register(UserModel user) throws Exception {
        UserModel check= userRepository.findByEmail(user.getEmail());
        if(check!=null){
            throw new Exception("User Already Exists");
        }
        String otp = otpUtil.generateOtp();
        try {
            emailUtil.sendOtpEmail(user.getEmail(), otp);
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send otp please try again");
        }
        user.setOtp(otp);
        user.setActive(false);
        user.setOtpGeneratedTime(LocalDateTime.now());
        userRepository.save(user);
        return "User registration successful";
    }

    public String verifyAccount(String email, String otp) throws Exception {

        UserModel user = userRepository.findByEmail(email);
        if (user == null) {
            throw new RuntimeException("User not found with this email: " + email);
        }
        try {
            if (user.getOtp().equals(otp) && user.getOtpGeneratedTime().plusMinutes(5).isAfter(LocalDateTime.now())) {
                user.setActive(true);
                UserModel s = userRepository.save(user);
                JwtRequest jwtRequest= new JwtRequest(s.getEmail(), s.getId());
                String JWTTOKEN=jwt.generateToken(jwtRequest);
                return JWTTOKEN;
            }
        } catch (Exception e) {
            throw new Exception("Error SigningUp: " + e.getMessage());
        }
        
        return null;
        // return "Please regenerate otp and try again";
    }

    public String regenerateOtp(String email) {
        UserModel user = userRepository.findByEmail(email);

        if (user == null) {
            throw new RuntimeException("User not found with this email: " + email);
        }
        String otp = otpUtil.generateOtp();
        try {
            emailUtil.sendOtpEmail(email, otp);
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send otp please try again");
        }
        user.setOtp(otp);
        user.setOtpGeneratedTime(LocalDateTime.now());
        userRepository.save(user);
        return "Email sent... please verify account within 1 minute";
    }

    public List<HospitalModel> getHospitals(String location) throws Exception {
        try {
            return hRepository.findAllByLocation(location);
        } catch (Exception e) {
            throw new Exception("Error finding hospitals in the given location");
        }
    }

    public List<HospitalModel> postHospitals(List<HospitalModel> l) throws Exception {
        try {
            return hRepository.saveAll(l);
        } catch (Exception e) {
            throw new Exception("Error saving the hospitals");
        }
    }

    public PatientInfo postPatientInfo(PatientInfo p) {
        return this.pRepository.save(p);
    }

    public List<PatientInfo> getPatientInfo(long id) {
        return this.pRepository.findAllByPatientId(id);
    }

    public ContactModel getContact(ContactModel contact) throws Exception {
        try {
            return contactRepository.save(contact);
        } catch (Exception e) {
            throw new Exception("Error saving contact: " + e.getMessage());
        }
    }
}
