import { Component, OnInit } from '@angular/core';
import { STEPService } from 'src/app/Services/STEP/step.service';

@Component({
  selector: 'app-training-sectors',
  templateUrl: './training-sectors.component.html',
  styleUrls: ['./training-sectors.component.css']
})
export class TrainingSectorsComponent implements OnInit {


  Sectors : Array<any> = new Array<any>();
  constructor(private step_service : STEPService) { }

  ngOnInit(): void {

    // getting sectors 
    this.step_service.ShowTrainingSectors().subscribe(
      (data:any)=>{
        for(var d of data)
        {
          this.Sectors.push(d);
        }
      }
    );
  }





}
