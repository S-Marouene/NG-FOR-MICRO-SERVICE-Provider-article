import { Component, OnInit, Provider } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  private id:any;
  private name:any;
  private address:any;
  private provider: any;
  private providerToUpdate:any;


  constructor(private serviceProvider:ProviderService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params=>{
        this.id = params.get('id');
        alert(this.id)
      }
    )

    this.providerToUpdate = this.serviceProvider.getProvidersbyID(this.id).subscribe(
      data => {
        this.provider = data;
        this.name = this.provider.name;
        this.address = this.provider.address;
        //console.log(this.providerOld);
      }
    );


  }

  updateProvider(){

    this.provider= {
      "id":this.id,
      "name":this.name,
      "address":this.address
    };

    this.serviceProvider.updateProvider(this.provider).subscribe(
      data=>
      {
        console.log(data);
        this.router.navigate(["provider"]);
      }

    );
  }


}
