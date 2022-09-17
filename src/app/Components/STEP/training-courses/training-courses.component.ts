import { Component, OnInit } from '@angular/core';
import { STEPService } from 'src/app/Services/STEP/step.service';

@Component({
  selector: 'app-training-courses',
  templateUrl: './training-courses.component.html',
  styleUrls: ['./training-courses.component.css']
})
export class TrainingCoursesComponent implements OnInit {

  constructor(private step_service : STEPService) { }

  training_course_list : Array<any> = new Array<any>();
  ngOnInit(): void {

    // getting all the NGOs courses
    this.step_service.ShowTrainigCouses().subscribe(
      (data:any)=>{
        for(var d of data)
        {
          this.training_course_list.push(d);
        }
      }
    );
    console.log(this.training_course_list);
  }





}
