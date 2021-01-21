import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service'
import { posts } from '../../interfaces/posts'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private api : ApiService
  ) { }

  postsData : posts[] = []
  images = []

  ngOnInit(): void {

    this.api.getAllPosts()
      .subscribe((res:any) => this.postsData = res,
        err=> console.log(err)
      )
  } 

}
