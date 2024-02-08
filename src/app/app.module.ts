import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './components/hero/hero.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsServicesComponent } from './services/projects-services/projects-services.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';





@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent,
    ProjectsComponent,
    ProjectsServicesComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    AboutPageComponent,
    ProjectPageComponent,
    ContactPagesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
