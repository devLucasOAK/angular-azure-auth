import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicrosoftauthGuard } from './microsoftauth.guard';
import { PublicPageComponent } from './pages/public-page/public-page.component';
import { RestrictedPageComponent } from './pages/restricted-page/restricted-page.component';

const routes: Routes = [
  {
    path: 'public-page',
    component: PublicPageComponent
  },
  {
    path: 'restricted-page',
    component: RestrictedPageComponent,
    canActivate: [MicrosoftauthGuard]
  },
  {
    path: '**',
    component: PublicPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
