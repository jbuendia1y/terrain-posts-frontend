import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http : HttpClient
  ) { }

  getAllPosts(){
    return this._http.get('https://terrain-posts-backend.herokuapp.com/api')
  }

  getPost(id:any){
    return this._http.get(`https://terrain-posts-backend.herokuapp.com/api/post/${id}`)
  }
}