import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  
  signupForm = this.formBuilder.group({
    nome: '',
    email: '',
    cemail: '', // confirm email
    instituicao: '',
    cargo: '',
    senha: '',
    csenha: '' // confirm senha
  })

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  navigate_to_login(): void {
    console.log('entrou navigate_to_login')
    this.router.navigate([''])
  }

  onSubmit() {
    this.navigate_to_login()
    console.log('entrou onSubmit')
    if (this.signupForm.valid) {
      console.log("Form Submitted!");
    }
    let nome = this.signupForm.get('nome')!.value
    console.log(nome)
    localStorage.setItem(nome!, JSON.stringify(this.signupForm.value))
    this.signupForm.reset()
    //console.log(localStorage.getItem(nome!))
  }

}
