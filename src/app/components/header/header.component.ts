import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  currentRoute = "";
  constructor(private router:Router, private location:Location) {
    
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
            // Show progress spinner or progress bar
            console.log('Route change detected');
            this.currentRoute = event.url
            console.log(this.currentRoute);

            if (this.currentRoute == "") {
              this.project = false
              this.about = false
            } 
          
            if (this.currentRoute == "/project") {
              this.project = true
            } else {
              this.project = false
            }
          
            if (this.currentRoute == "/about") {
              this.about = true
            } else {
              this.about = false
            }
            
        }

        if (event instanceof NavigationEnd) {
            // Hide progress spinner or progress bar
            this.currentRoute = event.url;          
            console.log(event);
        }

        if (event instanceof NavigationError) {
             // Hide progress spinner or progress bar

            // Present error to user
            console.log(event.error);
        }
    });
  }

  project= false
  about = false
  routeSubscription:any

ngOnInit() {
  
  console.log(this.location.path())
  let path = this.location.path()

  
}

}
