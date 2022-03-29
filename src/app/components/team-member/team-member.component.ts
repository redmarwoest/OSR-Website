import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
} from '@angular/animations';

const teams = [
  {
    image: 'assets/Foto_Oscar.jpg',
    name: 'Oscar van der Mark',
    functie: 'Oprichter',
    paragraph:
      'Oscar van der Mark is de oprichter van OSR RE. Hij richtte het bedrijf op in 2019 toen hij zijn eerste pand in Den Haag aankocht. Na zijn studie aan de Hotelschool The Hague in Amsterdam is hij het vastgoed in gegaan. Eerst was hij werkzaam bij CBRE waarna hij na enkele jaren de volgende uitdaging aanging bij Annexum Invest.',
  },
  {
    image: 'assets/Foto_Oscar.jpg',
    name: 'Fleur Benerink',
    functie: 'Hoofd Styling',
    paragraph:
      'Fleur Benerink is de oprichter van ARC & Ciel Amsterdam (A&C). Naast haar werkzaamheden bij A&C is Fleur ook verantwoordelijk voor de inrichting en sfeer keuzes bij de renovatie projecten.',
  },
  {
    image: 'assets/Foto_Oscar.jpg',
    name: 'Rutger de bree',
    functie: 'Hoofd Investering',
    paragraph:
      'Rutger de Bree is verantwoordelijk voor het aanbrengen van nieuwe investering mogelijkheden. Rutger en Oscar kennen elkaar van hun periode bij CBRE. Rutger is daar blijven werken totdat hij de overstap maakte naar OSR RE. ',
  },
];

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(
          ':enter',
          stagger('400ms', [
            animate(
              '0.8s 0.8s ease',
              keyframes([
                style({ opacity: 0, transform: 'translateY(40px)', offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(20px) scale(1)',
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class TeamMemberComponent implements OnInit {
  teams = teams;

  constructor() {}

  ngOnInit(): void {}
}
