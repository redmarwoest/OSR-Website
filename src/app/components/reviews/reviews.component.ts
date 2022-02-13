import { Component, OnInit } from '@angular/core';

const reviews = [
  {
    image: "assets/review-image-placeholder.svg", 
    name: "Esther (2020)",
    paragraph: "De toegevoegde waarde welke OSR RE heeft gehad bij ons project is werelds. Met kennis van zaken en een actieve aanpak hebben wij de verkoop van onze woning met een goed gevoel afgerond. " 
  },
  {
    image: "assets/review-image-placeholder.svg", 
    name: "Patrick (2021)",
    paragraph: "Met de hulp van Oscar heb ik mijn eerste beleggingspand weten aan te kopen toen 90% van Nederland zei dat de markt op slot zat en er geen mogelijkheden waren. Ook met de verhuur heb ik veel tips & tricks meegekregen, waardoor de woning goed verhuurd is. " 
  },
  {
    image: "assets/review-image-placeholder.svg", 
    name: "Esther (2022)",
    paragraph: "Ook deze woning heeft OSR weer vakkundig en snel verkocht. Zonder veel gedoe, was het proces van bezichtigen en het tekenen van de koopovereenkomst binnen 1 week geregeld. Al mijn voorwaarde en condities zijn meegenomen in de koop. Wederom zeer tevreden! " 
  },
]

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews = reviews

  constructor() { }

  ngOnInit(): void {
  }

}
