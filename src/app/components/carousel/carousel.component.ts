import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Swiper, SwiperOptions,  } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination,
]);

const images = [
  {
    src: "assets/chandeleer.png",
    alt: 'Image 1',
  }, {
    src: "assets/chandeleer.png",
    alt: 'Image 2'
  }, {
    src: "assets/chandeleer.png",
    alt: 'Image 3'
  }, {
    src: "assets/chandeleer.png",
    alt: 'Image 4'
  }, {
    src: "assets/chandeleer.png",
    alt: 'Image 5'
  }, {
    src: "assets/chandeleer.png",
    alt: 'Image 6'
  }    
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
    slidesPerView: 3,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      600: {
          slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    },
    spaceBetween: 0
  }



  images = images
  slidesperview: any

  swiper = new SwiperCore('.mySwiper', {
    slidesPerView: 3,
    breakpoints: {
        499: {
            slidesPerView: 1,
        },
        999: {
            slidesPerView: 2,
        }
    }
});


  constructor() { }

  ngOnInit(): void {
  }

}
