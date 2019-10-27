import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourMiniDetailService {

  constructor() { }

  getAllTravelMiniDetail(tourType: string) {
    debugger
    switch (tourType) {
      case "Maldives": {
        return this.getMaldivesMiniDetails();
      }
      case "excursion": {
        return this.getMaldivesExcursionDetails();
      }
      default: {
        return this.getSLMiniDetails();
      }
    }
  }

  getMaldivesMiniDetails() {
    return [
      {
        tag: "MOVENPICK",
        title: `MOVENPICK RSORT KUREDHIVARU`,
        discription: `Awaken your senses at five-star 
        Mӧvenpick Resort Kuredhivaru Maldives, located 45 minutes north of Male International Airport`,
        img: "Moldives/ViewMore/Maldives-movenpick.jpg",
        url: "",
        isImgOnLeft: true
      },
      {
        tag: "HIDEAWAY",
        title: `HIDEAWAY BEACH RESORT & SPA`,
        discription: `The perfect island retreat in the Maldives, is located in the northern Haa Alifu Atoll. Set on a
        crescent-shaped private island house to incredible resorts offers a choice of private villas.`,
        img: "Moldives/ViewMore/Maldives-hideaway.jpg",
        url: "",
        isImgOnLeft: false
      },
      {
        tag: "FUSHIFARU",
        title: `FUSHIFARU MALDIVES`,
        discription: `Enjoy brand new exquisite private island resort with 49 Villas to experiences the 
        nature and great concoctions while facing the scenic beauty of the waters`,
        img: "Moldives/ViewMore/Maldives-fushifaru.jpg",
        url: "",
        isImgOnLeft: true
      },
      {
        tag: "AMARI",
        title: `AMARI HAVODDA`,
        discription: `Cast yourself to somewhere private, to
        an island dazzling and undisturbed.
        Imagine a place surrounded by Golden
        sandy pristine beach, hidden turquoise
        lagoons and breathtaking coral reefs.`,
        img: "Moldives/ViewMore/Maldives-amari.jpg",
        url: "",
        isImgOnLeft: false
      },
      {
        tag: "FUNISLAND",
        title: `FUN ISLAND RESORT & SPA`,
        discription: `Exotic, deserted and untouched is one way of describing
        the indescribable. The best place to relax, soak-up the
        sun and enjoy your stay in Maldives`,
        img: "Moldives/ViewMore/Maldives-fun island.jpg",
        url: "",
        isImgOnLeft: true
      }
    ];
  }

  getSLMiniDetails() {
    return [
      {
        tag: "CULTURAL",
        title: `CULTURAL`,
        discription: `Travel to Sri Lanka and experience the “Paradise” which most commonly
         used the word to describe Sri Lanka and journey of discovery full of memories that will last forever 
         for generations to generations. Lush, Tropical Island of golden beaches and crystal clear blue 
         waters wrapped around and bundled amazingly within 65000SqKms Callers to Sri Lanka to experience
          travel adventure can choose some numerous activities from unwound on the beach to perceiving
           the wildlife, dive into huge coral reefs while exploring our unique culture and ancient temples and remains.
            So World! Be SO SRI LANKA We invite you to explore and experience in the pearl of the Indian Ocean
             with “Evergo Way” `,
        img: "dambulla cave.jpg",
        url: "/selected-tour/cultural",
        isImgOnLeft: true
      },
      {
        tag: "AYURVEDAWELLNESS",
        title: `AYURVEDA & WELLNESS`,
        discription: `Run away from stressful modern life but relax and refresh your mind, body, and soul with a Ayurvedic Journey proficient in Sri Lanka for many centuries. Unique authentic treatments and traditional techniques combine with medicinal plants, herbs, spices and diets. `,
        img: "Ayurveda-front pic.jpg",
        url: "/selected-tour/ayurveda",
        isImgOnLeft: false
      },
      {
        tag: "INTOTHEWILD",
        title: `INTO THE WILD`,
        discription: `listen to the ethereal voices of the sea, feel the breeze of the birds, be flabbergasted by the gatherings while gaze at flourished mother nature and exotic wildlife in Sri Lanka. Keep on alert for a sight of the rare sloth bear or leopard while your safari tour in our exclusive national parks in Yala, Udawalawe, Kaudulla, Wilpattu, Minneriya, and Gal Oya `,
        img: "into the wild-front pic.JPG",
        url: "/selected-tour/wild",
        isImgOnLeft: true
      },
      {
        tag: "UPINTHEHILLS",
        title: `UP IN THE HILLS`,
        discription: `Witness the hill country the culture and the climate with mountains glistened in shades of emerald and jade, a different environment in this tropical region.`,
        img: "Hills-front pic.jpg",
        url: "/selected-tour/hill",
        isImgOnLeft: false
      },
      {
        tag: "LOVEROMANTIC",
        title: `LOVE & ROMANTIC`,
        discription: `Looking for a chance to celebrate your love in style! Be enchantment with your soulmate and ensure that you and your other half can enjoy the precious time and space that you needed among lush forests, golden sandy shores and green paddy fields `,
        img: "Romantic-front pic.jpg",
        url: "/selected-tour/romantic",
        isImgOnLeft: true
      },
      {
        tag: "SANDYSHORE",
        title: `SANDY SHORE`,
        discription: `Relax on an island Surrounded by the soft and gold sandy beaches well-known as Pearl of the Indian Ocean. Negombo, south or east coasts’ stunning shores with azure waters are a genuine tropical escape. `,
        img: "Sandyshore-front pic.jpg",
        url: "/selected-tour/shore",
        isImgOnLeft: false
      },
      {
        tag: "GOLF",
        title: `GOLF & LUXURY`,
        discription: `Golf couras are a must try during your stay and play a game at the 18-hole golf courses. Victoria Golf and Country Club, Nuwara Eliya Golf club and Royal golf club which is the oldest in Sri Lanka, are the most luxurious courses for you to have a session. 
        `,
        img: "Golf-front pic----.jpg",
        url: "/selected-tour/golf",
        isImgOnLeft: true
      },
      {
        tag: "EXCURSIONS",
        title: `EXCURSIONS`,
        discription: `Day tours organized by Evergo Travels lead you to many luxury experiences for the guests to enjoy diverse activities and scenic mother nature. Destined it hiking and trekking through mountains. `,
        img: "excursion Downsouth-frontpic-------.jpg",
        url: "/selected-tour/details/excursion",
        isImgOnLeft: false
      },
      {
        tag: "SEATINCOACH",
        title: `SEAT IN COACH`,
        discription: `The most pocket easy way to experience the culture, wildlife, history, and ancient cities with all the key destinations stop around the Island. Ideal tour not only to travel around the cities but also to make new multicultural companions and share experiences with. `,
        img: "Transfer 3-----.jpg",
        url: "/selected-tour/coarch",
        isImgOnLeft: true
      }
    ];
  }
  getMaldivesExcursionDetails() {
    return [
      {
        tag: "SAFARI IN NATIONAL PARKS",
        title: `SAFARI IN NATIONAL PARKS`,
        discription: `Be thrilled and explore the exotic wildlife on the nature trails.`,
        img: "Excursion/excursion Safari-front pic.JPG",
        url: "",
        isImgOnLeft: true
      },
      {
        tag: "HERITAGE",
        title: `WITNESS THE RICH HERITAGE`,
        discription: `Discover the land known as Taprobane filled
        with man-made wonders more than 2500
        year ago from ruins to World Heritage Sites.
        Below.`,
        img: "Excursion/excursion Heritage-front pic.jpg",
        url: "",
        isImgOnLeft: false
      },
      {
        tag: "NATURE",
        title: `NATURE TRAILS`,
        discription: `Kithulgala is the famous place to adventure sports
        including white water rafting in Sri Lanka. Experience
        the thrill in furious turns and twists.`,
        img: "Excursion/excursion Naturetrails-front pic.JPG",
        url: "",
        isImgOnLeft: true
      },
      {
        tag: "DOWNSOUTH",
        title: `WELCOME TO DOWN SOUTH`,
        discription: `Cast yourself to somewhere private, to
        an island dazzling and undisturbed.
        Imagine a place surrounded by Golden
        sandy pristine beach, hidden turquoise
        lagoons and breathtaking coral reefs.`,
        img: "Excursion/excursion Downsouth-frontpic-------.jpg",
        url: "",
        isImgOnLeft: false
      },
      {
        tag: "DOLPHIN",
        title: `WHALE & DOLPHIN WATCHING`,
        discription: `Witness Fishermen, local villages during the drive to
        bay of Mirissa to watch huge whales and group of
        Dolphins dancing in deeper waters beyond the Bay.`,
        img: "Excursion/A3.jpg",
        url: "",
        isImgOnLeft: true
      },
      {
        tag: "BOTANICAL",
        title: `BOTANICAL GARDENS AND
        WATERFALLS`,
        discription: `Witness a different environment in this
        tropical region with Spice gardens and
        Orchid Houses which are popular among
        tourists.`,
        img: "Excursion/excursion Botanicale-front pic-----.jpg",
        url: "",
        isImgOnLeft: false
      },
      {
        tag: "SRIPADA",
        title: `SRI PADA MOUNT PEAK (ADAM’S PEAK)`,
        discription: `Pay respect to the most sacred mountain in Sri
        Lanka. Sri pada is “The sacred footprint” of
        Lord Buddha on top of the mountain.`,
        img: "Excursion/excursion Sripada-front pic.jpg",
        url: "",
        isImgOnLeft: true
      },
      {
        tag: "PINNAWELA",
        title: `PINNAWELA ELEPHANT ORPHANAGE`,
        discription: `Safe House of the abandoned and
        wounded elephants. Frolic with baby
        Elephants brought from various parts
        Below.`,
        img: "Excursion/excursion pinnawala-front pic.jpg",
        url: "",
        isImgOnLeft: false
      },
      {
        tag: "PLANTATION",
        title: `TEA PLANTATION`,
        discription: `Feel the fresh cold air welcome you cascading
        from the mountains and trek via tea carpeted
        valleys to ancient Tea factories and bungalows.`,
        img: "Excursion/excursion teaplant-front pic.jpg",
        url: "",
        isImgOnLeft: true
      }
    ];
  }
}
