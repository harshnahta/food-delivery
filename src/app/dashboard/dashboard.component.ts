import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute, Params, Router , NavigationExtras} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user:any;
restaurent:any;
date=Date();
order:any;

  constructor(private service:AdminService,
    private router:Router) {
    this.service.countres().subscribe(res=>{
     this.restaurent=res;
     this.restaurent=this.restaurent.length;
    });
    this.service.countuser().subscribe(res=>{
      this.user=res;
      this.user=this.user.length;
    });
    this.service.countorder().subscribe(res=>{
      this.order=res;
      this.order=this.order.length;
    });
   }

  ngOnInit() {
  }

}
