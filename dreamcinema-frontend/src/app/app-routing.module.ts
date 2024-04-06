import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './views/landingpage/landingpage.component';
import { BookComponent } from './views/book/book.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { AuthGuard } from './auth/auth.guard';
import { OverviewProfileComponent } from './components/overview-profile/overview-profile.component';
import { TicketsProfileComponent } from './components/tickets-profile/tickets-profile.component';
import { AdminPanelProfileComponent } from './components/admin-panel-profile/admin-panel-profile.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
  },
  {
    path: 'book/:id',
    component: BookComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: OverviewProfileComponent },
      {
        path: 'overview',
        component: OverviewProfileComponent,
      },
      {
        path: 'tickets',
        component: TicketsProfileComponent,
      },
      {
        path: 'admin-panel',
        component: AdminPanelProfileComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
