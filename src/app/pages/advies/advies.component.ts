import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, style, transition, animate, keyframes} from '@angular/animations';
import { PopUpComponent } from 'src/app/components/header-new-new/pop-up/pop-up.component';

@Component({
  selector: 'app-advies',
  templateUrl: './advies.component.html',
  styleUrls: ['./advies.component.scss'],
  animations: [
    trigger('titleAnimation', [
      transition(':enter', [ 
        style({ opacity: 0 }),
        animate('0.8s 0.8s ease', 
        keyframes([
          style({ opacity: 0, transform: 'translateY(40px)', offset: 0 }),
          style({ opacity: .5, transform: 'translateY(20px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ])),
      ]),
    ]),
  ]
})
export class AdviesComponent implements OnInit {

  @ViewChild(PopUpComponent) child!: PopUpComponent; 

  onAddPopup() {
    this.child.popUpAdd()
  }

  constructor() { }

  ngOnInit(): void {
  }


}
