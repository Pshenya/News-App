import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  apiUrl = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=205248d73ed844cbbd1d4dc6e328fc47';

  constructor(private http: HttpClient) {
  }

  getNews(){
    return this.http.get(this.apiUrl);
  }
}
