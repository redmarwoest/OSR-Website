import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenovatieComponent } from './pages/renovatie/renovatie.component';
import { VerkoopComponent } from './pages/verkoop/verkoop.component';
import { AdviesComponent } from './pages/advies/advies.component';
import { VerkoopDetailsComponent } from './pages/verkoop/verkoop-details/verkoop-details.component'

const routes: Routes = [

  { path: 'renovatie', component: RenovatieComponent},
  { path: 'advies', component: AdviesComponent},
  { path: 'verkoop', component: VerkoopComponent},
  { path: 'verkoop/:id', component: VerkoopDetailsComponent},
  { path: '', loadChildren: () => import( './pages/home/home.module').then(x => x.HomeModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
