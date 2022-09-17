import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserLogin } from 'src/app/Models/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  api_url:string = "http://localhost:63606/api/User";


  // Login Function for the user
  UserLogin(credentials:UserLogin)
  {
    return this.http.post(`${this.api_url}/UserLogin`,credentials);
  }


  // Checking user logged in or not 
  isloggedin()
  {
    if(localStorage.getItem('token'))
    {
      return true;
    }
    return false;
  }

  // logout function for the user
  loggout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
  }

  // getting username of the user
  getusername()
  {
    return localStorage.getItem("token");
  }

  // checking whether user enrolled in steep or not 
  Exsits_on_STEP(id:string|null)
  {
    return this.http.get(`${this.api_url}/UserExists_STEP/${id}`);
  }

  // checking whether user has/her registered any ngo or not
  Exsits_on_NGO(id:string|null)
  {
    return this.http.get(`${this.api_url}/UserExists_NGO/${id}`);
  }


  // registering user in the database
  User_Register(user:User)
  {
    return this.http.post(`${this.api_url}/Register`,user)
  }


  // getting user by its user_id
  GetUserById(id:string)
  {
    return this.http.get(`${this.api_url}/GetUserById/${id}`);
  }

  // getting user birth year
  GetUserBirthYear(id:string)
  {
    return this.http.get(`${this.api_url}/GetYearById/${id}`);
  }

  // count of STEP trainees
  Count_STEP_Registrations()
  {
    return this.http.get(`${this.api_url}/Total_STEP_Registrations`);
  }

  // count of number of NGOs
  Count_NGO_Registrations()
  {
    return this.http.get(`${this.api_url}/Total_NGO_Registrations`);
  }


}
