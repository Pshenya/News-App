import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Angular Material modules
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NewsServiceService} from './news-service.service';
import {PagesService} from './pages.service';

import { NewsCardsComponent } from './news-cards/news-cards.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  {path: 'news', component: NewsCardsComponent},
  {path: 'news/:id', component: NewsDetailsComponent},
  {path: '', component: AboutComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NewsCardsComponent,
    NewsDetailsComponent,
    ToolbarComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [NewsServiceService, PagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
