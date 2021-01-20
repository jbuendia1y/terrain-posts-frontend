import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './components/app/app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PostTestComponent } from './components/post-test/post-test.component';
import { HomeComponent } from './components/home/home.component'

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
    path : 'first-post',
    component : PostTestComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    PostTestComponent,
    HomeComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
