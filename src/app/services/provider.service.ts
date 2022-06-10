import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  urlProviders:string = environment.urlProvider;
  urlDelProvider: string = environment.urlDelProvider;

  constructor(private http:HttpClient) { }

  getProviders(){
    return this.http.get(this.urlProviders);
  }
  deleteProvider(providers:any){
    return this.http.delete(this.urlDelProvider+providers.id);
  }
}
