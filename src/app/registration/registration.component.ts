import { Component, ElementRef, ViewChild } from '@angular/core';
import { AddressList, LimitSet, User } from '../models/registration.model'
import { Form, FormGroup, NgForm } from '@angular/forms';
import { UserDataRegisterService } from '../services/user-data-register.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public addressList: Array<AddressList> = [];
  public addLimit: number = LimitSet.addLimit;
  public deleteLimit: number = LimitSet.deleteLimit;
  public userModal: User = {};
  public userDetailsLength: number = 0;

  constructor(private userRegistered: UserDataRegisterService) {

  }
  ngOnInit() {
    this.addressList.push({ city: '', state: '', pinCode: '', collapse: true });
    this.userModal = { userName: '', email: '', address: this.addressList };
  }

  addNewAddress() {
    this.addressList.push({ city: '', state: '', pinCode: '', collapse: true });
  }

  deleteExistingAddress(indexVal: number) {
    this.addressList.splice(indexVal, 1);
  }

  accordionOpenCloseCall(indexVal: number) {
    this.addressList.map((address, index) => {
      this.addressList[index].collapse = (index !== indexVal) ? this.addressList[index].collapse : !this.addressList[index].collapse;
    })
  }

  onSubmit(form: any) {
    this.userRegistered.userInformation = this.userModal;
    this.userRegistered.setTabValueTo('user');
  }

}
