import { Component, OnInit } from '@angular/core';
import {BikeService} from '../../services/bike/bike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  public bikes:any = {};

  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes(): void{
    this.bikeService.getBikes()
      .subscribe(
        data => {
          this.bikes = data;
        },
        err => console.error(err),
        () => console.log('bikes loaded')
      );
  }

}