import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../shared/user-registration.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  dataSource;
 
  constructor(private userregistrationService:UserRegistrationService) { }

  ngOnInit(): void {
    this.userregistrationService.getAllProduct().subscribe(res=>{
      console.log(res);
     this.dataSource = res['Message']
    })
  }
  
}
