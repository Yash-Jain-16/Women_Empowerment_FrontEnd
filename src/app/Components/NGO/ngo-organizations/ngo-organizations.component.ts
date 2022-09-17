import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/Admin/admin.service';

@Component({
  selector: 'app-ngo-organizations',
  templateUrl: './ngo-organizations.component.html',
  styleUrls: ['./ngo-organizations.component.css']
})
export class NGOOrganizationsComponent implements OnInit {

  constructor(private admin_service:AdminService) { }
  ngolist : Array<any> = new Array<any>();
  ngo:any;
  show:boolean=true;
  ngOnInit(): void {
    // getting specific ngos details to show it to the user
    this.admin_service.GetAllNgos().subscribe((data:any)=>
    {
      for(var d of data)
      {
        this.ngolist.push(
          {"ngo_Name":d.ngo_Name,"ngo_Id":d.ngo_Id,"state":d.state,"city":d.city,"contact":d.contact,"email":d.ngo_Email});
      }
    });
      console.log(this.ngolist);
  }

  GetNgoById(id:number)
  {
    this.show=false;
    this.admin_service.GetNgoById(id).subscribe(
      data=>this.ngo=data
    );
  }

}
