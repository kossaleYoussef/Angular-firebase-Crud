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
  showSuccessMessage: boolean;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.customer.form.valid) {
      if (this.customer.form.get('$key').value === null) {
        this.customer.insertCustomer(this.customer.form.value);
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 4000);
        this.submitted = false;
        this.customer.form.reset();
      } else {
        this.customer.updateCustomer(this.customer.form.value);
      }
    }
  }

}
