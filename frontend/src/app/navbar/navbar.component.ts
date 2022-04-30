import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:ApiServiceService) { }

  ngOnInit(): void {
    this.checkifLoggedin();
  }
  loggedin:any;
 checkifLoggedin(){
   if(sessionStorage.length>0){
this.service.getOneUser(sessionStorage.getItem('name')).subscribe(item=>{
  if(item.data.name==sessionStorage.getItem('name')){
    this.loggedin=true;
  }
})
 }
}
 logout(){
  this.loggedin=false;
   sessionStorage.clear();
 }
}
