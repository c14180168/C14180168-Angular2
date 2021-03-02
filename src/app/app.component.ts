import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalvarService } from './globalvar.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(
    private router: Router,
    public globalvar: GlobalvarService
  ) {this.list = this.globalvar.getList}

  judul = ""
  isi = ""
  name = 'Angular ' + VERSION.major;
  
  list
  notes = []

  save(){
    let today = new Date()
    let note = {
      judul: this.judul,
      isi: this.isi,
      tgl: today.getDate
    }
    this.list.push(note)
    alert(note)
  }
  hal2(){
    this.router.navigate(["/det-notes"])
  }
  hal3(){
    this.router.navigate(["/fav-notes"])
  }
}
