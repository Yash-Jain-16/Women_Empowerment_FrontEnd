import { Component, OnInit } from '@angular/core';
import { STEP } from 'src/app/Models/STEP';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { STEPService } from 'src/app/Services/STEP/step.service';

@Component({
  selector: 'app-step-status',
  templateUrl: './step-status.component.html',
  styleUrls: ['./step-status.component.css']
})
export class STEPStatusComponent implements OnInit {

  constructor(private admin_service : AdminService,private step_service:STEPService) { }

  step_trainee = {} as STEP;
  step_id : number;
  a:any;
  ngOnInit(): void {
    
    // below part fetched approval status of the STEP trainee
    this.a=localStorage.getItem("user_id");
    this.step_service.GetStepId(this.a).subscribe((data:any)=>
    {
      this.step_id = data.step_Id;
      this.admin_service.GetStepUserById(this.step_id).subscribe((data:any)=>this.step_trainee=data);
    });
  }

}
