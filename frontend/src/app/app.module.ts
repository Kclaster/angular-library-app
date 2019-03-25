import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToReadComponent } from './to-read/to-read.component';
import { HaveReadComponent } from './have-read/have-read.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ToReadComponent,
    HaveReadComponent,
    UpdateBookComponent,
    AddReviewComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
