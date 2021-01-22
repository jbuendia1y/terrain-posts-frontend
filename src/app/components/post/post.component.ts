import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Title, Meta } from '@angular/platform-browser'

import { posts } from '../../interfaces/posts'
import { ApiService } from '../../services/api.service'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(
    private routeActive : ActivatedRoute,
    private api : ApiService,
    private title : Title,
    private meta : Meta
  ) { }

  post : posts[] = []
  images:any = []
  gallery:boolean = false
  nImages : any[] = [1,'contain']

  ngOnInit(): void {
    //Data Api
    this.api.getPost(this.routeActive.snapshot.params.id)
      .subscribe((res: any) => {
        this.post = res;
        //Images for Carousel
        this.setImages();
        //Set MetaTags
        this.setMetaTags(this.post[0])
      },err => console.log(err));

      this.windowSize()
  }

  windowSize(){
    if(window.screen.width >= 1024){
      this.nImages[0] = 2
      this.nImages[1] = 'cover'
    }else {
      this.nImages[0] = 1
      this.nImages[1] = 'contain'
    }

    addEventListener('resize',()=>{
      if(window.screen.width >= 1024){
        this.nImages[0] = 2
        this.nImages[1] = 'cover'
      }else {
        this.nImages[0] = 1
        this.nImages[1] = 'contain'
      }
    })
  }

  setImages(){
    //Reduce the number of images
    let n = Math.ceil(this.post[0].images.length*(50/100))
    
    for(let i=0;i<n;i++){
      this.images.push({
        path : this.post[0].images[i]
      })
    }
  }

  viewGallery(){
    this.gallery = !this.gallery;
    const gallery = document.getElementById('galleryPhotos')
    const body = document.getElementById('body')

    body?.classList.toggle('overflow-hidden')
    gallery?.classList.toggle('galleryPhotos__active')
  }

  setMetaTags(data:posts){
    this.title.setTitle(data.title)
    this.meta.updateTag({name : 'description', content : data.description.title})

    //Data for Facebook
    this.meta.updateTag({property : 'og:title', content : data.title})
    this.meta.updateTag({property : 'og:description', content : data.description.title})
    this.meta.updateTag({property : 'og:img', content : data.images[0]})
  }

}
