import { Component, OnInit } from '@angular/core';
import {BikeService} from '../../services/bike/bike.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  models: string[] = [
    'Globo MTB 29 Suspension',
    'Globo Carbon Fiber Race Series',
    'Globo Time Trial Blade'
  ];
  public bikeForm: FormGroup;
  validMessage: string = '';

  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.bikeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  submitRegistration(): void{
    if(this.bikeForm.valid){
      this.validMessage = 'Your bike registration has been submitted, Thank you!';
      this.bikeService.createBigRegistration(this.bikeForm.value).subscribe(
        data => {
          this.bikeForm.reset();
          return true;
        },
        error =>{
          return Observable.throw(error);
        }
      );
    }else{
      this.validMessage = 'Please fill out the form before submitting';
    }
  }

}
