import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(){}

  ngOnInit(){}

  toogleMenu(e:any){
    e.parentElement?.nextElementSibling?.classList.toggle('list__active')
  }
}
