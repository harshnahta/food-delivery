import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:any;
  constructor(private service:AdminService) {
    this.service.countuser().subscribe(res=>{
      this.user=res;
    });
   }

   remove(email){
    // this.service.removeuser(email).subscribe(res=>{
    //   console.log("removed");
    // });

   }
  ngOnInit() {
  }

}
