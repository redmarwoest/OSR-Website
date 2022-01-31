import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { FrontBlocksComponent } from '../../components/front-blocks/front-blocks.component';
import { CounterBlocksComponent } from '../../components/counter-blocks/counter-blocks.component';
import { ImageBackgroundComponent } from '../../components/image-background/image-background.component';
import { ImageTekstComponent } from '../../components/image-tekst/image-tekst.component';
import { HomeRoutingModule } from "./home-routing.module";
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
    return player;
  }

@NgModule({
    declarations: [
        FrontBlocksComponent,
        CounterBlocksComponent,
        ImageBackgroundComponent,
        ImageTekstComponent
    ],

    imports: [
        [
        RouterModule, 
        CommonModule, 
        HomeRoutingModule,
        LottieModule.forRoot({ player: playerFactory }),
    ]

    ],

    exports: [
        FrontBlocksComponent,
        CounterBlocksComponent,
        ImageBackgroundComponent,
        ImageTekstComponent
    ]
})

export class HomeModule {}