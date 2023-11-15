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
      image: '../../assets/img/regeneramac1.png'
    }
  ]


}
