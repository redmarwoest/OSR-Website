import { Component, OnInit, Input } from '@angular/core';
import { HostListener } from '@angular/core'

const pictures = [
  {image: "assets/Image 4.png", tekst: "hi"},
  {image: "assets/Image 4.png", tekst: "hi"},
]

@Component({
  selector: 'app-image-background',
  templateUrl: './image-background.component.html',
  styleUrls: ['./image-background.component.scss'],
})
export class ImageBackgroundComponent implements OnInit {
  @Input() styles: any = {}
  pictures: any;
  

showSlides() {
  let slideIndex = 0;
  let i;
  let slides = (document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>)
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(this.showSlides, 2000); 
}


  background_variable = false

  @HostListener("document:scroll")
  scrollFunction() {
    console.log("scrollFunction")
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
      this.background_variable = true;
    }
    else {
      this.background_variable = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.showSlides()
  }

}
