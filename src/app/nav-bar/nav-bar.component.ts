import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router : Router) { }

  isLogged : boolean = this.isLoggedIn()
  clientName : string = this.userName()

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

  logout() {
    sessionStorage.removeItem('currentUser')
  }

  ngOnInit(): void {
  }

}
