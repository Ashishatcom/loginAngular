import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RoutegaurdGuard } from './shared/auth/routegaurd.guard';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [
  {path:'',component:RegisterFormComponent},
  {path:'login',component:LoginComponent},
  {path:'all-user',component:UserDetailComponent,canActivate:[RoutegaurdGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
