import { Component, OnInit } from '@angular/core';
import { STEP } from 'src/app/Models/STEP';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { STEPService } from 'src/app/Services/STEP/step.service';

@Component({
  selector: 'app-course-taken',
  templateUrl: './course-taken.component.html',
  styleUrls: ['./course-taken.component.css']
})
export class CourseTakenComponent implements OnInit {

  constructor(private admin_service : AdminService,private step_service:STEPService) { }

  step_trainee = {} as STEP;
  step_id : number;
  a:any;
  taken_course : any;
  ngOnInit(): void {

    //fetching course taken by STEP trainee
    this.a=localStorage.getItem("user_id");
    this.step_service.GetStepId(this.a).subscribe((data:any)=>
    {
      this.step_id = data.step_Id;
      this.step_service.GetCourseByStepId(this.step_id).subscribe(data=>this.taken_course = data);
      console.log("dfgjsjfksjfs",this.taken_course);
    });
  }
}
