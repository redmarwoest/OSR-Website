import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, animate, keyframes} from '@angular/animations';


@Component({
  selector: 'app-video-tekst',
  templateUrl: './video-tekst.component.html',
  styleUrls: ['./video-tekst.component.scss'],
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
export class VideoTekstComponent implements OnInit {
  @Input() video: any;
  @Input() title: any;
  @Input() secondTitle: any;
  @Input() paragraph: any


  constructor() { }

  ngOnInit(): void {
  }

}
