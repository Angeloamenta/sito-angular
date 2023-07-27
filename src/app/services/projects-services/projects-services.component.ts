import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-services',
  templateUrl: './projects-services.component.html',
  styleUrls: ['./projects-services.component.css']
})
export class ProjectsServicesComponent {

  projects = [
    {
      name: 'titolo',
      description: 'desc',
      image: 'firefox_9dL2H9Ff4c.png'
    }
  ]

}
