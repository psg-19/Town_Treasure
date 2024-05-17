package com.medlink.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.medlink.dto.BookingDto;
import com.medlink.dto.ContactUsDto;
import com.medlink.models.CityLandmarks;
import com.medlink.models.ContactModel;
import com.medlink.models.ErrorResponse;
import com.medlink.models.HospitalModel;
import com.medlink.models.Landmark;
import com.medlink.models.LoginRequest;
import com.medlink.models.LoginResponse;
import com.medlink.models.PatientInfo;
import com.medlink.models.UserModel;
import com.medlink.services.BookingService;
import com.medlink.services.ContactUsService;
import com.medlink.services.UserService;

import io.jsonwebtoken.lang.Arrays;

import java.util.*;

import org.hibernate.mapping.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {
    @Autowired
    private UserService uService;
    private LoginResponse responseObject;

    @Autowired
    private ContactUsService contactUsService;
    @Autowired
    private BookingService bookingService;

    // Login endpoint
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest user) {
        try {
            responseObject = new LoginResponse(uService.login(user), 200);
            return ResponseEntity.ok().body(responseObject);
        } catch (Exception e) {
            ErrorResponse errorResponse = new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Login failed. Please check your credentials and try again.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserModel user) {
        try {
            String response = uService.register(user);
            ErrorResponse successResponse = new ErrorResponse(200, response);
            return ResponseEntity.ok().body(successResponse);
        } catch (Exception ex) {
            String response = ex.getMessage();
            ErrorResponse errorResponse = new ErrorResponse(500, "Registration failed. Please try again later.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @PutMapping("/verify-account")
    public ResponseEntity<?> verifyAccount(@RequestParam String email,
                                           @RequestParam String otp) {
        try {
            String token = uService.verifyAccount(email, otp);
            if (token == null) {
                throw new Exception("Incorrect OTP. Please try again.");
            }
            LoginResponse responseModel = new LoginResponse(token, 200);
            return ResponseEntity.ok().body(responseModel);
        } catch (Exception ex) {
            String response = ex.getMessage();
            ErrorResponse errorResponse = new ErrorResponse(500, response);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    // Get hospitals by location endpoint
  @GetMapping("/getAboutUsData")
  public ArrayList<String> getAboutUsData() {
    ArrayList<String> response = new ArrayList<>();
    response.add("\"Town Treasure: Your Gateway to Passionate Travel Experiences\"");
    response.add("Town Treasure is your premier destination for travelers seeking comprehensive information about any destination they desire to explore. Our platform specializes in offering detailed insights into the best dining, shopping, and entertainment options available in various towns and cities worldwide. Whether you're embarking on a solo adventure, traveling with family, or exploring with friends, Town Treasure equips you with the knowledge to make the most of your journey. From hidden culinary gems to iconic landmarks, we curate a wealth of information to ensure your travel experience is enriching and memorable. Trust Town Treasure to be your reliable companion as you navigate through the treasures of towns and cities around the globe!");
    response.add("At Town Treasure, our mission is to be the beacon for travelers, illuminating their path with comprehensive information about destinations worldwide. We're dedicated to democratizing travel knowledge on a grand scale, ensuring every adventurer has access to the insights they need. Just as BigBasket's guarantees stretch your dollar, our mission stretches your journey, providing invaluable guidance for every step. Whether it's uncovering hidden gems or navigating popular landmarks, Town Treasure is your trusted companion. Our commitment mirrors BigBasket's dedication to value, ensuring every traveler maximizes their experiences, enriched by the wealth of information we provide. Together, we redefine exploration, making every adventure unforgettable.\n" +
            "\n" +
            "User At Town Treasure, we're dedicated to enriching and supporting the communities we serve. From sponsoring local events to organizing clean-up initiatives, our commitment extends beyond travel. With our platform, we aim to connect travelers with meaningful ways to give back and engage with the places they visit, fostering a spirit of unity and cooperation");
    response.add("We offer great training and support, accommodating and flexible work schedules, and endless growth opportunities.");
    response.add("You'll get to work in an inclusive environment and make a difference in the community we serve.");
    response.add("Full fledges media support in terms of marketing, promotions and the publications.");

      return response;
  }

  @GetMapping("/getHomeData")
  public ArrayList<String> getHomeData() {
    ArrayList<String> response = new ArrayList<>();
    response.add("Plan Your Trip With" );
   response.add( "Town Treasures");
    response.add("Join our platform and embark your journey in town travelling.Exploring is a conversation with the planet, a kaleidoscope of cultures and landscapes that broaden your understanding of the human story.");
    response.add("A town treasurer is like a juggler, constantly keeping the balls of revenue, expenses, and debt in the air. The town treasury is not a bottomless pit, but a well that needs to be replenished with care. Embark on a journey through time and explore cities like never before. Discover hidden gems, historical landmarks, and quaint local vendors. Navigate the intricate routes of the city with our detailed maps. Find the perfect place to stay, from charming bed-and-breakfasts to luxurious hotels. Need a ride? Our taxi price comparison ensures you travel smart.");
    response.add("Discover city routes");
    response.add("Explore your city stress-free with our concise 50-word route guide. Navigate seamlessly through attractions, dining spots, and landmarks. Discover hidden gems effortlessly. Enjoy a hassle-free journey with our city route, tailored for your convenience. Let us guide you to the best spots with ease and confidence.");
    return response;
  }

  

  private final List<CityLandmarks> data = java.util.Arrays.asList(
        new CityLandmarks("Lucknow", java.util.Arrays.asList(
            new Landmark(1, "Phoenix_Palassio", "https://img.staticmb.com/mbcontent/images/crop/uploads/2022/10/phoenix-palassio-lucknow_0_1200.jpg", "Phoenix Palassio is an eclectic blend of classic architecture with European and Awadhi influence."),
            new Landmark(2, "Hanumant_Dham", "https://images.herzindagi.info/image/2023/Aug/know-about-400-year-old-hanumant-dham-temple-of-lucknow.jpg", "Hanumat Dham on Devraha Ghat along the Gomti in Lucknow, where a 108-foot-tall Hanuman idol is proposed, has become a new centre of attraction for youngsters as well as the elderly in the city ahead of the New Year."),
            new Landmark(3, "Lulu_Mall", "https://img.onmanorama.com/content/dam/mm/en/news/india/images/2022/7/11/lulu-lucknow.jpg", "LuLu Mall, Lucknow is a shopping mall located in Lucknow, Uttar Pradesh. Spanning 45.9 acres (18.6 ha), it is one of the largest malls in India with a total built up area of 19 lakh square feet."),
            new Landmark(4, "Isckon_Temple", "https://content.jdmagicbox.com/comp/lucknow/r3/0522px522.x522.110701112712.m2r3/catalogue/iskon-temple-sushant-golf-city-lucknow-temples-kdezkb5fix.jpg", "ISKCON Temple in Lucknow, offers spiritual and cultural preaching to enhance the social living in Spiritual temple at Lucknow"),
            new Landmark(5, "Jama_Masjid", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/6f/05/a4/photo1jpg.jpg?w=1200&h=-1&s=1", "The history of this renowned mosque is quite interesting. In the year 1839, Nawab Mohammad Ali Shah laid the foundation of Jama Masjid in Lucknow as an intention to surpass Jama Masjid of Delhi."),
            new Landmark(6, "Clock_Tower", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/08/16/eb/the-clock-tower.jpg?w=1200&h=1200&s=1", "It was built by Nawab Nasirudin Haider, and today its a sight of tourist attraction in Lucknow. The Husainabad Clock Tower is a landmark in Lucknow. It is 221ft tall and imposing monument built of gunmetal"),
            new Landmark(7, "imambara", "https://static.toiimg.com/photo/38469547.cms", "This large structure was built by Nawab Asaf-ud-Daula in 1784 and is one of the architectural wonders of that era. Its central hall is said to be the largest vaulted chamber in the world"),
            new Landmark(8, "ambedkar_park", "https://static.toiimg.com/photo/38469547.cms", "Sprawling across an area of 107 acres in Gomti Nagar, the Ambedkar Memorial Park was built to commemorate the dedication of reformers like Dr BR Ambedkar, Jyotiba Phule and many others, towards equality, humanity and justice."),
            new Landmark(9, "hazratganj", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyZBhzPnpmpljH3U_DpK0vQyB4EYQ-LkbUubx_oWw90Q&s", "Hazratganj, officially known as Atal Chowk, is the downtown and main shopping hub of Lucknow, the capital and largest city of the Indian state of Uttar Pradesh.")
        )),
        new CityLandmarks("Kanpur", java.util.Arrays.asList(
            new Landmark(1, "ISKCON_Kanpur_Sri_Sri_Radha_Madhav_Temple", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/ed/01/90/iskcon-kanpur.jpg?w=1200&h=-1&s=1", "ISKCON Kanpur's Sri Sri Radha Madhav Temple is located in Mainavati Marg, at Bithoor, 4 km away from Kanpur. The Temple being constructed on a twelve acre plot on the Bithoor road is near the River Ganges."),
            new Landmark(2, "Moti_Jheel", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/ac/30/ba/park.jpg?w=1200&h=-1&s=1", "Built during the British rule, Moti Jheel was a water reservoir for the city. Fast forward to today and you find a holistic wellness center park for free."),
            new Landmark(3, "Allen_Forest_Zoo", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/7f/60/67/allen-forest-zoo.jpg?w=1200&h=-1&s=1", "This zoo is located in Nawabganj, Kanpur. Here you will find different types of animals and birds. You can round the whole zoo by train."),
            new Landmark(4, "Blue_World_Theme_Park", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/67/15/ee/blue-world-theme-park.jpg?w=1200&h=-1&s=1", "Blue World, one of the biggest theme park, established by 'Blue World Corporation Pvt. Ltd.', is located at Mandhana Blue World accompanies exceptionally structured and well planned, aesthetically illuminated restaurants, slides many more attractions."),
            new Landmark(5, "Z_Square_Mall", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/e6/9e/92/z-square-mall.jpg?w=1200&h=-1&s=1", "Located in the heart of city, a well placed mall with all major brands for shopholics & a well laid out food court to chill thereafter"),
            new Landmark(6, "Green_Park_Stadium", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a0/fe/df/green-park-stadium.jpg?w=700&h=-1&s=1", "Green Park Stadium is located in Kanpur. Here International Cricket Tournaments are held and Indian Cricket team has played many matches over here."),
            new Landmark(7, "Kanpur_Memorial_Church", "https://static.toiimg.com/photo/59525799.cms", "The Kanpur Memorial Church, originally known as the All Souls' Church, is a church located in Kanpur, India that belongs to the Church of North India, a united Protestant denomination.")
        )),
        new CityLandmarks("Agra", java.util.Arrays.asList(
    new Landmark(1, "Taj_Mahal", "https://www.holidify.com/images/cmsuploads/compressed/attr_1448_20190212100722jpg", "One of the seven wonders of the world, Taj Mahal is located on the banks of River Yamuna in Agra. It was built by the Mughal Emperor Shah Jahan as a memorial for his third wife, Mumtaz Mahal."),
    new Landmark(2, "Agra_Fort", "https://www.holidify.com/images/cmsuploads/compressed/799px-Agra_FortAgra_India_20200702133907.jpg", "The Red Fort of Agra or Agra Fort was built by Emperor Akbar in 1573. It is located on the right bank of the River Yamuna and is made entirely of red sandstone."),
    new Landmark(3, "Taj_Mahotsav", "https://www.holidify.com/images/cmsuploads/compressed/6838307914_163ca5c0e1_o_20181218131558.jpg", "Taj Mahotsav is an annual ten-day festival that takes place in Agra. The festival showcases an outstanding variety of art and craft, dance and cuisines of artisans from different regions of India."),
    new Landmark(4, "Fatehpur_Sikri", "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1078858838_20200320164009.jpg", "Fatehpur Sikri is a town in the Agra district and a famous tourist attraction. A city predominantly made of red sandstone, Fatehpur Sikri was founded in 1571 century by Mughal Emperor Akbar")
)),
new CityLandmarks("Varanasi", java.util.Arrays.asList(
    new Landmark(1, "Sarnath", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ee/12/6f/stupa.jpg?w=1200&h=-1&s=1", "The Dhamekha stupa and other imposing structures adorn this holy site where Buddha first preached his message."),
    new Landmark(2, "Ganges_River", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/2e/83/cc/photo4jpg.jpg?w=1200&h=-1&s=1", "Boating on Ganga is one of the must to do activities and another great experience. Morning boat ride is such a serene experience that one can't forget. Just go for it"),
    new Landmark(3, "Dasaswamedh_Ghat", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/f0/86/f7/dasaswamedh-ghat.jpg?w=1200&h=-1&s=1", "India Trip Offer Dashashwamedh Ghat is the main ghat in Varanasi on the Ganga River. It is located close to Vishwanath Temple and is probably the most spectacular ghat"),
    new Landmark(4, "Manikarnika_Ghat", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/e6/9e/92/z-square-mall.jpg?w=1200&h=-1&s=1", "On the sacred Ganges river this is the most revered spot for a cremation in the Hindu faith. The body of the deceased is carried down through the small alleys and placed in the Ganges for purification.")
)),
new CityLandmarks("Ayodhya", java.util.Arrays.asList(
    new Landmark(1, "Ram_Janmabhoomi", "https://www.holidify.com/images/cmsuploads/compressed/650px-V0qbaoio_ayodhya-ram-temple-proposed-design_625x300_23_July_20.webp_20200805134302.png", "The Ram Janmabhoomi is believed to have been the birthplace of the Hindu deity, Lord Ram. According to the Indian epic Ramayan, Ram, Lord Vishnu's seventh manifestation, is said to have grown up along Ayodhya's river Sarayu."),
    new Landmark(2, "Hanuman_Garhi", "https://www.holidify.com/images/cmsuploads/compressed/1621_20200407145126.jpg", "Hanuman Garhi is a 10th-century temple dedicated to the Hindu God, Hanuman. It is one of the most important temples in Ayodhya as it is customary to visit Hanuman Garhi before visiting the Ram Temple in Ayodhya."),
    new Landmark(3, "Kanak_Bhawan", "https://www.holidify.com/images/cmsuploads/compressed/1622_20200414160238.jpg", "The Kanak Bhawan is established towards the northeastern corner of the Ram Janmabhoomi in Tulsi Nagar. Constructed in 1891, this temple is also known as Sone-ka-Ghar. It is a holy site dedicated to the Hindu deity Lord Rama and his wife, Goddess Sita."),
    new Landmark(4, "Gulab_Bari", "https://www.holidify.com/images/cmsuploads/compressed/1624_20200414203726.jpg", "The Gulab Bari is situated in Vaidehi Nagar. It is the tomb of the third Nawab of Faizabad (Oudh or Awadh), Nawab Shuja-ud-Daula and his parents.")
)),
new CityLandmarks("Vrindavan", java.util.Arrays.asList(
    new Landmark(1, "Prem_Mandir", "https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/m_Vrindavan_Prem_mandir_2_l_426_640.jpg", "Prem Mandir, or The temple of love, is one of the most important and largest temples in Vrindavan, dedicated to Lord Krishna and Radha."),
    new Landmark(2, "Keshi_Ghat", "https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/m_Vrindavan_Keshi_ghat_2_l_440_640.jpg", "Keshi Ghat, one of Vrindavan's most iconic and popular tourist destinations, is a very peaceful destination for sunrise and sunset. An ideal spot for all the photography enthusiasts out there, one can also take a boat ride from the bank to the center of the river to witness the beautiful evening Aarti that takes place along the ghat."),
    new Landmark(3, "Banke_Bihari_Mandir", "https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/m_Vrindavan_Banke_bihari_mandir_vrindavan_2_l_497_639.jpg", "This is one of the highly regarded shrines, and is one out of the seven temples of ‘Thakur of Vrindavan’, along with Shri Govind Dev Ji, Sri Radhavallabh Ji and four others."),
    new Landmark(4, "Nidhivan", "https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/m_Vrindavan_Nidhivan_3_l_450_640.jpg", "The temple area has many sights worth seeing. These spots represent Lord Radha Krishna's spiritual presence. The Radha Rani temple contains Swami Haridas' samadhi. There is also a sacred Radha Rani well nearby.")
)),
new CityLandmarks("Jhasi", java.util.Arrays.asList(
    new Landmark(1, "Jhansi_Fort", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/32/58/24/different-parts-in-the.jpg?w=1200&h=-1&s=1", "Jhansi Fort or Jhansi ka Kila is a fortress situated on a large hilltop called Bangira, in Uttar Pradesh, Northern India. It served as a stronghold of the Chandela Kingsin Balwant Nagar from the 11th through the 17th century."),
    new Landmark(2, "St_Jude_Shrine", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/a9/1c/2c/st-jude-s-shrine.jpg?w=1200&h=-1&s=1", "The church has an unusual design for a catholic church and doesn’t employ any of the traditional church designs. There’s an unusually long and gentle sloping walk up to the front entrance."),
    new Landmark(3, "Parichha_Dam", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/aa/55/ff/parichha-dam.jpg?w=800&h=-1&s=1", "Real beauty of this dam come in monsoon time. So visit it in this time. There was lot of water. Good place for photography."),
    new Landmark(4, "Jhansi_Herbal_Garden", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/b7/58/f6/getlstd-property-photo.jpg?w=1000&h=-1&s=1", "Herbal Garden Jhansi Cantt boasts of about 20000 different Herbal plants of different varieties planted to rejuvenate the wandering souls. One hour of walk is real elixir of life for all ages.")
))




  );


       

    @GetMapping("/landmarks/{city}")
    public List<Landmark> getLandmarksByCity(@PathVariable String city) {
        Optional<CityLandmarks> cityLandmarks = data.stream()
            .filter(c -> c.getCity().equalsIgnoreCase(city))
            .findFirst();

        return cityLandmarks.map(CityLandmarks::getLandmarks).orElse(null);
    }





  

 
  @PostMapping("/contactUs")
  public ResponseEntity<String>  contactUs(@RequestBody ContactUsDto contactUsDto){
    System.out.println(contactUsDto);
    return new ResponseEntity<>(contactUsService.sendForm(contactUsDto),HttpStatus.OK);
  }
  @PostMapping("/booking")
  public ResponseEntity<String>  booking(@RequestBody BookingDto bookingDto){
    System.out.println(bookingDto);
    return new ResponseEntity<>(bookingService.sendForm(bookingDto),HttpStatus.OK);
  }

    // Get appointment by ID endpoint

}
