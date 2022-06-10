import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProviderService} from '../services/provider.service';
@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  constructor(private serviceProvider:ProviderService,
    private router: Router) { }
  providers:any;
  ngOnInit(): void {

    this.serviceProvider.getProviders().subscribe(
      data=>{
        this.providers = data;
      }
    );
  }

  deleteProvider(providers:any){
    console.log(providers);
    this.serviceProvider.deleteProvider(providers).subscribe(
      data=>{
        console.log(data);
        this.refreshListProvider()
      }
    );
  }

  refreshListProvider(){
    this.serviceProvider.getProviders().subscribe(
      data=>{
        //console.log(data);
        this.providers = data;
      }
    );
  }

  UpdateProvider(providers:any){
    this.router.navigate(['/updateprovider' + '/' + providers.id]);
  }

}
