import { Component, OnInit } from '@angular/core';


const blocks = [
  {title: 'RENOVATIE & TRANSFORMATIE', img: 'assets/renovatie.svg', link: 'renovatie', imgGroot: 'assets/renovatie-groot.svg'},
  {title: 'AAN & VERKOOP', img: 'assets/aan&verkoop.svg', link: 'verkoop', imgGroot: 'assets/aan&verkoop-groot.svg'},
  {title: 'ADVIES', img: 'assets/advies.svg', link: 'advies', imgGroot: 'assets/advies-groot.svg'}
]


@Component({
  selector: 'app-front-blocks',
  templateUrl: './front-blocks.component.html',
  styleUrls: ['./front-blocks.component.scss']
})
export class FrontBlocksComponent implements OnInit {
blocks = blocks

  constructor() { }

  ngOnInit(): void {
  }

}
