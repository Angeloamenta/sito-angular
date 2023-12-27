import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServicesService {

  constructor() { }

  projects = [
  
    {
      name: 'About Val di Noto',
      description: 'desc',
      image: '../../assets/img/about-pc-2.png'
    },
    {
      name: 'Regenera System',
      description: 'desc',
      image: '../../assets/img/regeneramac1.png'
    },
    {
      name: 'Clone Spotify',
      description: 'desc',
      image: '../../assets/img/spotymac1.png'
    },
    {
      name: 'Sito Aziendale generico',
      description: 'desc',
      image: '../../assets/img/aziendamac1.png'
    },
    {
      name: 'ToDoList',
      description: 'desc',
      image: '../../assets/img/TODOLISTMAC.png'
    },
    {
      name: 'Menu Digitale',
      description: 'desc',
      image: '../../assets/img/menumac1.png'
    },
    {
      name: 'NovaGenetics',
      description: 'desc',
      image: '../../assets/img/novamac1.png'
    },
    {
      name: 'E-commerce Spot',
      description: 'desc',
      image: '../../assets/img/spotmac1.png'
    }
  ]

  getProjects() {
    return this.projects
  }

  getProject(index:number) {
    return this.projects[index]
  }

}
