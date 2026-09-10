import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, AboutComponent, SkillsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'portfolio-donizeti';
}