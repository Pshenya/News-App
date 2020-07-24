import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NewsServiceService} from '../news-service.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  id: string;
  news$: any = [];
  newsData$: any = {};
  constructor(private activateRoute: ActivatedRoute, private http: NewsServiceService, private router: Router) {
  }
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.http.getNews().subscribe((res) => {
      this.news$ = res;
      this.news$ = Array.of(this.news$).map(elem => elem);
      this.newsData$ = this.news$[0].articles.find((elem) => elem.title === this.id);
    });
  }

  goBack(){
    this.router.navigate(['news']);
  }

}
