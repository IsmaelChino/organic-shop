import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShoopingCartComponent } from './shooping-cart/shooping-cart.component';
import { BNavbarComponent } from './b-navbar/b-navbar.component';
import { NgbdDropdownComponent } from './ngbd-components/ngbd-dropdown/ngbd-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoopingCartComponent,
    HomeComponent,
    BNavbarComponent,
    NgbdDropdownComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'shooping-cart', component: ShoopingCartComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
