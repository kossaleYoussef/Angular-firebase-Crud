import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(public customer: CustomerService) { }

  submitted: boolean;
  formControls = this.customer.form.controls;

  ngOnInit() {
  }

  onSubmit() {

    this.submitted = true;
    /*if (this.customer.form.get('$key').value === null) {
      // insert
      this.submitted = false;
    } else {
      // update
    }*/
  }

}
