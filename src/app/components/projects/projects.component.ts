import { Component } from '@angular/core';
import { ProjectsServicesService } from 'src/app/services/projects-services.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {



  constructor(private projectservice: ProjectsServicesService) { }

projects:any

  ngOnInit()  {
   
    this.projects = this.projectservice.projects
    console.log(this.projects);
    
  }

}
