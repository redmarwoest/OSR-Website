import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit {
  windowWidth: any;
  showSplash = true;

  options: AnimationOptions = {
    path: 'assets/data.json',
  };

  animationCreated(animationItem: AnimationItem): void {}

  ngOnInit(): void {
    setTimeout(() => {
      this.windowWidth = '-' + window.innerWidth + 'px';

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 500);
    }, 4200);
  }
}
