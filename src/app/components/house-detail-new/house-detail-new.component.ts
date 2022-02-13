import { Component, OnInit, Input } from '@angular/core';
import { HouseService } from 'src/app/app.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-house-detail-new',
  templateUrl: './house-detail-new.component.html',
  styleUrls: ['./house-detail-new.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('400ms', [
          animate('0.8s 0.8s ease', keyframes([
            style({ opacity: 0, transform: 'translateY(40px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(20px) scale(1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),
      ]),
    ]),
  ]
})
export class HouseDetailNewComponent implements OnInit {

  houses: {
                id: number, 
                imgPlaceholder: string, 
                type: string, 
                m2: string,
                street: string, 
                city: string, 
                status: string, 
                information: string, 
                bedBad:string, 
                etage:string
               } [] = []

  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
    this.houses = this.houseService.getHouses()
  }

}
