import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  urlArticles:string = environment.urlArticle;
  constructor(private http:HttpClient) { }

  getArticles(){
    return this.http.get(this.urlArticles);
  }


}
