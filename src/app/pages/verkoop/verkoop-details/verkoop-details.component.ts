import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-verkoop-details',
  templateUrl: './verkoop-details.component.html',
  styleUrls: ['./verkoop-details.component.scss']
})
export class VerkoopDetailsComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }
  
  backClicked() {
    this._location.back()
  }
}
