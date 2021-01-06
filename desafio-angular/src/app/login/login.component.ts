import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
   
  }
  @ViewChild('f') courseForm!: NgForm;

  onSubmit(form: NgForm) {
    console.log("Nome de usuário : " + form.value.userName);
    console.log("Senha : " + form.value.password);   
    }

}

//Thus, we can see that an object of type "NgForm" gets created 
//and we can access the values which the user entered by accessing them on the "value" property.