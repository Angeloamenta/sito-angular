import { Component, OnInit } from '@angular/core';
import { ProjectsServicesService } from 'src/app/services/projects-services.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private service:ProjectsServicesService) {}

stack:any

  ngOnInit() {
    this.stack = this.service.getStack()
  }
}
