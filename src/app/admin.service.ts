import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpParams, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url="http://localhost:3000";
  constructor(private http: HttpClient,private router:Router) { }
 
  countres(){
    
   return this.http.get(this.url+'/countres');
  }
  countuser(){
    
    return this.http.get(this.url+'/countuser');
  }
  countorder(){
    return this.http.get(this.url+'/countorder');
  }
  resdetail(){
    return this.http.get(this.url+'/orderdetailadmin');
  }
  removeuser(user){
    let params:HttpParams=new HttpParams().set('cusEmail',user);
    return this.http.get(this.url+'/deleteuser',{params});
  }
  removeres(res){
    let params:HttpParams=new HttpParams().set('resName',res);
    return this.http.get(this.url+'/deleteres',{params});
  }
  removeorder(order){
    let params:HttpParams=new HttpParams().set('_id',order);
    return this.http.get(this.url+'/deleteorder',{params});
  }
}
