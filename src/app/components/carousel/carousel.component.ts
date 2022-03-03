import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Swiper, SwiperOptions,  } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination,
]);

const images = [
  "assets/chandeleer.png", 
  "assets/chandeleer.png", 
  "assets/chandeleer.png", 
  "assets/chandeleer.png", 
  "assets/chandeleer.png", 
  "assets/chandeleer.png", 
]


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {
  config: SwiperOptions = {
    pagination: {
      clickable: true
    },
    slidesPerView: 2,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      600: {
          slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      }
    },
    spaceBetween: 0
  }



  images = images


  constructor() { }

  ngOnInit(): void {
  }

}
