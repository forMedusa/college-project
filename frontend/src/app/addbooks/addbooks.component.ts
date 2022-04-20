import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  bookNumber=0;
addbooks={
  name:'',
  aName:'',
  quantity:0,
  book_no:[]
}
input(e:any){
  this.bookNumber=e.target.value;
  console.log(this.bookNumber)
}
output(){
  this.bookNumber=this.addbooks.quantity;
  console.log(this.bookNumber);
  const items:any=[];
  for(let i=1;i<=this.bookNumber;i++){
    items.push(i);
  }
  return items;
}
}
