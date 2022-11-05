import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm = this.formBuilder.group({
    
  })

  constructor(private formBuilder : FormBuilder) { }
  
  ngOnInit(): void {
  }

}
