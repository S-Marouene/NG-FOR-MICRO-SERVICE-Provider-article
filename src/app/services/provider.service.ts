import { Injectable, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  urlProviders:string = environment.urlProvider;
  urlDelProvider: string = environment.urlDelProvider;
  urlAddProvider: string = environment.urlAddProvider;
  urlProvidersByID: string = environment.urlProvidersByID;

  constructor(private http:HttpClient) { }

  getProviders(){
    return this.http.get(this.urlProviders);
  }
  deleteProvider(providers:any){
    return this.http.delete(this.urlDelProvider+providers.id);
  }

  addProvider(provider: Provider): Observable<Provider> {
    return this.http.post<Provider>(this.urlAddProvider, provider );
  }

  getProvidersbyID(id:any){
    return this.http.get(this.urlProvidersByID+id);
  }
}
