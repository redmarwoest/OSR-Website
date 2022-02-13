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
  // house: {
  //   id: number, 
  //   imgPlaceholder: string, 
  //   type: string, 
  //   m2: string,
  //   street: string, 
  //   city: string, 
  //   status: string, 
  //   information: string, 
  //   bedBad:string, 
  //   etage:string
  //  }

  house=""

  constructor(private _location: Location,
              private activatedRoute:ActivatedRoute, 
              private houseService: HouseService, 
            ) { }

  ngOnInit(): void {
      console.log(this.activatedRoute.snapshot.params)
      this.house=this.activatedRoute.snapshot.params['city']

  }
    
    // onGetHouse(id: string) {
    //   this.houseService.getHouse(id).subscribe(
    //    response => {
    //     console.log(response)
    //       this.house = response;}
  
    //   )
    // }
    

  
  backClicked() {
    this._location.back()
  }
}
