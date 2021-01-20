import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service'
import { img } from '../../interfaces/img'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor(
    private api : ApiService
    ) { }

  images: img[] = []
  n:number = 0
  position:string = ""

  ngOnInit(): void {
    this.api.getImages()
      .subscribe((res:any) => {
        this.images = res; 
        this.position = this.images[0].url
      },
        err => console.log(err))
  }


  prev(){
    document.getElementById('imgchange')?.classList.add('animate__lightSpeedInRight')
    setTimeout(()=>{
      document.getElementById('imgchange')?.classList.remove('animate__lightSpeedInRight')
    },700)

    if(this.n > 0) this.n--;
    else if(this.n == 0)this.n = this.images.length - 1
    this.position= this.images[this.n].url

  }

  next(){
    document.getElementById('imgchange')?.classList.add('animate__lightSpeedInLeft')
    setTimeout(()=>{
      document.getElementById('imgchange')?.classList.remove('animate__lightSpeedInLeft')
    },700)

    if(this.n < this.images.length - 1) this.n++;
    else if(this.n == this.images.length - 1) this.n = 0
    this.position = this.images[this.n].url

  }

}
