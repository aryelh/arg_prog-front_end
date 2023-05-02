import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myData: String[] = [
    'Sandy Ariel Cruz.'
  ];
  aboutMe: String[] = [
    'Soy programador Web Full Stack que se especializa en crear (y ocacionalmente diseñar) experiencias digitales excepcionales. Actuelmente, me centro en la creación de productos accesibles.'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
