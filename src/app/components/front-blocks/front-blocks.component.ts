import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';


const blocks = [
  {title: 'RENOVATIE & TRANSFORMATIE', img: 'assets/renovatie.svg', link: 'renovatie', imgGroot: 'assets/renovatie-groot.svg'},
  {title: 'AAN & VERKOOP', img: 'assets/aan&verkoop.svg', link: 'verkoop', imgGroot: 'assets/aan&verkoop-groot.svg'},
  {title: 'ADVIES', img: 'assets/advies.svg', link: 'advies', imgGroot: 'assets/advies-groot.svg'}
]


@Component({
  selector: 'app-front-blocks',
  templateUrl: './front-blocks.component.html',
  styleUrls: ['./front-blocks.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('400ms', [
          animate('0.8s 4.6s ease', keyframes([
            style({ opacity: 0, transform: 'translateY(40px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(20px) scale(1)', offset: 0.3 }),
            style({ opacity: 0.8, transform: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),
      ]),
    ]),
  ]
})
export class FrontBlocksComponent implements OnInit {
blocks = blocks

options: AnimationOptions = {
  path: 'assets/data_load.json',
};


animationCreated(animationItem: AnimationItem): void {
  console.log(animationItem);
}

  constructor() { }


  ngOnInit(): void {
  }

}
