import { Component } from '@angular/core';
import { UserDataRegisterService } from '../services/user-data-register.service';
import { User } from '../models/registration.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  public userDetailsLength:number=0;
  constructor(public userRegistered:UserDataRegisterService){

  }

  ngOnInit(){
    console.log("user info", this.userRegistered.userInformation)
  }

  public deleteInfo(index:number){
    this.userRegistered.userInformation.splice(index,1);
  }

}
