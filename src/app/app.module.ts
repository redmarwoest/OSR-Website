import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';

import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { HomeComponent } from './pages/home/home.component';
import { RenovatieComponent } from './pages/renovatie/renovatie.component';
import { VerkoopComponent } from './pages/verkoop/verkoop.component';
import { AdviesComponent } from './pages/advies/advies.component';
import { VerkoopDetailsComponent } from './pages/verkoop/verkoop-details/verkoop-details.component';
import { ImageBackgroundAnimationComponent } from './components/image-background-animation/image-background-animation.component';
import { VideoTekstComponent } from './components/video-tekst/video-tekst.component';
import { HeaderNewNewComponent } from './components/header-new-new/header-new-new.component'
import { HomeModule } from './pages/home/home.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SplashScreenComponent,
    HomeComponent,
    RenovatieComponent,
    VerkoopComponent,
    AdviesComponent,
    VerkoopDetailsComponent,
    ImageBackgroundAnimationComponent,
    VideoTekstComponent,
    HeaderNewNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
