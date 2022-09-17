import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCourseNgo } from 'src/app/Models/AddCourseNgo';
import { NGO } from 'src/app/Models/NGO';

@Injectable({
  providedIn: 'root'
})
export class NGOService {

  api_url : string = "http://localhost:63606/api/NGO";
  constructor(private http: HttpClient) { }

  // registering NGO to the MWCD portal
  Ngo_Register(ngo:NGO)
  {
      var formdata = new FormData();
      var datestr = (new Date(ngo.date_of_Register)).toUTCString();
      formdata.append("user_Id",localStorage.getItem("user_id"));
      formdata.append("address",ngo.address);
      formdata.append("state",ngo.state);
      formdata.append("city",ngo.city);
      formdata.append("pincode",ngo.pincode);
      formdata.append("date_of_Register",datestr);
      formdata.append("ngo_Email",ngo.ngo_Email);
      formdata.append("ngo_Name",ngo.ngo_Name);
      formdata.append("contact",ngo.contact);
      formdata.append("telephone",ngo.telephone);
      formdata.append("point_of_Contact",ngo.point_of_Contact);
      formdata.append("identity_Proof",ngo.identity_Proof);
      formdata.append("reg_Paper",ngo.reg_Paper);
      formdata.append("identity_Proof_Image",ngo.identity_Proof_Image);
      return this.http.post(`${this.api_url}/Register`,formdata);
  }

  // getting ngo_id by user_id
  GetNgoId(user_id:string)
  {
    return this.http.get(`${this.api_url}/GetNgoId/${user_id}`);
  }


  // adding courses by NGOs
  AddCourse(ngo_id:number,newcourse:AddCourseNgo)
  {
    console.log(newcourse);
    return this.http.post(`${this.api_url}/UploadProgramme?id=${ngo_id}`,newcourse);
  }


  // getting all the courses of the respective NGOs
  GetNgoCoursesById(id:number)
  {
    return this.http.get(`${this.api_url}/ShowNgoCoursesById/${id}`);
  }


}
