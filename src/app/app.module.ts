import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components/components.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ComponentsHomeComponent } from './extra/components-home/components-home.component';
import { NotFoundComponent } from './extra/not-found/not-found.component';
import { InstallationComponent } from './extra/installation/installation.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { RippleComponent } from './components/ripple/ripple.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
    ToolbarComponent,
    ComponentsHomeComponent,
    NotFoundComponent,
    InstallationComponent,
    SideNavComponent,
    SnackbarComponent,
    RippleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
