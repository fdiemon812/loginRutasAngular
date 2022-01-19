import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {

  email!:string
  password!:string;
  constructor(private ls:LoginService) { }

  ngOnInit(): void {
  }

  login(){

   const user={
      email:this.email,
      password: this.password
    }

    this.ls.loginService(user).subscribe(data=>{
    localStorage.setItem('token', JSON.stringify(data))
      console.log(data);
    });

  };


  // onlogin() {
  //   this.authService.login();
  // }
 
  // onlogout() {
  //   this.authService.logout();
  // }

}
