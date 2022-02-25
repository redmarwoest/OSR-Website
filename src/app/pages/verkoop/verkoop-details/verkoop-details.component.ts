import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HouseService } from 'src/app/app.service';


@Component({
  selector: 'app-verkoop-details',
  templateUrl: './verkoop-details.component.html',
  styleUrls: ['./verkoop-details.component.scss']
})
export class VerkoopDetailsComponent implements OnInit {
  house: any

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


