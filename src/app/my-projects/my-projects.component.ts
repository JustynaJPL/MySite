import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.sass']
})


export class MyProjectsComponent implements OnInit {

  projects = 
    [
    {
      id: 1, name: 'Angular Tutorial', category:'Angular', 
      description: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', 
      image: './assets/angular_logo.png',
      link: 'https://justynajpl.github.io/AngularTutStore/', 
      progress: '99%'
    },
    {
      id: 2, name: 'Angular Tutorial Heroes App', category:'Angular', 
      description: ' Tour the Heroes app Angular tutorial from the https://angular.io/tutorial/toh-pt1  ', 
      image: './assets/angular_logo.png',
      link: 'https://github.com/JustynaJPL/tourtheheroesapp', 
      progress: '30%'
    },

    ];

  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
