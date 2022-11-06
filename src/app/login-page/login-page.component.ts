import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm = this.formBuilder.group({
    nome: ['', Validators.required],
    senha: ['', Validators.required]
  })

  constructor(private router : Router, private formBuilder : FormBuilder) { }
  
  ngOnInit(): void {
  }

  navigate_to_signup_page() {
    this.router.navigate(['signup'])
  }

  navigate_to_login_page() {
    this.router.navigate([''])
  }

  onSubmit() {

    console.log(this.loginForm)

    if (this.loginForm.valid) {

      console.log("Form Submitted!")
      let nome = this.loginForm.get('nome')?.value!
      /// Se o dado com key 'nome' não for nulo, efetuar o login (se o usuário for cadastrado)
      console.log(nome)
      let aux = localStorage.getItem(nome)!
      let data = JSON.parse(aux)
      console.log('Aux: ', aux)
      console.log('Data', data)
      if (data != null){
        // Se o usuário e a senha digitados correspondem ao cadastrado
        if (data.nome == nome && data.senha == this.loginForm.get('senha')?.value){
          sessionStorage.setItem(nome, data) // efetua o login
          console.log('Login efetuado com sucesso!')
          this.loginForm.reset()
          this.navigate_to_login_page()
        } else {
          console.log('Usuário ou senha inválidos')

          // Usário ou senha inválidos [lançar erro]

        }        
      } else {
        console.log('Usuário não cadastrado')

        // Usuário não cadastrado [lançar erro]

      }
    } else {
      console.log('Formulário não foi preenchido corretamente')

      // Formulário não foi preenchido corretamente [lançar erro]

    }
  }
}
