import { Component, OnInit } from '@angular/core';
import {loginService} from '../../pages/login/login.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  show :boolean = false;
  isLogin:boolean=false
  constructor(public loginService:loginService) { 
     this.loginService.currentUser.subscribe( (data) =>{
    if(data != null){
      this.isLogin=true;
      }else{
        this.isLogin=false;
    }
  })
}

  ngOnInit(): void {
  }


    

    // language spinner 
  showSpinnerSitting(){
    this.show=!this.show;
  }
  logOut() {
    this.loginService.logOut();
  }

}
