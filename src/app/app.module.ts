import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {AuthService} from './Services/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { OffreComponent } from './offre/offre.component';
import {AuthGuardService} from './Services/auth-guard.service';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginComponent,
    InscriptionComponent,

    OffreComponent,

    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [AuthService , AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
