import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8">
            <h5 className="text-lg font-bold mb-4">Get In Touch</h5>
            <p className="mb-2"><i className="fas fa-map-marker-alt me-2"></i>IIIT Lucknow</p>
            <p className="mb-2"><i className="fas fa-phone-alt me-2"></i>(91) 99754-4919</p>
            <p className="mb-2"><i className="fas fa-envelope me-2"></i>iitl@gmail.com</p>
            <div className="flex space-x-4 pt-2">
              <a className="btn-social" href="https://www.instagram.com/ag.eden/"><i className="fab fa-twitter"></i></a>
              <a className="btn-social" href="https://www.instagram.com/ag.eden/"><i className="fab fa-facebook-f"></i></a>
              <a className="btn-social" href="https://www.instagram.com/ag.eden/"><i className="fab fa-youtube"></i></a>
              <a className="btn-social" href="https://www.instagram.com/ag.eden/"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="mb-8">
            <h5 className="text-lg font-bold mb-4">Quick Links</h5>
            <a className="text-white hover:text-green-500" href="">About Us</a><br></br>
            <a className="text-white hover:text-green-500" href="">Contact Us</a><br></br>
            <a className="text-white hover:text-green-500" href="">Our Services</a><br></br>
            <a className="text-white hover:text-green-500" href="">Privacy Policy</a><br></br>
            <a className="text-white hover:text-green-500" href="">Terms & Condition</a><br></br>
          </div>
          <div className="mb-8">
            <h5 className="text-lg font-bold mb-4">Photo Gallery</h5>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index}>
                  <img className="w-full rounded-lg shadow" src={`img/property-${index}.jpg`} alt={`Place ${index}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h5 className="text-lg font-bold mb-4">Advance Booking</h5>
            <p className="mb-4">For Booking Ola</p>
            <div className="relative">
              <input className="form-input bg-transparent w-full py-3 px-4 rounded-lg" type="text" placeholder="E-mail" />
              <button className="btn-primary bg-green-700 absolute top-0 right-0 mt-2 mr-2 py-1 px-4 rounded-lg">Submit</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-6">
          <div className="flex justify-between items-center">
            <div className="text-center md:text-left mb-3 md:mb-0">
              &copy; <a href="#" className="border-b border-gray-400">© 2024 Code</a>, All Right Reserved.
            </div>
            <div className="footer-menu space-x-3">
              <a href="#" className="text-white hover:text-gray-800">Home</a>
              <a href="#" className="text-white hover:text-gray-800">Cookies</a>
              <a href="#" className="text-white hover:text-gray-800">Help</a>
              <a href="#" className="text-white hover:text-gray-800">FAQs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
