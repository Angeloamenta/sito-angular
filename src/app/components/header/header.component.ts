import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:ActivatedRoute, private location:Location) {}

  project= false
  about = false

ngOnInit() {
  console.log(this.router.snapshot);
  console.log(this.location.path())
  let path = this.location.path()

  if (path == "") {
    this.project = false
    this.about = false
  } 

  if (path == "/project") {
    this.project = true
  } else {
    this.project = false
  }

  if (path == "/about") {
    this.about = true
  } else {
    this.about = false
  }

  
}

}
