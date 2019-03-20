import { Injectable } from '@angular/core';

@Injectable()
export class CommerceService {
  commerce = {
    name: "App & Web",
    short_description: "Découvrez notre accompagnement en stratégie digitale : réflexions, conseils et développements de solutions digitales sur mesure, centrés sur l'innovation.",
    description: "Ensemble, créons la solution la plus adaptée à vos besoins. Nous prévoyons un phasage des développements de longues durées. Lors de chaque phase, nous délivrons une partie fonctionnelle de la solution. Nous convenons au préalable avec vous les fonctionnalités à délivrer aux échéances.",
    button_cta : "Contactez-nous",
    url_logo: "./assets/images/logo.png",
    url_video: "https://www.youtube.com/embed/ZnuwB35GYMY",
    galery: ["./assets/images/header.JPG", "./assets/images/image1.jpg", "./assets/images/image1.jpg", "./assets/images/image1.jpg", "./assets/images/image1.jpg", "./assets/images/image1.jpg"],
    schedule: [
      {
        day: "Lundi",
        opening: "08:00",
        closing: "16:00",
        closed: false,

      },
      {
        day: "Mardi",
        opening: "08:00",
        closing: "16:00",
        closed: false,
      },
      {
        day: "Mercredi",
        opening: "08:00",
        closing: "16:00",
        closed: false,
      },
      {
        day: "Jeudi",
        opening: "08:00",
        closing: "16:00",
        closed: false,
      },
      {
        day: "Vendredi",
        opening: "08:00",
        closing: "16:00",
        closed: false,

      },
      {
        day: "Samedi",
        opening: "08:00",
        closing: "16:00", 
        closed: false,
      },
      {
        day: "Dimanche",
        opening: "08:00",
        closing: "16:00",
        closed: true,
      },
    ],
    details: {
      postal: 6900,
      town: "Marche-en-famenne",
      telephone: "+32 (0) 84 32 00 98",
      portable: "",
      fax: "",
      email: "",
      website_url: "",
      contact_name: "Matthieu Defrenne",
      adresse: "Rue du commerce 19",
      easy_access: false,
      downtown: true,
      sector: "Construction",
      subsector: "Construction"
    },
    holiday: {
      start: "",
      end: "",
      comment: "Ceci est un commentaire"
    },
    legalsInformations: {
      entity: "SA",
      tva_number: "0000-0000-0000-0000",
      responsable: "atthieu Defrenne",
      telephone: "+32 (0) 84 32 00 98",
      email: "matthieu.defrenne@gmail.com",
    },
  };
  constructor() { 

  }


  update(update) {
    for (var key in update) {
      if (this.commerce.hasOwnProperty(key) && this.commerce[key] != update[key]) {
        this.commerce[key] = update[key];
        // http request
      }
    }
  }
  

}
