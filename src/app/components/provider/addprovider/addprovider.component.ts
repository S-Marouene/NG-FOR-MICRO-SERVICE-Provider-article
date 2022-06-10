import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-addprovider',
  templateUrl: './addprovider.component.html',
  styleUrls: ['./addprovider.component.css']
})
export class AddproviderComponent implements OnInit {

  constructor(private serviceProvider:ProviderService,
    private router: Router,) { }

  ngOnInit(): void {
  }

  addProvider(formumaire: NgForm) : void{
    console.log(formumaire.value);
    console.log(formumaire.value.Adress);


    this.serviceProvider.addProvider(formumaire.value).subscribe({
      next: (provider) => {
        console.log("success")
        this.router.navigate(['/provider']);
      },
      error: () => {
      },
    });



  }

}
