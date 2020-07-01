import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { HomeComponent } from './components/home/home.component';
import { ClockComponent } from './components/clock/clock.component';
import { WorksComponent } from './components/works/works.component';
import { AnimationComponent } from './components/animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ApartmentComponent,
    HomeComponent,
    ClockComponent,
    WorksComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
