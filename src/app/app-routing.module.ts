import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComponentsComponent } from './components/components/components.component';
import { ComponentsHomeComponent } from './extra/components-home/components-home.component';
import { InstallationComponent } from './extra/installation/installation.component';
import { NotFoundComponent } from './extra/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { RippleComponent } from './components/ripple/ripple.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "installation",
    component: InstallationComponent
  },
  {
    path: "components",
    component: ComponentsComponent,
    children: [
      {
        path: "",
        pathMatch: 'full',
        component: ComponentsHomeComponent
      },
      {
        path: "navbar",
        component: ToolbarComponent
      },
      {
        path: "ripple",
        component: RippleComponent
      },
      {
        path: "sidenav",
        component: SideNavComponent
      },
      {
        path: "snackbar",
        component: SnackbarComponent
      }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
