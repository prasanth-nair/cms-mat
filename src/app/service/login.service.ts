import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  validateLogin<Boolean>(id: string, password: string) {
    if (id === 'abc@xyz.com' && password === 'abc')
      return true
    else
      return false
  }
}
