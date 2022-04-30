import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private service:ApiServiceService) { }

  ngOnInit(): void {
    this.func();
  }
  bacchaKaData:any;
func(){
  this.service.getUsers().subscribe(item =>{
    //console.log(item)
    this.bacchaKaData=item.data;
  });
    console.log(this.bacchaKaData);
    // for(let i=0;i<4;i++){
    //   console.log(this.a[i]);
    //   console.log(this.a['data']);
    // }
  
  //console.log(this.a);
}
}
