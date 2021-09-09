import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  set(title:any,value:any){
    localStorage.setItem(title,JSON.stringify(value))
  }
  get(title:any){
    return JSON.parse(localStorage.getItem(title)||'{}')

  }

}
