import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core'

const about: any = document.getElementById("over")


@Component({
  selector: 'app-header-new-new',
  templateUrl: './header-new-new.component.html',
  styleUrls: ['./header-new-new.component.scss']
})
export class HeaderNewNewComponent implements OnInit {
    header_variable = false

   

  @HostListener("document:scroll")
  scrollFunction() {
    console.log("scrollFunction")
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
      this.header_variable = true;
    }
    else {
      this.header_variable = false;
    }
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

  }


  constructor() { }

  ngOnInit(): void {

  }


  toAbout() {
    about.scrollIntoView();
  }


}
