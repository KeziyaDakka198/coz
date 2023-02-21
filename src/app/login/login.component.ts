import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}
  
    goToPage(pageName:String):void{
      this.router.navigate([`${pageName}`]);
    }     
}
export class LoginModel{
  email:any;
  password:any;
}


