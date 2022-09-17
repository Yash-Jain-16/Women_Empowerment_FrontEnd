import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NGO } from 'src/app/Models/NGO';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { NGOService } from 'src/app/Services/NGO/ngo.service';

@Component({
  selector: 'app-ngo-profile',
  templateUrl: './ngo-profile.component.html',
  styleUrls: ['./ngo-profile.component.css']
})
export class NGOProfileComponent implements OnInit {

  a:any;
  ngo:any;
  ngo_id :number;
  reg_paper_image:any;
  poc_identity_image:any;
  constructor(private ngo_service:NGOService,private admin_service:AdminService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // below part fetches deatils of NGO to show its profile
    this.a=localStorage.getItem("user_id");
    this.ngo_service.GetNgoId(this.a).subscribe((data:any)=>
    {
      this.ngo_id = data.ngo_Id;
      this.admin_service.GetNgoById(this.ngo_id).subscribe(
        data=>{
          console.log(data);
          this.ngo=data;
          this.poc_identity_image=this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64,"+this.ngo.identity_Proof_Image);
          this.reg_paper_image =this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64,"+this.ngo.reg_Paper);
        }
      );
    });
  }
}
