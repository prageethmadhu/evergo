import { Injectable } from '@angular/core';
import { strictEqual } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class TourDetailService {


  constructor() { }

  getTourDetail(tourType: string) {
    var tourDetails = {};
    switch (tourType) {
      case "cultural": {
        //statements;
        tourDetails = {
          detail: `Travel to Sri Lanka and experience the “Paradise” which most commonly used the word to describe Sri
          Lanka and journey of discovery full of memories that will last forever for generations to generations.
          Lush, Tropical Island of golden beaches and crystal clear blue waters wrapped around and bundled
          amazingly within 65000SqKms Callers to Sri Lanka to experience travel adventure can choose some
          numerous activities from unwound on the beach to perceiving the wildlife, dive into huge coral reefs
          while exploring our unique culture and ancient temples and remains.
          So World! Be SO SRI LANKA we invite you to explore and experience in the pearl of the Indian Ocean
          with “Evergo Way”`,
          title: "Cultural",
          images: ["c1.jpg", "c2.jpg", "c3.jpg"],
          duration: "05 NIGHTS 06 DAYS",
          activities: [
            {
              day: "DAY 01",
              route: "Airport Colombo",
              tduration: "01",
              discription: `You will be welcomed by one of our chauffeur driver at the Airport and then transfer to Colombo Hotel.
                         Check-in to the Hotel, relax and recover from any jet lag and get ready for the plan a head`,
              stay: "Overnight stay in Colombo"
            },
            {
              day: "FROM DAY 02 – DAY 5",
              route: "Colombo > Dambulla or Beruwala as you prefer",
              tduration: "04",
              discription: `Relish a delicious breakfast at your hotel and Set off to ayurvedic treatments and tranquil relaxation experience
              The treatments will commence from second day onwards 
              Each day begins with a yoga session to improve your inner peace
              You will experience the unique and authentic detox programs including Shirodhara and many more treatments by experienced ayurveda therapists to build a perfect inner balance. Private meditation and the ayurvedic cuisines provides a perfect environment to build your own inner peace.
              In the meantime, you can experience the natural beauty and the heritage by visiting local and regional attractions guided by our chauffeur guides or naturalists`,
              stay: "Overnight stays in Dambulla or Beruwala"
            }
          ],
          summary:`After all guidance, healthy advices and inspections from our ayurveda therapists and Doctors,
           your chauffeur guide will comfortably take you back to the international airport for a safe return until 
           we see you for yet another tour back to Sri Lanka`
        };

        break;
      }
      case "ayurveda": {

        tourDetails = {
          detail: `Run away from stressful modern life but relax and refresh your mind, body, and soul with a Ayurvedic
          Journey proficient in Sri Lanka for many centuries. Unique authentic treatments and traditional
          techniques combine with medicinal plants, herbs, spices and diets. Ayurveda translates into English as
          the Science of Life. (Ayur-life, Veda-science) Hence, come and find a sense of inner peace surrounded by
          the mother nature`,
          title: "AYURVEDA & WELLNESS",
          images: ["c3.jpg", "c2.jpg", "c1.jpg"],
          duration: "07 NIGHTS 08 DAYS",
          activities: [
            {
              day: "DAY 02",
              route: "Airport Colombo",
              tduration: "01",
              discription: `You will be welcomed by one of our chauffeur driver at the Airport and then transfer to Colombo Hotel.
                         Check-in to the Hotel, relax and recover from any jet lag and get ready for the plan a head`,
              stay: "Overnight stay in Colombo"
            }
          ],
          summary:`After all guidance, healthy advices and inspections from our ayurveda therapists and Doctors,
           your chauffeur guide will comfortably take you back to the international airport for a safe return until 
           we see you for yet another tour back to Sri Lanka`

        };

        break;
      }
      default: {
        //statements; 
        tourDetails = "Other OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther OtherOther Other";

        break;
      }
    }

    return tourDetails;
  }

}
