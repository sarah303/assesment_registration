import { Component } from '@angular/core';
import { UserDataRegisterService } from './services/user-data-register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anju_assessment_test';
  public tabSelectedValue:boolean=false;
  public showToaster:boolean=false;
  constructor(public userRegistered:UserDataRegisterService){
  }
  ngOnInit(){
    this.userRegistered.getTabValue().subscribe((tabVal)=>{
      this.tabSelectedValue=(tabVal==='reg')?false:true;
      this.showToaster=this.tabSelectedValue
    })
    
  }
  tabSelectedValueIndex(eventVal?:any){
    this.tabSelectedValue=(eventVal.tabSelected==='reg') ?false :true;
    this.showToaster=this.tabSelectedValue;
  }
}
