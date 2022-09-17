import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NGOAboutUsComponent } from 'src/app/Components/NGO/ngo-about-us/ngo-about-us.component';
import { Admin } from 'src/app/Models/Admin';
import { NGO } from 'src/app/Models/NGO';
import { STEP } from 'src/app/Models/STEP';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  api_url : string = "http://localhost:63606/api/Admin";
  ngo = {} as NGO;
  user = {} as STEP;
  constructor(private http : HttpClient) { }


  // admin Login 
  AdminLogin(credentials:Admin)
  {
    return this.http.post(`${this.api_url}/AdminLogin`,credentials);
  }

  
  // checking admin is logged in or not 
  isloggedin()
  {
    if(localStorage.getItem("admin-token"))
    {
      return true;
    }
    return false;
  }


  // getting all the Ngos
  GetAllNgos():Observable<NGO>
  {
    return this.http.get<NGO>(`${this.api_url}/GetAllNgos`);
  }

  // getting all the STEP trainees
  GetAllTrainees():Observable<STEP>
  {
    return this.http.get<STEP>(`${this.api_url}/GetStepUsers`);
  }


  // getting NGO by its Id
  GetNgoById(id:number)
  {
    return this.http.get(`${this.api_url}/GetAllNgoById/${id}`)
  }

  //getting STEP trainee by its id
  GetStepUserById(id:number)
  {
    console.log("ADminS",id);
    return this.http.get(`${this.api_url}/GetStepUserId/${id}`)
  }

  // aprooving NGO by its id
  Aproove_Ngo(id:number)
  {
    return this.http.put(`${this.api_url}/AprooveNgo/${id}`,this.ngo);
  }

  // approoving STEP trainee by its id
  Aproove_Step_User(id:number)
  {
    return this.http.put(`${this.api_url}/AprooveStepUser/${id}`,this.user);
  }


  // showing courses taken by varoius STEP trainees
  ShowTraineeTakenCourse()
  {
    return this.http.get(`${this.api_url}/ShowTraineeCourseDetails`);
  }
}


