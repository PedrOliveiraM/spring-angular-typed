import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './components/authors/authors.component';
import { BooksComponent } from './components/books/books.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  { path: '/books', component: BooksComponent },
  { path: '/categories', component: CategoriesComponent },
  { path: '/authors', component: AuthorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
