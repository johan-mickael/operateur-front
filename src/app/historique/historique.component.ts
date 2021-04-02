import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Historique } from './historique.model';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
data : Historique[];
message : string;
  constructor(private service : ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const success = response => {
      if (response['code'] == 200) {
        this.data = response['data'];
        console.log(this.data);
      } else if(response['code'] == 403){
        alert(response['message']);
        this.router.navigate(['login']);
      } else {
        this.message = response['message'];
      }
      console.log(response);
    }

    const error = response => {
      this.message = "Error";
    }
    this.service.getHistorique().subscribe(success, error);
  }
}
