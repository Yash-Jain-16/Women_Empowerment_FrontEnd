import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddCourseNgo } from 'src/app/Models/AddCourseNgo';
import { NGO } from 'src/app/Models/NGO';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { NGOService } from 'src/app/Services/NGO/ngo.service';

@Component({
  selector: 'app-ngo-add-courses',
  templateUrl: './ngo-add-courses.component.html',
  styleUrls: ['./ngo-add-courses.component.css']
})
export class NGOAddCoursesComponent implements OnInit {

  constructor(private ngo_service : NGOService,private admin_service : AdminService,private route:Router,private toastrService: ToastrService) { }
  a:any;
  ngo_id :number;
  ngo = {} as NGO;
  ngOnInit(): void {
    
    //below part restrict NGO to upload their courses if it is not aprooved by Admin
    this.a=localStorage.getItem("user_id");
    this.ngo_service.GetNgoId(this.a).subscribe((data:any)=>
    {
      this.ngo_id = data.ngo_Id;
      this.admin_service.GetNgoById(this.ngo_id).subscribe((data:any)=>{
        this.ngo=data
        if(this.ngo.is_Aprooved===0)
        {
          this.toastrService.error("Wait until your profile is  approoved by Admin", 'Invalid');
          this.route.navigate(['/ngolanding']);
        }
      });
    });
  }


  // Submitting course uploaded by NGO 
  onSubmit(course:AddCourseNgo)
  {
    this.ngo_service.AddCourse(this.ngo_id,course).subscribe(  (data)=>{
      console.log(data);
      this.toastrService.success("Registered Successfully !!!",'Success');
    });
  }

}
