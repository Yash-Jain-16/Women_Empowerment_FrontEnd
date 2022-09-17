import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/Admin/admin.service';

@Component({
  selector: 'app-trainee-taken-courses',
  templateUrl: './trainee-taken-courses.component.html',
  styleUrls: ['./trainee-taken-courses.component.css']
})
export class TraineeTakenCoursesComponent implements OnInit {

  constructor(private admin_service : AdminService) { }

  trainees_taken_course_list : Array<any> = new Array<any>();
  ngOnInit(): void {

    // below part fetches STEP trainee's taken course
    this.admin_service.ShowTraineeTakenCourse().subscribe(
      (data:any)=>{
        for(var d of data)
        {
          this.trainees_taken_course_list.push(d);
        }
      }
    );
    console.log(this.trainees_taken_course_list);



    }
}
