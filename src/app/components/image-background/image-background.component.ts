import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-background',
  templateUrl: './image-background.component.html',
  styleUrls: ['./image-background.component.scss']
})
export class ImageBackgroundComponent implements OnInit {
  @Input() styles: any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
