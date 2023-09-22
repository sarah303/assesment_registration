import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from  '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ToasterMsgComponent } from './toaster-msg/toaster-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    UserDetailsComponent,
    ToasterMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  exports:[RegistrationComponent,HeaderComponent,FooterComponent,ToasterMsgComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
