import { Component, OnInit } from '@angular/core';
import { NGO } from 'src/app/Models/NGO';
import { NGOService } from 'src/app/Services/NGO/ngo.service';

@Component({
  selector: 'app-ngomy-programmes',
  templateUrl: './ngomy-programmes.component.html',
  styleUrls: ['./ngomy-programmes.component.css']
})
export class NGOMyProgrammesComponent implements OnInit {

  constructor(private ngo_service:NGOService) { }

  a:any;
  ngo = {} as NGO;
  ngo_id :number;
  ngo_course_list:any;
  ngOnInit(): void {
    //below part fetches courses of the respective ngos
    this.a=localStorage.getItem("user_id");
    this.ngo_service.GetNgoId(this.a).subscribe((data:any)=>
    {
      this.ngo_id = data.ngo_Id;
      this.ngo_service.GetNgoCoursesById(this.ngo_id).subscribe(data=>this.ngo_course_list=data);
    });
  }
}
