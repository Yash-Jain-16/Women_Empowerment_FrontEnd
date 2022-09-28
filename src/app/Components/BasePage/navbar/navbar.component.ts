import { AfterViewInit, Component, OnInit,Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  base!:boolean;
  step!:boolean;
  ngo!:boolean;
  admin!:boolean;
  status:boolean=false
  status_ngo:boolean =false;
  

  constructor(private route : Router,private user_service : UserService,private admin_service :AdminService,private toastrService: ToastrService) { }

  
  step_status:boolean=true;
  username : string |null="";
   a :any ;
  
  ngOnInit(): void {
    this.base=true;
    this.username=this.user_service.getusername();
    console.log("Inside navbar componengt")
    console.log("User_id",this.a)
  }

  
  
   user_name(){
    return localStorage.getItem("token");
   }

  init_step(s:any)
  {
      if(s==="step")
      {
        if(this.isloggedin())
        {
          this.a=localStorage.getItem("user_id");
          this.base=false;
          this.step=true;
          this.admin=false;
          this.ngo=false;
          this.username = localStorage.getItem("token");
          this.user_service.Exsits_on_STEP(this.a).subscribe(
            (data:any)=>
            {
              console.log("Data : ",data);
              if(!data)
              {
                this.status=false;
              }
              else
              {
                this.status = true;
              }
            }
          );
          this.route.navigate(['/steplanding']);
        }
        else
        {
         this.toastrService.warning("Login to view Content",'Invalid');
          this.route.navigate(['/home']);
        }
      }
      else if(s=="ngo")
      {
        if(this.isloggedin())
        {
          this.a=localStorage.getItem("user_id");
          this.base=false;
          this.step=false;
          this.admin=false;
          this.ngo=true;
          this.username = localStorage.getItem("token");
          this.user_service.Exsits_on_NGO(this.a).subscribe(
            (data:any)=>
            {
              console.log("Data : ",data);
              if(!data)
              {
                this.status_ngo=false;
              }
              else
              {
                this.status_ngo = true;
              }
            }
          );
          this.route.navigate(['/ngolanding']);
        }
        else
        {
          this.toastrService.warning("Login to view Content",'Invalid');
          this.route.navigate(['/home']);
        }
      }
      else if(s=="admin")
      {
        this.base=false;
        this.step=false;
        this.admin=true;
        this.ngo=false;
        this.route.navigate(['/adminlanding']);
      }
      else{
        this.base=true;
        this.step=false;
        this.admin=false;
        this.ngo=false;
        this.route.navigate(['/home']);
      }
  }


  isloggedin()
  {
    return this.user_service.isloggedin();
  }

  logout()
  {
    this.user_service.loggout();
    this.route.navigate(['/home']);
    this.base=true;
    this.step=false;
    this.admin=false;
    this.ngo=false;
  }

  admin_islogged_in()
  {
    return this.admin_service.isloggedin();
  }

  admin_logout()
  {
    localStorage.removeItem("admin-token");
    this.route.navigate(['/home']);
    this.base=true;
    this.step=false;
    this.admin=false;
    this.ngo=false;
  }

  // User_ExistenceAsSTEP()
  // {
  //   var status;
  //  // console.log("Function called");
  //   if(this.isloggedin())
  //   {
  //     this.user_service.Exsits_on_STEP(this.a).subscribe(
  //       (data:any)=>
  //       {
  //         console.log(data);
  //         if(!data)
  //         {
  //           status=false;
  //         }
  //         else
  //         {
  //           status = true;
  //         }
  //       }
  //     );
  //   }
  //   return status;
  // }



}
