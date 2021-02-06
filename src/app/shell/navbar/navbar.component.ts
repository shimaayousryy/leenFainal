import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  show :boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


<<<<<<< HEAD
    
=======
    // language spinner 
>>>>>>> a27b93b (update)
  showSpinnerSitting(){
    this.show=!this.show;
  }

}
