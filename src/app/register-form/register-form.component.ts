import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistrationService } from '../shared/user-registration.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  RegisterUserData:FormGroup;
  //For User Login
  // LoginUserData:FormGroup
  constructor(private fb:FormBuilder, private userregistrationService:UserRegistrationService,private router:Router) {
    // For User Registration
    this.RegisterUserData = this.fb.group({
      name:['',[Validators.required]],
      lname:['',[Validators.required]],
      email:['',[Validators.required,Validators.email,Validators.pattern(this.emailRegex)]],
      passwords:['',[Validators.required,Validators.minLength(3),Validators.pattern(this.pattern)]],
      Phone:['',[Validators.required,Validators.pattern(this.phoneno)]]
     })

   }
   pattern= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  ngOnInit(): void {
  }

// For User  Registration
onSubmit(){
  if(this.RegisterUserData.valid){
    // console.log(this.RegisterUserData.value);
    this.userregistrationService.SubmitUser(this.RegisterUserData.value).subscribe(data=>{
      if(data.Status ==401){
       alert( data.Message)
       
      }else{
        this.router.navigateByUrl('/login')
      }

    })
  } else {
      alert("Not Valid")
  }
  this.RegisterUserData.reset()
 
}


}
