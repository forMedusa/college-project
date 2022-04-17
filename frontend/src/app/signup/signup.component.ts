import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
name:any;
email:any;
pass:any;
cpass:any

 start(){
   console.log(this.name);
   console.log(this.email);
   console.log(this.pass);
   console.log(this.cpass);
 }
}
