import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Models/User';
import { UserCnfPass } from 'src/app/Models/UserCnfPass';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private user_service : UserService,private route:Router,private toastrService: ToastrService) { }

  newuser = {} as User;
  ngOnInit(): void {
  }

  // User Registrations
  onSubmit(user:UserCnfPass)
  {
      if(user.cpassword !== user.password)
      {
        alert("Password must match");
        this.route.navigate(['/userregister']);
      }
      else
      {
       
        this.newuser.user_Id = user.user_Id;
        this.newuser.firstname = user.firstname;
        this.newuser.lastname = user.lastname;
        this.newuser.contact=user.contact;
        this.newuser.date_of_Birth = user.date_of_Birth;
        this.newuser.email = user.email;
        this.newuser.password = user.password;
        this.newuser.gender = user.gender;

        this.user_service.User_Register(this.newuser).subscribe(
          data=>{console.log(data)
          this.toastrService.success("Registered Successfully !!!",'Success');
          }
        );
        this.route.navigate(['/userlogin']);
      }
  }

}
