import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trainee-section',
  templateUrl: './trainee-section.component.html',
  styleUrls: ['./trainee-section.component.css']
})
export class TraineeSectionComponent implements OnInit {

  steplist : Array<any> = new Array<any>();
  show:boolean=true;
  user:any;
  constructor(private admin_service: AdminService,private route : Router, private sanitizer: DomSanitizer) { }

  user_image :any;
  user_identity_proof:any;  
  ngOnInit(): void {
    this.admin_service.GetAllTrainees().subscribe((data:any)=>
    {
      for(var d of data)
      {
        this.steplist.push(
          {"step_id":d.step_Id,"firstname":d.firstname,"lastname":d.lastname,"state":d.state,
          "user_image": this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64,"+d.user_Photo)});
      }
    });
    console.log("StepList",this.steplist);
  }

  GetUserById(id:number)
  {
    // below part fetches specific details of the STEP trainee
    this.show=false;
    this.admin_service.GetStepUserById(id).subscribe(
      (data)=>{
        this.user=data;
        this.user_image=this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64,"+this.user.user_Photo);
        this.user_identity_proof =this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64,"+this.user.identity_Proof_Image);
      }
    );
  }


  // aproove funnction for STEP trainee
  Aproove_User(id:number)
  {
    this.admin_service.Aproove_Step_User(id).subscribe();
    alert("APROOVED");
    window.location.reload();
  }


}
