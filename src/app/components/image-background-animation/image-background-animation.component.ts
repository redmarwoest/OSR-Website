import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-image-background-animation',
  templateUrl: './image-background-animation.component.html',
  styleUrls: ['./image-background-animation.component.scss'],
  animations: [
    trigger('titleAnimation', [
      transition(':enter', [ 
        style({ opacity: 0 }),
        animate('0.8s 0.4s ease', 
        keyframes([
          style({ opacity: 0, transform: 'translateY(40px)', offset: 0 }),
          style({ opacity: .5, transform: 'translateY(20px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ])),
      ]),
    ]),
  ]
})
export class ImageBackgroundAnimationComponent implements OnInit {
  @Input('title') title: any;
  @Input() styles: any = {};
  @Input() shadowStyle: any = {};




  constructor() { }

  ngOnInit(): void {
  }

}
