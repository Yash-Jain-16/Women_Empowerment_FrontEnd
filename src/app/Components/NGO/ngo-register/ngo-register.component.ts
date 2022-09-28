import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NGO } from 'src/app/Models/NGO';
import { NGOService } from 'src/app/Services/NGO/ngo.service';

@Component({
  selector: 'app-ngo-register',
  templateUrl: './ngo-register.component.html',
  styleUrls: ['./ngo-register.component.css']
})
export class NGORegisterComponent implements OnInit {

  constructor(private ngo_service : NGOService,private route : Router,private toastrService: ToastrService) { }

  new_ngo  = {} as NGO;
  selectedvalue:string="";
  selectedvalue1:string="";
  selectedvalue2:string="";

  ngOnInit(): void {
  }

  //registering ngo in the MWCD portal
  onSubmit(ngo:NGO)
  {

      this.new_ngo.point_of_Contact = ngo.point_of_Contact;
      this.new_ngo.address = ngo.address;
      this.new_ngo.city = ngo.city;
      this.new_ngo.contact = ngo.contact;
      this.new_ngo.date_of_Register = ngo.date_of_Register;
      this.new_ngo.identity_Proof = ngo.identity_Proof;
      this.new_ngo.telephone = ngo.telephone;
      this.new_ngo.ngo_Email = ngo.ngo_Email;
      this.new_ngo.ngo_Name = ngo.ngo_Name;
      this.new_ngo.state = ngo.state;
      this.new_ngo.pincode = ngo.pincode;
    this.ngo_service.Ngo_Register(this.new_ngo).subscribe(
      (data)=>{
        console.log(data);
        this.toastrService.success("Registered Successfully !!!",'Success');
      });
    alert("Registred Suceesfullly");
    this.route.navigate(['/home']);
  }


  // fetching file
  onChange1(event:any)
  {
   this.new_ngo.reg_Paper = event.target.files[0];
  }

  // fetching file
  onChange2(event:any)
  {

   this.new_ngo.identity_Proof_Image = event.target.files[0];
  }






}
