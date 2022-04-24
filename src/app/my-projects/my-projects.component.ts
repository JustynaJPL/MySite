import { Component, OnInit } from '@angular/core';
import projects from "./project.info.json";
//json imported from the file to load the content


@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.sass']
})


export class MyProjectsComponent implements OnInit {

//this is the def of project component it can be expanded if needed
  projects:{
        id:number, 
        name:string,
        category:string,
        description:string,
        image:string,
        link:string,
        progress:number
  }[] = projects;
  

  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
