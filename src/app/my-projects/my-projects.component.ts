import { Component, OnInit } from '@angular/core';
import projects from "./project.info.json";
import {Router} from '@angular/router';
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
        shortdescription:string,
        description:string,
        image:string,
        link:string,
        progress:number
  }[] = projects;

  
  isProjectChoosed = false;
  whichProjchoosen = 0;


  constructor() { 
   
  }
  ivechoosen(projId:number){
    this.isProjectChoosed = true;
    this.whichProjchoosen = projId;
  }

  ngOnInit(): void {
    
  }

  letsgoback(){
    this.isProjectChoosed = false;
    this.whichProjchoosen = 0;
  }

}
