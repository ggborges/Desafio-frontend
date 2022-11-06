import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  clientName : string = this.userName()
  email : string = this.userEmail()
  instituicao : string = this.userInstituicao()
  cargo : string = this.userCargo()

  isLogged : boolean = this.isLoggedIn()

  
  constructor() { }

  ngOnInit(): void {
  }

  isLoggedIn() : boolean{
    let isLogged = false
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser')!)

    if (currentUser != null) {
      isLogged = true
    }

    return isLogged
  }

  userName() : string {
    let nome : string = ''
    if(this.isLoggedIn()){
      nome = JSON.parse(sessionStorage.getItem('currentUser')!).nome
    }
    return nome
  }

  userEmail() : string {
    let email : string = ''
    if(this.isLoggedIn()){
      email = JSON.parse(sessionStorage.getItem('currentUser')!).email
    }
    return email
  }

  userCargo() : string {
    let cargo : string = ''
    if(this.isLoggedIn()){
      cargo = JSON.parse(sessionStorage.getItem('currentUser')!).cargo
    }
    return cargo
  }

  userInstituicao() : string {
    let instituicao : string = ''
    if(this.isLoggedIn()){
      instituicao = JSON.parse(sessionStorage.getItem('currentUser')!).instituicao
    }
    return instituicao
  }

  logout() {
    sessionStorage.removeItem('currentUser')
  }
}