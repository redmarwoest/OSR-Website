import { Component, OnInit, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core'
import { PopUpComponent } from './pop-up/pop-up.component';

const about: any = document.getElementById("over")

@Component({
  selector: 'app-header-new-new',
  templateUrl: './header-new-new.component.html',
  styleUrls: ['./header-new-new.component.scss'],
})
export class HeaderNewNewComponent implements OnInit {
    header_variable = false
    popup_variable: any 
    closed_variable:boolean = false 

  @ViewChild(PopUpComponent) child!: PopUpComponent; 

  onAddPopup() {
    this.child.popUpAdd()
  }

    
  @HostListener("document:scroll")
  scrollFunction() {
    if(document.body.scrollTop > 270 || document.documentElement.scrollTop > 270){
      this.header_variable = true;
    }
    else {
      this.header_variable = false;
    }
  }

  closeNav() {
    const ele = document.getElementById("check") as HTMLInputElement;
    ele.checked = false;
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  constructor() { }

  ngOnInit(): void {

  }

  toAbout() {
    document.getElementById("over")?.scrollIntoView({behavior:"smooth"})
  }
  






}
