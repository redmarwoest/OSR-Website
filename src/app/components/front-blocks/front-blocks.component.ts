import { Component, OnInit } from '@angular/core';


const blocks = [
  {title: 'RENOVATIE & TRANSFORMATIE', img: '../assets/renovatie.svg', link: 'renovatie'},
  {title: 'AAN & VERKOOP', img: '../assets/aan&verkoop.svg', link: 'verkoop'},
  {title: 'ADVIES', img: '../assets/advies.svg', link: 'advies'}
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
