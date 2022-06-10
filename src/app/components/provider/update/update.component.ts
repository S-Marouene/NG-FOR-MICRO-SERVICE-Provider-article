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
      data =>{
        console.log(data);
       // this.name=data["name"];



      }
    );


  }


}
