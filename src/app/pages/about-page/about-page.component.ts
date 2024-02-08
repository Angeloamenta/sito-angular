import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {

  jobs = [
    {
      date: "10/2023 - Attivo",
      job: "Web Developer, E-commerce, Company website manager "
    },
    {
      date: "04/2023 - Attivo",
      job: "Freelance: Web Developer E-commerce "
    },
    {
      date: "06/2022 - Settembre 2023",
      job: "Web Developer, E-commerce, Company website manager "
    },
    {
      date: "04/2022 - 06/2022",
      job: " CollabFront-End Developer"
    },
    {
      date: "10/2021 - 03/2022",
      job: " Boolean Trainee Developer"
    }
  ]
}
