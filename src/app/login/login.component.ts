import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistrationService } from '../shared/user-registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginUserData:FormGroup

  constructor(private fb:FormBuilder, private userregistrationService:UserRegistrationService,private router:Router) { 
   
    this.LoginUserData = this.fb.group({
      email:['',[Validators.required,Validators.email,Validators.pattern(this.emailRegex)]],
      password:['',[Validators.required,Validators.minLength(3),Validators.pattern(this.pattern)]]
     })

  }
  pattern= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   
  ngOnInit(): void {
  }
  
  onLoginForm(){
    if(this.LoginUserData.valid){
      this.userregistrationService.LoginUser(this.LoginUserData.value).subscribe(data=>{
        if(data.Status ==401){
          alert( data.Message)
        }else{
          localStorage.setItem('token' ,data.token);
          this.router.navigateByUrl('/all-user')
        }
      })
    } else {
        alert("Not Valid")
    }
    this.LoginUserData.reset()
   
  }
  

}
