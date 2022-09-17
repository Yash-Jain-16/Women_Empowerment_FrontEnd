import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NGO } from 'src/app/Models/NGO';
import { STEP } from 'src/app/Models/STEP';
import { AdminService } from 'src/app/Services/Admin/admin.service';

@Component({
  selector: 'app-ngo-section',
  templateUrl: './ngo-section.component.html',
  styleUrls: ['./ngo-section.component.css']
})
export class NgoSectionComponent implements OnInit {

  ngolist : Array<any> = new Array<any>();
  ngo:any;
  show:boolean=true;
  poc_identity_image:any;
  reg_paper_image:any;
  constructor(private admin_service: AdminService,private route : Router,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // below part fetches specific details of the NGOs
    this.admin_service.GetAllNgos().subscribe((data:any)=>
    {
      for(var d of data)
      {
        this.ngolist.push(
          {"ngo_Name":d.ngo_Name,"ngo_Id":d.ngo_Id,"state":d.state,"city":d.city});
      }
    });
      console.log(this.ngolist);
  }

  // getting NGO by its id
  GetNgoById(id:number)
  {
    this.show=false;
    this.admin_service.GetNgoById(id).subscribe(
      data=>{
        this.ngo=data;
        this.poc_identity_image=this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64,"+this.ngo.identity_Proof_Image);
        this.reg_paper_image =this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64,"+this.ngo.reg_Paper);
      }
    );
  }


  // aproove function for the NGO
  Aproove_Ngo(id:number)
  {
    this.admin_service.Aproove_Ngo(id).subscribe();
    alert("APROOVED");
    window.location.reload();
  }

  

 


}
