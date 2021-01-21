import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

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
    private api : ApiService
  ) { }

  post : posts[] = []
  images:any = []
  gallery:boolean = false

  ngOnInit(): void {

    this.api.getPost(this.routeActive.snapshot.params.id)
      .subscribe((res:any) => {
        this.post = res;
        this.setImages()
      },
      err => console.log(err)
      )
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
    this.gallery = !this.gallery
  }

}
