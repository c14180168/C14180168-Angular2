import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {

  private List = []

  constructor() { }

  public getList(){
    return this.List
  }

  public setList(list){
    this.List = list
  }

}