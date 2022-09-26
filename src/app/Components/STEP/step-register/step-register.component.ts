import { Component, OnInit } from '@angular/core';
import { STEPService } from 'src/app/Services/STEP/step.service';
import { UserService } from 'src/app/Services/User/user.service';
import { User } from 'src/app/Models/User';
import { STEP } from 'src/app/Models/STEP';
import { Router } from '@angular/router';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-step-register',
  templateUrl: './step-register.component.html',
  styleUrls: ['./step-register.component.css']
})
export class STEPREGISTERComponent implements OnInit {

  constructor(private step_service : STEPService,private user_service : UserService,private route : Router) { }

  user_id:any;
  user:User;
  age:any;
  
  msg : string = "Choose options";
  step_user= {} as STEP;
  year : number;

  ngOnInit(): void {

    // below part fetches user deatils by its Id
    this.user_id=localStorage.getItem("user_id");
    this.user_service.GetUserBirthYear(this.user_id).subscribe((data:number)=>{
      this.year=data;
      if((new Date().getFullYear()-this.year)<=16)
      {
        console.log(new Date().getFullYear()-this.year);
         alert("Only Women with age greater than 16 are eligible ");
         this.route.navigate(['/steplanding']); 
      }
    });
    this.user_service.GetUserById(this.user_id).subscribe((data:User)=>
    {
      this.user = data;
      console.log("date of birsth",typeof(this.user.date_of_Birth),(this.user.date_of_Birth));
    });
  }

  // Regsitering user as a STEP trainee
  onSubmit(user:STEP)
  {
    this.step_user.Firstname = user.Firstname;
    this.step_user.lastname = user.lastname;
    this.step_user.age = user.age;
    this.step_user.is_Married = user.is_Married;
    this.step_user.spouse_Name = user.spouse_Name;
    this.step_user.fathername = user.fathername;
    this.step_user.mothername = user.mothername;
    this.step_user.address = user.address;
    this.step_user.state = user.state;
    this.step_user.city = user.city;
    this.step_user.pincode = user.pincode;
    this.step_user.identity_Proof = user.identity_Proof;
    this.step_user.age = new Date().getFullYear()-this.year;
    console.log("Check-----",this.step_user);
    this.step_service.User_STEP_Register(this.step_user).subscribe();
    alert("Registred Suceesfullly");
    this.route.navigate(['/home']);
    
  }

  // fetching file uploaded by user
  onChange1(event:any)
  {
   this.step_user.user_Photo = event.target.files[0];
  }

  // fetching file uploaded by user
  onChange2(event:any)
  {

   this.step_user.identity_Proof_Image = event.target.files[0];
  }

}
