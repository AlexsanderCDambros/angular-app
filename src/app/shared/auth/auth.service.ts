import { User } from './models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: User) {
    if (user.user==='Alex' && user.password==="qwe123") {
      window.sessionStorage.setItem('token', 'token');
      return true;
    } else {
      return false;
    }
  }

}
