import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { AjanlasokComponent } from './ajanlasok/ajanlasok.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { Enviroments } from './environments';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AjanlasokComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(Enviroments.firebaseConfig)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
