import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-video-tekst',
  templateUrl: './video-tekst.component.html',
  styleUrls: ['./video-tekst.component.scss']
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
