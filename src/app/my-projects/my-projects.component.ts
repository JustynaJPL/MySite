import { Component, OnInit } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.sass']
})

// class Projects{
//   projects: any[] = [
//     // {id: 1,name: 'Kajak',category: 'Sporty Wodne',price: 275},
//     {
//       id: 1, name: 'Angular Tutorial', category:'Angular', 
//       description: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ', 
//       image: './assets/Angularapptutorialimage.png',
//       link: 'https://justynajpl.github.io/AngularTutStore/', 
//       progress: 99
//     },
//     {
//       id: 2, name: 'Angular Tutorial Heroes App', category:'Angular', 
//       description: ' Tour the Heroes app Angular tutorial from the https://angular.io/tutorial/toh-pt1  ', 
//       image: './assets/angular_logo_icon.svg',
//       link: 'https://github.com/JustynaJPL/tourtheheroesapp', 
//       progress: 30
//     },

//     ];
// }
export class MyProjectsComponent implements OnInit {

  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
