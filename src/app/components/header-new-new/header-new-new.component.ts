import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core'



@Component({
  selector: 'app-header-new-new',
  templateUrl: './header-new-new.component.html',
  styleUrls: ['./header-new-new.component.scss']
})
export class HeaderNewNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  header_variable = true

  @HostListener("document:scroll")
  scrollFunction() {
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
      this.header_variable = true;
    }
    else {
      this.header_variable = false;
    }
  }


}
