import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  signupForm = this.formBuilder.group({
    nome: '',
    email: '',
    cemail: '', // confirm email
    instituicao: '',
    cargo: '',
    senha: '',
    csenha: '' // confirm senha
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.signupForm.reset()
  }

}
