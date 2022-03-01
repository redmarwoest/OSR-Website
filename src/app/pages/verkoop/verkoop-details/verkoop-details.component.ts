import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HouseService } from 'src/app/app.service';
import SwiperCore, { Pagination, Swiper, SwiperOptions,  } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination,
]);


@Component({
  selector: 'app-verkoop-details',
  templateUrl: './verkoop-details.component.html',
  styleUrls: ['./verkoop-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VerkoopDetailsComponent implements OnInit {
  house: any

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


  constructor(private _location: Location,
              private activatedRoute:ActivatedRoute, 
              private houseService: HouseService, 
            ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((route: ParamMap) => {
      const id = route.get('id') as string;
      this.onGetHouse(+id)
    })
  }
    
  onGetHouse(id: number) {
    this.house = this.houseService.getHouse(id)

  }

  backClicked() {
    this._location.back()
  }
}


