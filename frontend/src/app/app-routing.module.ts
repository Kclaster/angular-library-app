import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ToReadComponent } from './to-read/to-read.component';
import { HaveReadComponent } from './have-read/have-read.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  { path: 'to-read-books', component: ToReadComponent },
  {
    path: 'have-read',
    component: HaveReadComponent
  },
  {
    path: 'review/:id',
    component: AddReviewComponent
  },
  {
    path: 'update/:id',
    component: UpdateBookComponent
  },
  {
    path: '',
    redirectTo: 'to-read-books',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
