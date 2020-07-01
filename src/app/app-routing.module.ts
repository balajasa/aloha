import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { ClockComponent } from './components/clock/clock.component';
import { AnimationComponent } from './components/animation/animation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent 
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'clock', 
    component: ClockComponent 
  },
  { 
    path: 'apartment', 
    component: ApartmentComponent 
  },
  { 
    path: 'animation', 
    component: AnimationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
