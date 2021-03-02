import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DetNotesComponent } from '../det-notes/det-notes.component';
import { RouterModule, Routes } from '@angular/router';
import { FavNotesComponent } from '../fav-notes/fav-notes.component';
import { GlobalvarService } from './globalvar.service';


const ROUTES : Routes = [
  {path: 'det-notes', component: DetNotesComponent},
  {path: 'fav-notes', component: FavNotesComponent}
]

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, DetNotesComponent, FavNotesComponent],
  bootstrap:    [ AppComponent ],
  providers: [GlobalvarService]
})
export class AppModule { }
