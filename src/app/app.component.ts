import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Women_Empowerment';
  //typeSelected : string ="ball-fussion";
  show:boolean = false;

  constructor(private spinnerService: NgxSpinnerService) {
   
  }

  ngOnInit()
  {
    this.showSpinner();
  }

  public showSpinner(): void {
    console.log("Hello");
    this.spinnerService.show();
    setTimeout(() => {
      this.show=true;
      this.spinnerService.hide();
    }, 3000); // 5 seconds
  }
}
