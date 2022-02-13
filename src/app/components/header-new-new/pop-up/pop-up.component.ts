import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from 'src/app/contact.service';

const sentences = [
  {picture: "assets/form.svg", paragraph: "Neem contact op via de telefoon, email of vul het digital form in" },
  {picture: "assets/time.svg", paragraph: "U ontvang vervolgens binnen 24 uur een vrijblijvend voorstel van ons" },
  {picture: "assets/hand.svg", paragraph: "We sluiten samen de overeenkomst na het bereiken van een akkoord" }
]

const sentencesTwo = [
  {paragraphTwo: "Verzekerd van een marktconforme prijs"},
  {paragraphTwo: "Vrijblijvend voorstel zonder voorbehoud financiering"},
  {paragraphTwo: "Geen makelaars- en notaris kosten"},
  {paragraphTwo: "Opbouw duurzame relatie met eventueel huurders"},
  {paragraphTwo: "Volledig begeleiding transparante werkwijze en vast aanspreekpunt"},
  {paragraphTwo: "Waarborging privacy"}
]

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  sentences = sentences
  sentencesTwo = sentencesTwo 
  @Input() private element: any;
  @Input() popup_variable = false
  

  FormData!: FormGroup;

  constructor( private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Phonenumber: new FormControl('', [Validators.required]),
      info1: new FormControl(''),
      info2: new FormControl(''),
      info3: new FormControl(''),
      info4: new FormControl(''),
      info5: new FormControl(''),
      
    
      })
  }

onSubmit(FormData: any) {
  console.log(FormData)
    this.contact.PostMessage(FormData)
    .subscribe(response => {
location.href = 'https://mailthis.to/confirm'
console.log(response)
}, error => {
console.warn(error.responseText)
console.log({ error })
})
}

  popUpRemove() {
    this.popup_variable = false
  }

}
