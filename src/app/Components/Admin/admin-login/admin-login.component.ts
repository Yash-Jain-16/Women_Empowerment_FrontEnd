import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Models/Admin';
import { AdminService } from 'src/app/Services/Admin/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private admin_service:AdminService,private route:Router) { }
  msg !:string;
  ngOnInit(): void {
  }

  // admin login
  onSubmit(user:Admin)
  {
      this.admin_service.AdminLogin(user).subscribe(
        (data:any)=>{
          if(data)
          {
            localStorage.setItem("admin-token",data.admin_Id);
            this.route.navigate(['/adminlanding']);
          }
          else{
            this.msg = "Admin Not Found with given credential"; 
          }
        }
      );
  }

}
