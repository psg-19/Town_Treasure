package com.medlink.services;



import com.medlink.dto.BookingDto;

import  com.medlink.models.Booking;

import com.medlink.repository.BookingRepository;

import com.medlink.utils.EmailUtil;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service 
public class BookingService {
    @Autowired
    private final BookingRepository bookingRepository;

   
    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }
    @Autowired
    private EmailUtil emailUtil;

    public String sendForm(BookingDto bookingDto) {
        System.out.println(bookingDto);

        try {
            emailUtil.sendEmail3("spamsignin889@gmail.com", "Dear Admin You Have a new user booking",bookingDto.getState(),bookingDto.getCity(),bookingDto.getCheckin(),bookingDto.getCheckout());
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send otp please try again");
        }

       Booking form = new Booking();
        form.setState(bookingDto.getState());
        form.setCity(bookingDto.getCity());
        form.setCheckin(bookingDto.getCheckin());
        form.setCheckout(bookingDto.getCheckout());


        bookingRepository.save(form);
        return "Booking submission successful";
    }
}
