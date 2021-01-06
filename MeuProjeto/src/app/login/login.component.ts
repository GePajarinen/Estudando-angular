import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() { }

  @ViewChild('f') courseForm!: NgForm;

  ngOnInit() {
   
  }
  aprovado: string = "no";
  public pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  autenticado(form: NgForm) {
    if ((form.value.email = this.pattern) && (form.value.password != "")){
      this.aprovado = "ok";
    }


  }

  onSubmit(form: NgForm) {
    console.log("Email : " + form.value.email);
    console.log("Senha : " + form.value.password);   
    }
    

}
/* Escolhi o Template-Driven Forms:
  -Template-driven form manage the logic inside the template 
  so in template-driven forms we don’t need to create FormControl 
  or FormGroup inside a component file.

  Thus, we can see that an object of type "NgForm" gets created 
  and we can access the values which the user entered by accessing them on the "value" property.
*/