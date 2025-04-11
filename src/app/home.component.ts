// home.component.ts
import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionsComponent } from './sections/sections.component';

@Component({
  selector: 'app-home',
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
export class HomeComponent {}
