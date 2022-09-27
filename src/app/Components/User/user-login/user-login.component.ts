import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Models/User';
import { UserLogin } from 'src/app/Models/UserLogin';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private user_service:UserService,private route : Router,private toastrService: ToastrService) { }

  ngOnInit(): void {
  }
  msg!:string;
  
  // User login 
  UserLogin(user:UserLogin)
  {
      this.user_service.UserLogin(user).subscribe(
        (data:any)=>{
          if(data)
          {
            this.toastrService.success("Login Successfull !!!",'Success');
            localStorage.setItem("token",data.firstname+" "+data.lastname);
            localStorage.setItem("user_id",data.user_Id);
            this.route.navigate(['/home']);
          }
          else{
            this.msg = "User Not Found with given credential"; 
          }
        }
      );
  }

}
