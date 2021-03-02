import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(
    private router: Router
  ) {}

  name = 'Angular ' + VERSION.major;

  save(){

  }
  hal2(){
    this.router.navigate(["/det-notes"])
  }
  hal3(){
    this.router.navigate(["/fav-notes"])
  }
}
