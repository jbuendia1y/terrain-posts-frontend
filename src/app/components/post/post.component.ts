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

  ngOnInit(): void {

    this.api.getPost(this.routeActive.snapshot.params.id)
      .subscribe((res:any) => this.post = res,
      err => console.log(err)
      )

  }

}
