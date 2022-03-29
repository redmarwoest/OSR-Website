import { NgModule } from '@angular/core';
import { RouterModule, Routes, Params } from '@angular/router';
import { RenovatieComponent } from './pages/renovatie/renovatie.component';
import { VerkoopComponent } from './pages/verkoop/verkoop.component';
import { AdviesComponent } from './pages/advies/advies.component';
import { VerkoopDetailsComponent } from './pages/verkoop/verkoop-details/verkoop-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: { depth: 1 },
    loadChildren: () =>
      import('./pages/home/home.module').then((x) => x.HomeModule),
  },
  { path: 'renovatie', component: RenovatieComponent, data: { depth: 2 } },
  { path: 'team', component: TeamComponent, data: { depth: 2 } },
  { path: 'advies', component: AdviesComponent, data: { depth: 2 } },
  { path: 'verkoop', component: VerkoopComponent, data: { depth: 2 } },
  { path: ':id', component: VerkoopDetailsComponent, data: { depth: 3 } },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    BrowserAnimationsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
