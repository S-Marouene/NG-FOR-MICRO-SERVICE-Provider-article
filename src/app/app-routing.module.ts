import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article/article.component';
import { AddproviderComponent } from './components/provider/addprovider/addprovider.component';
import { UpdateComponent } from './components/provider/update/update.component';
import { ProviderListComponent } from './provider-list/provider-list.component';




const routes: Routes = [
  { path: '', component: ProviderListComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'provider', component: ProviderListComponent },
  { path: 'addprovider', component: AddproviderComponent },
  { path: 'updateprovider/:id', component: UpdateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
