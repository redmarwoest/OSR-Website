import { Component, OnInit, Input } from '@angular/core';



const houses = [
  {
    id: 1,
    imgPlaceholder: "assets/chandeleer.png", 
    type: "House",
    m2: "120",
    street: "Van Ostadestraat 46",
    city: "Amsterdam",
    status: "sold",
    information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    bedBad: "3/2",
    etage: "2/3"
  },
  {
    id: 2,
    imgPlaceholder: "assets/chandeleer.png", 
    type: "House",
    m2: "120",
    street: "Van Ostadestraat 46",
    city: "Amsterdam",
    status: "sold",
    information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    bedBad: "3/2",
    etage: "2/3"
  },
  {
    id: 3,
    imgPlaceholder: "assets/chandeleer.png", 
    type: "House",
    m2: "120",
    street: "Van Ostadestraat 46",
    city: "Amsterdam",
    status: "sold",
    information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    bedBad: "3/2",
    etage: "2/3"
  },
  {
    id: 4,
    imgPlaceholder: "assets/chandeleer.png", 
    type: "House",
    m2: "120",
    street: "Van Ostadestraat 46",
    city: "Amsterdam",
    status: "sold",
    information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    bedBad: "3/2",
    etage: "2/3"
  },
  {
    id: 5,
    imgPlaceholder: "assets/chandeleer.png", 
    type: "House",
    m2: "120",
    street: "Van Ostadestraat 46",
    city: "Amsterdam",
    status: "sold",
    information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    bedBad: "3/2",
    etage: "2/3"
  },
  {
    id: 6,
    imgPlaceholder: "assets/chandeleer.png", 
    type: "House",
    m2: "120",
    street: "Van Ostadestraat 46",
    city: "Amsterdam",
    status: "sold",
    information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    bedBad: "3/2",
    etage: "2/3"
  }
]

@Component({
  selector: 'app-house-detail-new',
  templateUrl: './house-detail-new.component.html',
  styleUrls: ['./house-detail-new.component.scss']
})
export class HouseDetailNewComponent implements OnInit {
  @Input() houses = houses


  constructor() { }

  ngOnInit(): void {
  }

}
