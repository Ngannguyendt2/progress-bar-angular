import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { NameComponent } from './name/name.component';
import { EmailComponent } from './email/email.component';
import { PhoneComponent } from './phone/phone.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    NameComponent,
    EmailComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
