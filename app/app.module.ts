import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { BodyComponent } from './body.component';
import { FooterComponent } from './footer.component';
import { TweetListComponent } from './tweet-list.component';
@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, HeaderComponent, BodyComponent, FooterComponent, TweetListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
