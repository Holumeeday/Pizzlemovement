import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faCoffee = faCoffee;
  constructor() { }

  isShowDiv = true; 
  ngOnInit(): void {
  }

  toggleDisplayDiv(){
    this.isShowDiv = !this.isShowDiv;
  }
}
