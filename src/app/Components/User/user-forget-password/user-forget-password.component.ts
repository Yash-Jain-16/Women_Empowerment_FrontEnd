import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Models/User';
import { UserCnfPass } from 'src/app/Models/UserCnfPass';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-user-forget-password',
  templateUrl: './user-forget-password.component.html',
  styleUrls: ['./user-forget-password.component.css']
})
export class UserForgetPasswordComponent implements OnInit {

  message : string;
  newUser = {} as User;
  constructor(private User_service : UserService,private route:Router,private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(user:User)
  {
    this.newUser.password = user.password;
    this.User_service.UserUpdatePassword(user.email,this.newUser).subscribe(
      (data)=>{
          if(data)
          {
            this.toastrService.success("Successfully Updated Password !!!",'Success');
            this.route.navigate(['/userlogin']);
          }
      });
  }

  onBlur(user:UserCnfPass)
  {
    if(user.cpassword !== user.password)
    {
      this.message="Password Must Match";
    }
    else
    {
      this.message='';
    }
  }

}
