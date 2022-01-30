import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-description-blocks',
  templateUrl: './description-blocks.component.html',
  styleUrls: ['./description-blocks.component.scss']
})
export class DescriptionBlocksComponent implements OnInit {
  @Input() title: any;
  @Input() paragraph: any;
  @Input() button: any;
  @Input() infoOne: any;
  @Input() infoTwo: any;
  @Input() infoThree: any;


  constructor() { }

  ngOnInit(): void {
  }

}
