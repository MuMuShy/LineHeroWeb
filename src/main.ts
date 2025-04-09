import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeroComponent } from './app/hero/hero.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { SectionsComponent } from './app/sections/sections.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, NavbarComponent, SectionsComponent],
  template: `
    <app-navbar></app-navbar>
    <main id="home">
      <app-hero></app-hero>
      <app-sections></app-sections>
    </main>
  `
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);