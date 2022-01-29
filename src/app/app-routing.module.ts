import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenovatieComponent } from './pages/renovatie/renovatie.component';
import { VerkoopComponent } from './pages/verkoop/verkoop.component';
import { AdviesComponent } from './pages/advies/advies.component';
import { VerkoopDetailsComponent } from './pages/verkoop/verkoop-details/verkoop-details.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', pathMatch:'full', loadChildren: () => import( './pages/home/home.module').then(x => x.HomeModule)},
  { path: 'renovatie', component: RenovatieComponent},
  { path: 'advies', component: AdviesComponent},
  { path: 'verkoop', component: VerkoopComponent},
  { path: ':id', component: VerkoopDetailsComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled', useHash: true }), BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
