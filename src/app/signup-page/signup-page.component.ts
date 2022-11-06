import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  
  signupForm = this.formBuilder.group({
    nome: ['', Validators.required],
    email: ['', Validators.compose(
      [Validators.email, Validators.required]
    )],
    cemail: ['', Validators.compose(
      [Validators.email, Validators.required]
    )], // confirm email
    instituicao: '',
    cargo: '',
    senha: ['', Validators.required],
    csenha: ['', Validators.required], // confirm senha
    termos: ['', Validators.required]
  })

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  navigate_to_login(): void {
    console.log('entrou navigate_to_login')
    this.router.navigate([''])
  }

  onSubmit() {
    console.log('entrou onSubmit')
    if (this.signupForm.valid) {
      console.log("Form Submitted!")

      let nome = this.signupForm.get('nome')!.value
      console.log(nome)
      localStorage.setItem(nome!, JSON.stringify(this.signupForm.value))

      let aux = localStorage.getItem(nome!)
      console.log(aux)
      console.log(JSON.parse(aux!).email)
      

      this.navigate_to_login()
      this.signupForm.reset() 
    } else {
      console.log('Forms não preenchido corretamente')

      // Forms não preenchido corretamente [lançar erro]

    }

  }

}
