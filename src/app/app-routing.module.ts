import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article/article.component';
import { ProviderListComponent } from './provider-list/provider-list.component';




const routes: Routes = [
  { path: '', component: ProviderListComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'provider', component: ProviderListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
