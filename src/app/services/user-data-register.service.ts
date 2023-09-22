import { Injectable } from '@angular/core';
import { User } from '../models/registration.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataRegisterService {
  public userRegisteredInfo: Array<User> = [];
  public setTabIndexValue = new BehaviorSubject<string>('reg');

  constructor() { }

  get userInformation(): Array<User> {
    return this.userRegisteredInfo;
  }

  set userInformation(userDetails: User) {
    this.userRegisteredInfo.unshift(userDetails);
  }

  setTabValueTo(tabVal: string) {
    this.setTabIndexValue.next(tabVal);
    console.log("hello subject", this.setTabIndexValue.value)

  }
  getTabValue(): Observable<string> {
    return this.setTabIndexValue.asObservable();
  }
}
