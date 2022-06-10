import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/article/article/article.component';
import { AddproviderComponent } from './components/provider/addprovider/addprovider.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './components/provider/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    ProviderListComponent,
    HeaderComponent,
    ArticleComponent,
    AddproviderComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
