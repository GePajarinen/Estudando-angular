import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private router:Router) { }

  //@ViewChild('f') loginForm!: NgForm;

  onSubmit(form: NgForm) {
    console.log("Email : " + form.value.email);
    console.log("Senha : " + form.value.password);
    this.router.navigate(['/usuarios']);
  }
    

}
/* Escolhi o Template-Driven Forms:
  -Template-driven form manage the logic inside the template 
  so in template-driven forms we donâ€™t need to create FormControl 
  or FormGroup inside a component file.

  Thus, we can see that an object of type "NgForm" gets created 
  and we can access the values which the user entered by accessing them on the "value" property.
*/