import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'
import { IvyCarouselModule } from 'angular-responsive-carousel'

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';

const routes:Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'home'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'post/:id',
    component : PostComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
