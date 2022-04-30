import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:ApiServiceService) { }

  ngOnInit(): void {
  }
cpass:any
data={
  username:'',
  name:'',
  email:'',
  pass:'',
  institute:'',
  loggedin:false
}
 start(){
  this.service.postData(this.data).subscribe(res => {
    console.log('Result', res);
  })
 }
}
