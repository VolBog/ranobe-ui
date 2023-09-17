import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovelListComponent } from './components/novel/novel-list/novel-list.component';
import { NovelDetailsComponent } from './components/novel/novel-details/novel-details.component';
import { AddNovelComponent } from './components/novel/add-novel/add-novel.component';
const routes: Routes = [
  { path: '', redirectTo: 'novels', pathMatch: 'full' },
  { path: 'novels', component: NovelListComponent },
  { path: 'novel/:id', component: NovelDetailsComponent },
  { path: 'add', component: AddNovelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
