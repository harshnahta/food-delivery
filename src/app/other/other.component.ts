import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import {  Router, Route } from '@angular/router';
@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  orderdetail:any;
  constructor(private service:AdminService,
    private router:Router) 
  {
    this.service.resdetail().subscribe(res=>{
      this.orderdetail=res;
    });
   }

  ngOnInit() {
  }
  // ngAfterContentChecked(){
  //   //this.router.navigate(['/other']);
  // }
  // ngAfterViewChecked(){
  //   this.router.navigate(['/other']);
  //   //console.log('h');
  // }
remove(id){
this.service.removeorder(id).subscribe(res=>{
alert("removed");

});
}
}
