import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRegistrationService } from '../user-registration.service';

@Injectable({
  providedIn: 'root'
})
export class RoutegaurdGuard implements CanActivate {
  constructor( private userregistrationService:UserRegistrationService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.userregistrationService.getToken()){ 
        return true;
      }else{
        alert("YOU_DONT_HAVE_PERMISSION_ACCESS_THE_PAGE");
         this.router.navigateByUrl('/LOGIN')
         return false;
      }
  }
  
}
