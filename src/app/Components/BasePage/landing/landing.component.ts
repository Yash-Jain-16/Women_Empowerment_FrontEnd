import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private user_service:UserService) { }

  username :string |null="";
  STEP_count:number = 0;
  //same process
  NGO_count:number = 0;
  scount=0;
  ncount=0;
  ngOnInit(): void {
   this.username=localStorage.getItem("token");
  this.user_service.Count_STEP_Registrations().subscribe((data:number)=>this.scount=data);
  this.user_service.Count_NGO_Registrations().subscribe((data:number)=>this.ncount=data);
  }


  STEP_countstop:any = setInterval(()=>{
    this.STEP_count++;
    if(this.STEP_count ==this.scount)
    {
      clearInterval(this.STEP_countstop);
    }

  },50)


  NGO_countstop:any = setInterval(()=>{
    this.NGO_count++;
    if(this.NGO_count == this.ncount)
    {
      
      clearInterval(this.NGO_countstop);
    }
  },50)


  

}
