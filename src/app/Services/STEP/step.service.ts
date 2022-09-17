import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { STEP } from 'src/app/Models/STEP';
import { Take } from 'src/app/Models/Take';

@Injectable({
  providedIn: 'root'
})
export class STEPService {



  api_url :string ="http://localhost:63606/api/STEP";
  constructor(private http : HttpClient) { }


  // STEP_Register(user:STEP)
  // {
  //   return this.http.post(`${this.api_url}/Register`,user);
  // }

 
  // Showing training courses ulpoaded by NGOs
  ShowTrainigCouses()
  {
    return this.http.get(`${this.api_url}/ShowTrainingCourses`);
  }

  // getting various courses on the basis of sector name
  ShowTrainingCourseBySector()
  {
    return this.http.get(`${this.api_url}/ShowTrainingCoursesBySectorName`);
  }

  // getting various sectors on which NGOs are working 
  ShowTrainingSectors()
  {
    return this.http.get(`${this.api_url}/ShowSectors`);
  }
  

  // registering user as a STEP trainee
  User_STEP_Register(user:STEP)
  {
      console.log(user);
      var formdata = new FormData();
      formdata.append("user_Id",localStorage.getItem("user_id"));
      formdata.append("Firstname",user.Firstname);
      formdata.append("lastname",user.lastname);
      formdata.append("is_Married",user.is_Married);
      formdata.append("address",user.address);
      formdata.append("city",user.city);
      formdata.append("state",user.state);
      formdata.append("spouse_Name",user.spouse_Name);
      formdata.append("fathername",user.fathername);
      formdata.append("mothername",user.mothername);
      formdata.append("identity_Proof_Image",user.identity_Proof_Image);
      formdata.append("identity_Proof",user.identity_Proof);
      formdata.append("user_Photo",user.user_Photo);
      formdata.append("pincode",user.pincode);
      formdata.append("age",user.age.toString());
      return this.http.post(this.api_url,formdata);
  }

  // Getting STEP trainee by its user_id
  GetStepId(user_id:string)
  {
    console.log(`${this.api_url}/GetStepId/${user_id}`);
    return this.http.get(`${this.api_url}/GetStepId/${user_id}`);
  }

  // Registering course taken by STEP trainee
  TakeCourse(take:Take)
  {
      return this.http.post(`${this.api_url}/TakeCourse`,take)
  }

  // Getting course taken by STEP trainee 
  GetCourseByStepId(id:number)
  {
    return this.http.get(`${this.api_url}/GetStepcurrentCourse/${id}`);
  }


}
