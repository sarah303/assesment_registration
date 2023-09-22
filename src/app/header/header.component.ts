import { Component, EventEmitter, Output } from '@angular/core';
import { UserDataRegisterService } from '../services/user-data-register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public selectedFlag: string = 'reg';
  @Output() selectedTabFlag = new EventEmitter<{}>();

  constructor(private userRegistered: UserDataRegisterService) {
  }
  ngOnInit() {
    this.userRegistered.getTabValue().subscribe((tabVal) => {
      this.selectedFlag= tabVal ;
    })
  }
  selectedTabIndex(tabValue: string) {
    this.selectedFlag = tabValue;
    this.selectedTabFlag.emit({ tabSelected: this.selectedFlag });
  }

}
