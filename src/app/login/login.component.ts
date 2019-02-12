import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validUser: boolean = false;


  @ViewChild('f') loginForm: NgForm;

  constructor(private loginservice: LoginService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f)
    // validUser= this.loginservice.validateLogin(f.value.inputEmail, f.value.inputPassword)
    this.validUser = true
    // if (this.validUser) {
    this.router.navigate(['/Dashboard']);
    // }
  }

  onReset(f: NgForm) {
    f.reset();
  }
}
