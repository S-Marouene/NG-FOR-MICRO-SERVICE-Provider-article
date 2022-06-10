import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/article/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    ProviderListComponent,
    HeaderComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
