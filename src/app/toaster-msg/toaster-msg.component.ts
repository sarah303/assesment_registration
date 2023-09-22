import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-toaster-msg',
  templateUrl: './toaster-msg.component.html',
  styleUrls: ['./toaster-msg.component.css']
})
export class ToasterMsgComponent {
public show:boolean=true;
constructor(){

}
ngAfterViewInit(){
 this.show=true;
 setTimeout(()=>{
  this.show=false;
 },1000)
}
}
