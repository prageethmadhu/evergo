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
          images: ["Culture-1.JPG", "Culture-3.JPG", "Culture-4.JPG"],
          duration: "05 NIGHTS 06 DAYS",
          activities: [
            {
              day: "DAY 01",
              route: "Airport > Colombo",
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
          summary: `After all guidance, healthy advices and inspections from our ayurveda therapists and Doctors,
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
              day: "DAY 01",
              route: "Airport > Colombo",
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
            ,
            {
              day: "DAY 06",
              route: "Dambulla or Beruwala > Airport",
              tduration: "04",
              discription: ``,
              stay: ""
            }
          ],
          summary: `After all guidance, healthy advices and inspections from our ayurveda therapists and Doctors,
           your chauffeur guide will comfortably take you back to the international airport for a safe return until 
           we see you for yet another tour back to Sri Lanka`

        };

        break;
      }
      case "wild": {

        tourDetails = {
          detail: `Be thrilled and explore the exotic wildlife on the nature trails. Keep on alert for a sight of the rare sloth
          bears, exclusive leopards and great herds of elephants while your safari tour in our national parks in
          Yala, Udawalawe, Kaudulla, Wilpattu, Minneriya, and Gal Oya. Later on to huge whales and group of
          dolphins in Mirissa. You can customize the tour as you wish with the concern of possibilities.`,
          title: "WILD LIFE",
          images: ["c3.jpg", "c2.jpg", "c1.jpg"],
          duration: "05 NIGHTS 06 DAYS",
          activities: [
            {
              day: "DAY 01",
              route: "Airport > Colombo",
              tduration: "01",
              discription: `You will be welcomed by one of our chauffeur driver at the Airport and then transfer to Colombo Hotel.
                         Check-in to the Hotel, relax and recover from any jet lag and get ready for the plan a head`,
              stay: "Overnight stay in Colombo"
            },
            {
              day: "DAY 02",
              route: "Colombo > Singharaja",
              tduration: "05",
              discription: `Relish a delicious breakfast at your hotel and begins the journey to Singharaja Rain Forest
              look out for a number of birds upon canopy of trees, wild life and villages while the tour until we spend
              the evening relaxing before an exciting day tomorrow`,
              stay: "Overnight stay in amidst of the Singharaja Forest"
            }
            ,
            {
              day: "DAY 03",
              route: "Into the Jungle",
              tduration: "entire day",
              discription: `Have breakfast at your Lodge and proceed into the Jungle
              Enjoy both morning and evening private bird watching trek, mammals and butterflies as well as many
              varieties of insects, reptiles, in the Sinharaja Rain Forest led by a naturalist guide.
              Watch out for Leeches in the rainy season`,
              stay: "Overnight stay in amidst of the Singharaja Forest"
            }
            ,
            {
              day: "DAY 04",
              route: "Singharaja > Mirissa",
              tduration: "4 1/2",
              discription: `After the morning break proceeds to Mirissa
              Witness Fishermen, local villages during the drive to bay of Mirissa and main highlights are watching of
              huge whales and group of dolphins dancing in deeper waters beyond the Bay.
              Whale watch season in Mirissa from November to April`,
              stay: "Overnight stay in Mirissa"
            }
            ,
            {
              day: "DAY 05",
              route: "Mirissa > Yala",
              tduration: "05",
              discription: `Have your delicious breakfast at your hotel and proceed to Yala
              Explore and witness the wild life of Elephants, Leopards, Spotted Deer, Sambhur, Crocodiles, Mongoose,
              Wild Boars, Wild Buffalo, and many other animals including large reservoirs `,
              stay: "Overnight stay in Yala"
            }
            ,
            {
              day: "DAY 06",
              route: "Yala > Udawalawe",
              tduration: " 03 1/2",
              discription: `Relish a delicious breakfast at your hotel and travel to Udawalawe
              Enjoy the national park which full of Elephants, Herds of Deer, Crocodiles and 30 species of Snakes are
              recorded`,
              stay: "Overnight stay in amidst of the Singharaja Forest"
            }
            
          ],
          summary: `Either you can camp/lodge in Udawalawe until next day flight or we will transfer you to the
          Bandaranayake International Airport at the end of the day until we see you for yet another
          exiting journey next time`

        };

        break;
      }
      case "hill": {

        tourDetails = {
          detail: `Witness the hill country, the culture and the climate with mountains glistened in shades of emerald and jade, a different environment in this tropical region. Trek through Horton Plains, Worlds end, Ella and Nuwara Eliya one of the coldest regions in Sri Lanka while breathing the fresh air cascade from the mountains.`,
          title: "UP IN THE HILLS",
          images: ["c3.jpg", "c2.jpg", "c1.jpg"],
          duration: "06 NIGHTS 07 DAYS",
          activities: [
            {
              day: "DAY 01",
              route: "Airport > Colombo",
              tduration: "01",
              discription: `You will be welcomed by one of our representative at the Airport and then transfer to Colombo Hotel.
              Check-in to the Hotel, enjoy the city tour and shopping and leisurely spend evening before a long and exhausting plan a head`,
              stay: "Overnight stay in Colombo"
            },
            {
              day: "DAY 02",
              route: "Colombo > Kandy",
              tduration: "05",
              discription: `After breakfast set off from Colombo to UNESCO world heritage city Kandy kingdom
              Drop by the Pinnawela Elephant Orphanage on the way to city of Kandy. Royal Botanical Gardens of Peradeniya, Udawattakale forest reserve, Temple of the Sacred Tooth Relic and cultural show are the highlights in Kandy`,
              stay: "Overnight stay in Kandy"
            }
            ,
            {
              day: "DAY 03",
              route: "Kandy > Nuwara Eliya",
              tduration: "03",
              discription: `Have breakfast at your hotel and ascend to the Nuwara Eliya
              Enjoy the scenic ride from Kandy to Nuwara Eliya and relax near various Waterfalls, Macwoods Tea center, Gregory Lake, Victoria Park, Tea pluckers and Tea factories. `,
              stay: "Overnight stay in Nuwara Eliya"
            }
            ,
            {
              day: "DAY 04",
              route: "Stay in Nuwara Eliya",
              tduration: "03",
              discription: `After the morning break continue your hill country adventure
              Feel the fresh cold air welcome you cascading from the mountains and trek via tea carpeted valleys to ancient Tea factories, bungalows and have a fresh brewed Ceylon tea in the evening until you start play in our exclusive 18-hole golf courses.`,
              stay: "Overnight stay in Nuwara Eliya"
            }
            ,
            {
              day: "DAY 05",
              route: "Nuwara Eliya > Horton plains > Ella",
              tduration: "04",
              discription: `Have your delicious breakfast at your hotel and proceed to Horton place
              National Park of Horton Plains is a place for wild life like sambar deer, various beautiful pools and water falls like Bakers and hike to worlds end and cloud forest via Wet Patana Grasslands.
              Continuing the journey to Ella in the evening.`,
              stay: "Overnight stay in Ella"
            }
            ,
            {
              day: "DAY 06",
              route: "Ella",
              tduration: "Entire day",
              discription: `Relish a delicious breakfast at your hotel and start your hike and trek in Ella
              Highlights in Ella are Mini Sripada (Adam’s Peak), Ella Rock and the Demodara Nine Arch Bridge surrounded by the mountains gives you an amazing spectacular views`,
              stay: "Overnight stay in Nuwara Eliya"
            }
            ,
            {
              day: "DAY 07",
              route: "Ella > Airport",
              tduration: "06",
              discription: `Have your breakfast and travel down to Colombo for the departure`,
              stay: ""
            }
          ],
          summary: `With a sun-tanned skin after your hike and trek in Ella, it’s time to say good bye until you visit us again for yet another fascinating tour in paradise Sri Lanka. Your chauffeur guide will comfortably take you back to the Bandaranayake airport for a safe return.`

        };

        break;
      }
      case "romantic": {

        tourDetails = {
          detail: `Looking for a chance to celebrate your love in style!
          Be enchantment with your soulmate and ensure that you and your other half can enjoy the precious time and space that you needed among lush forests, golden sandy shores and green paddy fields and can have a perfect honeymoon vacation with luxury and comfort. This tailor-made routes can be customized as you prefer with the concern of possibilities`,
          title: "LOVE & ROMANTIC",
          images: ["c3.jpg", "c2.jpg", "c1.jpg"],
          duration: "08 NIGHTS 09 DAYS",
          activities: [
            {
              day: "DAY 01",
              route: "Airport > Kandy",
              tduration: "05",
              discription: `You will be welcomed by one of our representative at the Airport and then transfer to kingdom of Kandy
              Check-in to the Hotel, relax and recover from any jet lag and enjoy the evening city tour and bit of shopping before the romantic plan a head`,
              stay: "Overnight stay in Kandy"
            },
            {
              day: "DAY 02",
              route: "Stay in Kandy",
              tduration: "04",
              discription: `After breakfast set off your journey to UNESCO world heritage city Kandy kingdom
              Drop by the Pinnawela Elephant Orphanage, Royal Botanical Gardens of Peradeniya, Udawattakale forest reserve, Temple of the Sacred Tooth Relic and cultural show are the highlights in Kandy`,
              stay: "Overnight stay in Kandy"
            }
            ,
            {
              day: "DAY 03",
              route: "Kandy > Nuwara Eliya",
              tduration: "03",
              discription: `Have breakfast at your hotel and ascend to the Nuwara Eliya
              Enjoy the scenic ride from Kandy to Nuwara Eliya and relax near various Waterfalls, Macwoods Tea center, Gregory Lake, Victoria Park, Tea pluckers and Tea factories.`,
              stay: "Overnight stay in Nuwara Eliya"
            },
            {
              day: "DAY 04",
              route: "Stay in Nuwara Eliya",
              tduration: "01",
              discription: `After the morning break continue your hill country adventure
              Feel the fresh cold air welcome you cascading from the mountains and trek via tea carpeted valleys to ancient Tea factories, bungalows and have a fresh brewed Ceylon tea in the evening until you start play in our exclusive 18-hole golf courses`,
              stay: "Overnight stay in Nuwara Eliya"
            }
            ,
            {
              day: "DAY 05",
              route: "Nuwara Eliya > Horton plains > Nuwara Eliya",
              tduration: "04",
              discription: `Have your delicious breakfast at your hotel and proceed to Horton place
              National Park of Horton Plains is a place for various wild life like sambar deer, various beautiful pools and water falls like Bakers and hike to worlds end and cloud forest via Wet Patana Grasslands.
              Have a Picnic lunch to Horton Plains and spend the day as you like.`,
              stay: "Overnight stay in Nuwara Eliya"
            }
            ,
            {
              day: "DAY 06",
              route: "Nuwara Eliya > Yala",
              tduration: "05",
              discription: `Relish a delicious breakfast at your hotel and descend to down south
              Explore and witness the wild life of Elephants, Leopards, Spotted Deer, Sambhur, Crocodiles, Mongoose, Wild Boars, Wild Buffalo, and many other animals including large reservoirs over the Jeep safari guided by a Naturist`,
              stay: "Overnight stay in Yala"
            }
            ,
            {
              day: "DAY 07",
              route: "Yala > Bentota",
              tduration: "05",
              discription: `Proceeds to Bentota and relax your beach stay in pristine golden sandy shores and rest of the day at leisurely with boat rides and water sports`,
              stay: "Overnight stay in Bentota"
            }
            ,
            {
              day: "DAY 08",
              route: "Bentota > Mirissa > Negombo",
              tduration: "05",
              discription: `After the morning break proceeds to Mirissa
              Witness Fishermen, local villages during the drive to bay of Mirissa and main highlights are watching of huge whales and group of dolphins dancing in deeper waters beyond the Bay.
              Whale watch season in Mirissa from November to April
              Set off to Negombo in the later part of the day to enjoy the evening`,
              stay: "Overnight stay in Negombo"
            },
            {
              day: "DAY 09",
              route: "Stay in Nuwara Eliya",
              tduration: "1/2",
              discription: `Relish a delicious breakfast at your hotel and set off to departure`,
              stay: ""
            }
          ],
          summary: `With a sun-tanned skin after your beach tour, it’s time to say good bye until you visit us again for yet another fascinating tour in paradise Sri Lanka. Your chauffeur guide will comfortably take you back to the Bandaranayake airport for a safe return.`

        };

        break;
      }
      case "shore": {

        tourDetails = {
          detail: `Relax on an Island Surrounded by the soft and gold sandy beaches well-known as Pearl of the Indian Ocean. Negombo, south or east coasts’ stunning shores with azure waters are a genuine tropical escape. Sun-bathing, swimming, surfing, water sports, deep sea fishing and diving experiences will be treasured for a lifetime. This tailor-made routes can be customized as you prefer with the concern of possibilities`,
          title: "SANDY SHORE",
          images: ["c3.jpg", "c2.jpg", "c1.jpg"],
          duration: "08 NIGHTS 09 DAYS",
          activities: [
            {
              day: "DAY 01",
              route: "Airport > Negombo / Trincomalee as you prefer",
              tduration: "01",
              discription: `You will be welcomed by one of our representative at the Airport and then transfer to Negombo or air taxi flight for a scenic journey from a bird’s eye view straight away to Trincomalee
              Check-in to the Hotel, relax and recover from any jet lag and enjoy the evening in the beach before the sun-burn plan a head`,
              stay: "Overnight stay in Negombo/ Trincomalee"
            },
            {
              day: "DAY 02 - DAY 03",
              route: "Negombo > Trincomalee",
              tduration: "06",
              discription: `Relish a delicious breakfast at your hotel and Set off to ayurvedic treatments and tranquil relaxation experience
              The treatments will commence from second day onwards
              Each day begins with a yoga session to improve your inner peace
              You will experience the unique and authentic detox programs including Shirodhara and many more treatments by experienced ayurveda therapists to build a perfect inner balance. Private meditation and the ayurvedic cuisines provides a perfect environment to build your own inner peace.
              In the meantime, you can experience the natural beauty and the heritage by visiting local and regional attractions guided by our chauffeur guides or naturalists`,
              stay: "Overnight stay in Trincomalee"
            }
            ,
            {
              day: "DAY 04",
              route: "Trincomalee > Passikuda",
              tduration: "03",
              discription: ``,
              stay: ""
            }
            ,
            {
              day: "DAY 04",
              route: "Dambulla or Beruwala > Airport",
              tduration: "04",
              discription: `Have breakfast at your hotel and proceed to Passikuda
              Perfect place to soak up the sun and swim. You can stand straight and walk towards the sea about 100m till you meet the deep in Passikuda Bay shallow waters while exploring marine life beneath.`,
              stay: "Overnight stay in Passikuda"
            }
            ,
            {
              day: "DAY 05 - DAY 06",
              route: "Passikuda > Arugam Bay",
              tduration: "04",
              discription: `After the morning break continue your sandy shore tour towards Arugam Bay
              This destination is a place for water sports and especially for surfers with huge waves. Enjoy the Sun, savoury food, Village fishermen, Sea breeze and freedom on your own way`,
              stay: "Overnight stay in Arugam Bay"
            }
            ,
            {
              day: "DAY 07 - DAY 08",
              route: "Arugam Bay > Mirissa / Tangalle as you prefer",
              tduration: "06",
              discription: `Have your delicious breakfast at your hotel and proceed to Mirissa or Tangalle as you prefer to be
              The calm and soothing waters will relax you after the exhausted journey so far. Witness the Turtle farm and hatchery, Explore the UNESCO world heritage Galle fort about 02 hours drive away from your hotel. Enjoy the beach parties and numerous fun and night life in your destination. Do not forget to watch huge whales and group of dolphins dancing in deeper waters early in the morning beyond the Bay
              Whale watch season in Mirissa from November to April`,
              stay: "Overnight stay in Mirissa / Tangalle"
            }
            ,
            {
              day: "DAY 09",
              route: "Mirissa/Tangalle > Airport",
              tduration: "04",
              discription: `Relish a delicious breakfast at your hotel and make your way to the airport for departure.`,
              stay: ""
            }
          ],
          summary: `With a sun-tanned skin and your surfing boards, it’s time to say good bye until you visit us again for yet another fascinating tour in paradise Sri Lanka. Your chauffeur guide will comfortably take you back to the Katunayake airport for a safe return.`

        };

        break;
      }
      case "golf": {

        tourDetails = {
          detail: `Golf courses are a must try during your stay and play a game at the 18-hole golf courses.
          Victoria Golf and Country Club, Nuwara Eliya Golf club and Royal golf club which is the oldest in Sri Lanka, are the most luxurious courses for you to have a session. Air taxi or a helicopter can blend you fast and comfortably between 18-hole golf courses and Five-star hotels, luxury villas, lavish spas and pools in the city of Colombo, Hill country & Other cities`,
          title: "GOLF & LUXURY",
          images: ["c3.jpg", "c2.jpg", "c1.jpg"],
          duration: "06 NIGHTS 07 DAYS",
          activities: [
            {
              day: "DAY 01",
              route: "Airport > Colombo",
              tduration: "01",
              discription: `You will be welcome by one of our representative at the Airport and then transfer to Colombo hotel
              Check-in to the Hotel, relax and recover from any jet lag and enjoy the evening city tour and bit of shopping before your games in 18-hole golf courses`,
              stay: "Overnight stay in Colombo"
            },
            {
              day: "DAY 02",
              route: "Colombo > Digana",
              tduration: "05",
              discription: `After breakfast set off your journey to Victoria Golf Course & Resort via city of Kandy
              Drop by the Pinnawela Elephant Orphanage, Royal Botanical Gardens of Peradeniya, Udawattakale forest reserve, Temple of the Sacred Tooth Relic and cultural show are the highlights in Kandy
              Game of Golf in the evening`,
              stay: "Overnight stay in Digana"
            }
            ,
            {
              day: "DAY 03 - DAY 04",
              route: "Victoria Golf Course & Resort",
              tduration: "1/2",
              discription: `Have breakfast at your hotel and Step out to the stunning course for the game of Golf
              Enjoy the views and relax over fresh cold breeze welcome you cascading from the mountains during the game. Visit Temple of the Sacred Tooth Relic with respect and great Mahaweli River Kandy for a boat ride`,
              stay: "Overnight stay in Digana"
            }
            ,
            {
              day: "DAY 05",
              route: "Digana > Nuwara Eliya",
              tduration: "04",
              discription: `After the morning break continue to hill country for another play
              Relax and trek via tea carpeted valleys to ancient Tea factories, bungalows, Botanical Gardens and have a fresh brewed Ceylon tea in the evening until you start play in our exclusive 18-hole golf course in Nuwara Eliya`,
              stay: "Overnight stay in Nuwara Eliya"
            }
            ,
            {
              day: "DAY 06",
              route: "Nuwara Eliya > Negombo",
              tduration: "05 1/2",
              discription: `Have your delicious breakfast at your hotel and proceed to coast of Negombo
              Via tea carpeted valleys, paddy fields and cold weather reach the Sri Lanka’s coastline for a little warm up on golden sandy beach. Your chauffeur guide might take you a city tour if time permits`,
              stay: "Overnight stay in Negombo"
            }
            ,
            {
              day: "DAY 07",
              route: "Negombo > Airport",
              tduration: "1/2",
              discription: `Relish a delicious breakfast at your hotel and set off to departure`,
              stay: ""
            }
          ],
          summary: `it’s time to say good bye until you visit us again for yet another fascinating tour in paradise Sri Lanka. Your chauffeur guide will comfortably take you back to the Bandaranaike airport for a safe return.`

        };

        break;
      }
      case "excursions": {

        tourDetails = {
          detail: `Day tours organized by Evergo Travels lead you to many luxury experiences for the guests to enjoy diverse activities and scenic mother nature. Destined it hiking and trekking through mountains and lush forests, white water rafting, day and night safari through deep forests, whales and birds watch, cultural shows, Tea plantation and factories, Sri Lanka rich heritage and many more. So be it. SO Sri Lanka with Evergo Travels.`,
          title: "EXCURSIONS",
          images: ["c3.jpg", "c2.jpg", "c1.jpg"],
          duration: "07 NIGHTS 08 DAYS",
          activities: [
            {
              day: "DAY 01",
              route: "Airport > Colombo",
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
            ,
            {
              day: "DAY 06",
              route: "Dambulla or Beruwala > Airport",
              tduration: "04",
              discription: ``,
              stay: ""
            }
          ],
          summary: `After all guidance, healthy advices and inspections from our ayurveda therapists and Doctors,
           your chauffeur guide will comfortably take you back to the international airport for a safe return until 
           we see you for yet another tour back to Sri Lanka`

        };

        break;
      }
      case "coarch": {

        tourDetails = {
          detail: `The most pocket easy way to experience the culture, wildlife, history, and ancient cities with all the key destinations stop around the Island. Ideal tour not only to travel around the cities but also to make new multicultural companions and share experiences with.`,
          title: "SEAT IN COACH",
          images: ["c3.jpg", "c2.jpg", "c1.jpg"],
          duration: "08 NIGHTS 09 DAYS",
          activities: [
            {
              day: "DAY 01",
              route: "Airport > Colombo",
              tduration: "01",
              discription: `You will be welcomed by one of our representative at the Airport and then transfer to Colombo Hotel
              Check-in to the Hotel, relax and recover from any jet lag and enjoy the evening before the exhausting journey a head`,
              stay: "Overnight stay in Colombo"
            },
            {
              day: "DAY 02 - DAY 03",
              route: "Colombo > Dambulla > Polonnaruwa > Sigiriya",
              tduration: "04",
              discription: `After breakfast set off your journey to UNESCO world heritage places Dambulla rock cave temple and Sigiriya Rock Fortress
              Drop by the Pinnawela Elephant Orphanage on the way to Polonnaruwa via Habarana. Highlights are Minneria National park safari to view the Gathering of Elephants and other wild life. Polonnaruwa Lankatilake, Tivanka and Thuparama Stupa, Gal Vihare and the Vata-da-ge are the world heritages remains in Sri Lanka which speak the proud of the rich history of us.`,
              stay: "Overnight stay in Sigiriya"
            }
            ,
            {
              day: "DAY 04",
              route: "Sigiriya > Kandy",
              tduration: "03",
              discription: `Have breakfast at your hotel and proceed to Kandy kingdom
              On the way to Kandy drop by Spice Gardens and Alu Viharaya (Ancient Temple) in Matale, Royal Botanical Gardens of Peradeniya, Udawattakale forest reserve, Temple of the Sacred Tooth Relic and cultural shows are the highlights in Kandy`,
              stay: "Overnight stay in Kandy"
            }
            ,
            {
              day: "DAY 05 - DAY 06",
              route: "Kandy > Nuwara Eliya",
              tduration: "03",
              discription: `After the morning break continue your hill country adventure to Nuwara Eliya
              Enjoy the scenic ride from Kandy to Nuwara Eliya and relax near various Waterfalls, Macwoods Tea center, Gregory Lake, Victoria Park, Tea pluckers and visit Tea factories and bungalows. Have a fresh brewed Ceylon tea in the evening until you start a game in our exclusive 18-hole golf courses.`,
              stay: "Overnight stay in Nuwara Eliya"
            },
            {
              day: "DAY 07",
              route: "Nuwara Eliya > Yala",
              tduration: "05",
              discription: `Relish a delicious breakfast at your hotel and descend to down south
              Explore and witness the wild life of Elephants, Leopards, Spotted Deer, Sambhur, Crocodiles, Mongoose, Wild Boars, Wild Buffalo, and many other animals including large reservoirs over the Jeep safari guided by a Naturist`,
              stay: "Overnight stay in Yala"
            }
            ,
            {
              day: "DAY 08",
              route: "Yala > Galle",
              tduration: "06 ½",
              discription: `Have your delicious breakfast at your hotel and proceed to beach side
              Relax your beach stay in pristine golden sandy shores leisurely in down south with boat rides, water sports and do not forget to visit the World Heritage site “the Dutch Fort” in Galle`,
              stay: "Overnight stay in Galle"
            }
            ,
            {
              day: "DAY 09",
              route: "Galle > Airport",
              tduration: "04",
              discription: `Relish a delicious breakfast at your hotel and set off to departure`,
              stay: ""
            }
            
          ],
          summary: `With a sun-tanned skin after your exhausted tour, it’s time to say good bye until you visit us again for yet another fascinating journey in paradise Sri Lanka. Your chauffeur guide will comfortably take you back to the Bandaranaike Airport for a safe return.`

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
