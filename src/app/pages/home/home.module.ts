import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { FrontBlocksComponent } from '../../components/front-blocks/front-blocks.component';
import { CounterBlocksComponent } from '../../components/counter-blocks/counter-blocks.component';
import { ImageBackgroundComponent } from '../../components/image-background/image-background.component';
import { ImageTekstComponent } from '../../components/image-tekst/image-tekst.component';
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
    declarations: [
        FrontBlocksComponent,
        CounterBlocksComponent,
        ImageBackgroundComponent,
        ImageTekstComponent
    ],

    imports: [
        [RouterModule, CommonModule, HomeRoutingModule]
    ],

    exports: [
        FrontBlocksComponent,
        CounterBlocksComponent,
        ImageBackgroundComponent,
        ImageTekstComponent
    ]
})

export class HomeModule {}