import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private articleService:ArticleService) { }
  articles:any;
  ngOnInit(): void {
    this.articleService.getArticles().subscribe(
      data=>{
        console.log(data);
        this.articles = data;
      }
    );
  }

}
