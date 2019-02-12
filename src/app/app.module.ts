import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing.module';
// import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetEmployeeService } from './service/get.employee.service';
import { LoginService } from './service/login.service';
import { ResetComponent } from './reset/reset.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTestScreenComponent } from './mat-test-screen/mat-test-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetComponent,
    EmpDetailsComponent,
    NavbarComponent,
    DashboardComponent,
    MatTestScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  providers: [
    GetEmployeeService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
