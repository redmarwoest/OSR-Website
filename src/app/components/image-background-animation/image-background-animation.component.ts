import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-background-animation',
  templateUrl: './image-background-animation.component.html',
  styleUrls: ['./image-background-animation.component.scss']
})
export class ImageBackgroundAnimationComponent implements OnInit {
  @Input('title') title: any;
  @Input() styles: any = {};


  constructor() { }

  ngOnInit(): void {
  }

}
