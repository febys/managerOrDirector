import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mangerOrDirector';
    numberOfClicks = 0;
    approved:boolean = false;
    notapproved:boolean = false;
    noaction:boolean = false
  count:any = [];
    onClickM(event) {
    this.numberOfClicks++;
      if(this.numberOfClicks == 1){
        this.approved = true;
        this.notapproved = false;
        this.noaction = false
      }
    else if(this.numberOfClicks == 2){
        this.notapproved = true;  
        this.approved = false;
        this.noaction = false
      }
      else if(this.numberOfClicks > 2){
        this.numberOfClicks = 0;
        this.noaction = true
        this.approved = false;
        this.notapproved = false;
      }
   
      console.log('number of clicks:', this.numberOfClicks);
   }
   onClickD(event) {
    this.numberOfClicks++;
    if(this.numberOfClicks == 1){
      this.approved = true;
      this.notapproved = false;
      this.noaction = false
    }
  else if(this.numberOfClicks == 2){
      this.notapproved = true;  
      this.approved = false;
      this.noaction = false
    }
    else if(this.numberOfClicks > 2){
      this.numberOfClicks = 0;
      this.noaction = true
      this.approved = false;
      this.notapproved = false;
    }
 
    console.log('number of clicks:', this.numberOfClicks);
 }
  
}
