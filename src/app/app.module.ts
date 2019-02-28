import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
// import {MatIconModule} from '@angular/material/icon';

import{HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserComponent } from './user/user.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { OtherComponent } from './other/other.component';
import { SideComponent } from './side/side.component';
import { UpComponent } from './up/up.component';
const appRoutes: Routes = [

  {path: '',redirectTo:'home',pathMatch:'full'},
 {path: 'home',component:DashboardComponent},
 {path: 'user',component:UserComponent},
 {path: 'restaurent',component:RestaurentComponent},
 {path: 'other',component:OtherComponent}

 
 
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainpageComponent,
    UserComponent,
    RestaurentComponent,
    OtherComponent,
    SideComponent,
    UpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
      
    )
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
