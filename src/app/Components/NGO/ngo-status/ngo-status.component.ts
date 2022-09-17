import { Component, OnInit } from '@angular/core';
import { NGO } from 'src/app/Models/NGO';
import { AdminService } from 'src/app/Services/Admin/admin.service';
import { NGOService } from 'src/app/Services/NGO/ngo.service';

@Component({
  selector: 'app-ngo-status',
  templateUrl: './ngo-status.component.html',
  styleUrls: ['./ngo-status.component.css']
})
export class NGOStatusComponent implements OnInit {
  a:any;
  ngo = {} as NGO;
  ngo_id :number;
  constructor(private admin_service :AdminService,private ngo_service:NGOService) { }

  ngOnInit(): void {
    //below part fetches the aprooval status of the NGO
    this.a=localStorage.getItem("user_id");
    this.ngo_service.GetNgoId(this.a).subscribe((data:any)=>
    {
      this.ngo_id = data.ngo_Id;
      this.admin_service.GetNgoById(this.ngo_id).subscribe((data:any)=>this.ngo=data);
    });
  }
}
