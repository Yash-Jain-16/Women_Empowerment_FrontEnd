import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { STEP } from 'src/app/Models/STEP';
import { Take } from 'src/app/Models/Take';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { STEPService } from 'src/app/Services/STEP/step.service';


@Component({
  selector: 'app-step-take-course',
  templateUrl: './step-take-course.component.html',
  styleUrls: ['./step-take-course.component.css']
})
export class STEPTakeCourseComponent implements OnInit {

  constructor(private step_service : STEPService,private admin_service : AdminService,private route : Router,private toastrService: ToastrService) { }

  training_course_list : Array<any> = new Array<any>();
  step_id : number;
  a:any;
  step_trainee = {} as STEP;
  take = {} as Take;
  taken_course : any;
  ngOnInit(): void {
    
    // below part fetches courses by NGOs
    this.step_service.ShowTrainigCouses().subscribe(
      (data:any)=>{
        for(var d of data)
        {
          this.training_course_list.push(d);
        }
      }
    );
    // below part restrict STEP trainee to register in training programme if STEP trainee is not aprooved by Admin
    this.a=localStorage.getItem("user_id");
    this.step_service.GetStepId(this.a).subscribe((data:any)=>
    {
      this.step_id = data.step_Id;
      this.admin_service.GetStepUserById(this.step_id).subscribe((data:any)=>{
        this.step_trainee=data
        if(this.step_trainee.is_Approoved===0)
        {
          console.log("Hellooo");
          //alert("Wait until your profile is not approoved by Admin");
          this.toastrService.error("Wait until your profile is not approoved by Admin", 'Invalid');
          this.route.navigate(['/steplanding']);
        }
      });
    });

    // below part restrict STEP trainee to take another courses if the current course is not finished yet.
    this.a=localStorage.getItem("user_id");
    this.step_service.GetStepId(this.a).subscribe((data:any)=>
    {
      this.step_id = data.step_Id;
      this.step_service.GetCourseByStepId(this.step_id).subscribe(
        (data:boolean)=>{
            if(data)
            {
              //alert("Can't take another course when one course is in Progress");
              this.toastrService.error("Can't take another course when one course is in Progress", 'Invalid');
              this.route.navigate(['/steplanding']);
            }
        }
      );
    });
  }


  // registering course choosen by STEP trainee
  TakeCourse(id:number)
  {
      this.take.course_Id = id;
      this.take.step_Id = this.step_id;
      this.step_service.TakeCourse(this.take).subscribe(  (data)=>{
        console.log(data);
        this.toastrService.success("Sucessfully Registered  !!!",'Success');
      });
      this.route.navigate(['/coursetaken']);
  }

}


// constructor(private admin_service : AdminService,private step_service:STEPService) { }

// step_trainee = {} as STEP;
// step_id : number;
// a:any;
// ngOnInit(): void {

//   this.a=localStorage.getItem("user_id");
//   this.step_service.GetStepId(this.a).subscribe((data:any)=>
//   {
//     this.step_id = data.step_Id;
//     this.admin_service.GetStepUserById(this.step_id).subscribe((data:any)=>this.step_trainee=data);
//   });
// }
