import {Component, OnInit} from '@angular/core';
import {NewsServiceService} from '../news-service.service';
import {PagesService} from '../pages.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-cards',
  templateUrl: './news-cards.component.html',
  styleUrls: ['./news-cards.component.scss']
})
export class NewsCardsComponent implements OnInit {
  news$: any = [];
  pager: any = {};
  pagedItems: any = [];
  title: string;


  constructor(private http: NewsServiceService, private pages: PagesService, private router: Router) {
  }

  ngOnInit() {
    this.http.getNews().subscribe((res) => {
      this.news$ = res;
      this.news$ = Array.of(this.news$).map(elem => elem);
      this.setPage(1);
    });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pages.getPager(this.news$[0].articles.length, page);
    // get current page of items
    this.pagedItems = this.news$[0].articles.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  onSelect(title){
    this.router.navigate(['/news', title]);
  }

  onSearch(){
    if (this.title !== '') {
      this.pagedItems = this.pagedItems.filter((elem) => elem.title.toLowerCase().match(this.title.toLowerCase()));
    } else {
      this.ngOnInit();
    }
  }
}
