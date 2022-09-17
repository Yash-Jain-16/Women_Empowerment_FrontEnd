import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { STEP } from 'src/app/Models/STEP';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { STEPService } from 'src/app/Services/STEP/step.service';

@Component({
  selector: 'app-step-profile',
  templateUrl: './step-profile.component.html',
  styleUrls: ['./step-profile.component.css']
})
export class STEPProfileComponent implements OnInit {

  constructor(private admin_service : AdminService,private step_service:STEPService,private sanitizer: DomSanitizer) { }

  user:any;
  step_id : number;
  a:any;
  user_identity_proof:any;
  user_image:any;
  ngOnInit(): void {

    //getting all the details of the STEP trainee to show its profile
    this.a=localStorage.getItem("user_id");
    this.step_service.GetStepId(this.a).subscribe((data:any)=>
    {
      this.step_id = data.step_Id;
      this.admin_service.GetStepUserById(this.step_id).subscribe(
        (data)=>{
          this.user=data;
          this.user_image=this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64,"+this.user.user_Photo);
          this.user_identity_proof =this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64,"+this.user.identity_Proof_Image);
        }
      );
    });
  }
}
