import { Component, OnInit } from '@angular/core';

const reviews = [
  {
    image: "assets/review-image-placeholder.svg", 
    name: "Peter Pannekoek",
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
  },
  {
    image: "assets/review-image-placeholder.svg", 
    name: "Peter Pannekoek",
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
  },
  {
    image: "assets/review-image-placeholder.svg", 
    name: "Peter Pannekoek",
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
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
