import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServicesService {

  constructor() { }

  projects = [
    {
      name: 'titolo',
      description: 'desc',
      image: '../../../assets/img/firefox_9dL2H9Ff4c.png'
    }
  ]
}
