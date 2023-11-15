import { Component, OnInit } from '@angular/core';
import { ProjectsServicesService } from 'src/app/services/projects-services.service';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent {

  constructor(private project: ProjectsServicesService) { }
  
myProjects:any

  ngOnInit() {
  
    this.myProjects = this.project.projects

}

  onActivate(event:any) {
    // window.scroll(0,0);
 console.log(event);
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 }

}
