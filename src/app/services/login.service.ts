import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';

@Injectable()
export class LoginService {
@Output() notify: EventEmitter<any> = new EventEmitter();
  constructor() { 
    console.log("Login Service started.");
   }

   login() {
     console.log("logging in.");
     this.notify.emit(true);
   }

   getEmmittedValue() {
     return this.notify;
   }

}
