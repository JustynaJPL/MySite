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
        progress:number,
        whattodo1bool: boolean,
        whattodo1:string,
        whattodo1issuecolor: string,
        whattodo2bool: boolean,
        whattodo2: string,
        whattodo2issuecolor: string ,
        whattodo3bool: boolean,
        whattodo3: string,
        whattodo3issuecolor: string,
        whattodo4bool: boolean,
        whattodo4:string ,
        whattodo4issuecolor:string,
        isfin:boolean 
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
