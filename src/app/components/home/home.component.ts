import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'

import { ApiService } from '../../services/api.service'
import { posts } from '../../interfaces/posts'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private api : ApiService,
    private title : Title,
    private meta : Meta
  ) { }

  postsData : posts[] = []
  images = []

  ngOnInit(): void {
    this.api.getAllPosts()
      .subscribe((res:any) => this.postsData = res,
        err=> console.log(err)
      )
    
    this.SetMetaTags()
  }

  SetMetaTags(){
    this.title.setTitle('Posts')
    this.meta.updateTag({name : 'description', content : 'Home Page'})

    this.meta.updateTag({property : 'og:title', content : 'Posts'})
    this.meta.updateTag({property : 'og:description', content : 'Home Page'})
    this.meta.updateTag({property : 'og:img', content : ''})
  }

}
