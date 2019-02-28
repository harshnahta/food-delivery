import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrls: ['./restaurent.component.css']
})
export class RestaurentComponent implements OnInit {
resdetail:any;
  constructor(private service:AdminService) {
    this.service.countres().subscribe(res=>{
      this.resdetail=res;
    });
   }

  ngOnInit() {
  }
  remove(resname){
    this.service.removeres(resname).subscribe(res=>{
    alert("removed");
    });
    }

}
