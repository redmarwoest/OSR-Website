import { Component, OnInit } from '@angular/core';

const teams = [
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
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {
  teams = teams 

  constructor() { }

  ngOnInit(): void {
  }

}
