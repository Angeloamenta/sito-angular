import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsServicesService } from 'src/app/services/projects-services.service';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent {

  constructor(private project: ProjectsServicesService, private route: ActivatedRoute) { }
  
  myProjects: any;
  mySingleProject: any;
  isProject= true;

  ngOnInit() {
  
    this.myProjects = this.project.getProjects()
    this.route.snapshot.paramMap.get('id')
    console.log(this.myProjects.length);
    

    if (this.route.snapshot.paramMap.get('id')) {
      this.isProject = true
      this.mySingleProject = this.project.getProject(parseInt(this.route.snapshot.paramMap.get('id')!))
      console.log("project",this.mySingleProject);
      
      
    } else {
      this.isProject = false
    }

    // this.isProject = !this.route.snapshot.paramMap.get('id') ? false : true
    console.log(this.route.snapshot.paramMap.get('id'));
    

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
