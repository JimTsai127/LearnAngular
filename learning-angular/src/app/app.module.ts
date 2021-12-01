import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { MatchesStringPipe } from './matches-string.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import { BorderHoverStyleDirective } from './border-hover-style.directive';
import { MessagesComponent } from './messages/messages.component';
import {CreateComponentComponent, CreateDialog} from './create-component/create-component.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {MatChipsModule} from "@angular/material/chips";
import {MatDialogModule} from "@angular/material/dialog";
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    MatchesStringPipe,
    HoverStyleDirective,
    BorderHoverStyleDirective,
    MessagesComponent,
    CreateComponentComponent,
    CreateDialog,
    ContentDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatChipsModule,
    MatDialogModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false,
        delay: 1000 }),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'content/:id', component: ContentDetailComponent },
      { path: '', component: ContentListComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
