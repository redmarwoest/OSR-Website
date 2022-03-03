import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

const teams = [
  {image: "assets/Image 4.png", 
  name: "Oscar van der Mark", 
  functie: "Founder",
  paragraph: "OSR Real Estate is een jong en dynamisch bedrijf. In november 2019 is er gestart met het investeren in residentieel vastgoed. In de daaropvolgende tijd is er stevig gebouwd aan een actief en betrouwbaar netwerk. "
  },
  {image: "assets/Foto_Oscar.jpg", 
  name: "Oscar van der Mark", 
  functie: "Founder",
  paragraph: "OSR Real Estate is een jong en dynamisch bedrijf. In november 2019 is er gestart met het investeren in residentieel vastgoed. In de daaropvolgende tijd is er stevig gebouwd aan een actief en betrouwbaar netwerk. "
  },
  {image: "assets/Foto_Oscar.jpg", 
  name: "Oscar van der Mark", 
  functie: "Founder",
  paragraph: "OSR Real Estate is een jong en dynamisch bedrijf. In november 2019 is er gestart met het investeren in residentieel vastgoed. In de daaropvolgende tijd is er stevig gebouwd aan een actief en betrouwbaar netwerk. "
  },
  {image: "assets/Foto_Oscar.jpg", 
  name: "Oscar van der Mark", 
  functie: "Founder",
  paragraph: "OSR Real Estate is een jong en dynamisch bedrijf. In november 2019 is er gestart met het investeren in residentieel vastgoed. In de daaropvolgende tijd is er stevig gebouwd aan een actief en betrouwbaar netwerk. "
  }
]

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
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
export class TeamMemberComponent implements OnInit {
  teams = teams 

  constructor() { }

  ngOnInit(): void {
  }

}
