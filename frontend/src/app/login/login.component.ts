import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ApiServiceService,
                private route:Router) { }

  ngOnInit(): void {
  }
loggedin:any;
 uname:any;
 upass:any;
userData={
  email:'',
  pass:''
}
loginRes='';
check(){
  console.log(this.userData.email);
  console.log(this.userData.pass);
}
userExist(){
  this.service.getOneUser(this.userData.email).subscribe(res=>{
    console.log(res);
    this.uname=res.data.name;
    this.upass=res.data.pass;
    
    if(this.uname==this.userData.email && this.upass==this.userData.pass){
      console.log("LoggedIn Successfully");
      this.loginRes="LoggedIn Successfully";
      //this.loggedin=res.data.loggedin;
      sessionStorage.setItem("name",res.data.name);
      this.route.navigateByUrl('/home-page');
    }
    else if(this.uname==this.userData.email && this.upass!=this.userData.pass || this.uname!=this.userData.email && this.upass==this.userData.pass){
      console.log("Invalid Credentials");
      this.loginRes="Invalid Credentials";
    }
  })
  
  // if(this.uname==this.userData.email && this.upass==this.userData.pass){
  // this.service.updateUserData(this.uname,this.loggedin).subscribe(result=>{
  //   console.log(result)
  // });
  //}
}
}
