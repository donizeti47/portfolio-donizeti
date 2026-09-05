import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  // Dados dinâmicos do Marcos
  developerName = 'Donizeti Souza';
  role = 'Desenvolvedor Front-end & Web';
  headline = 'Transformando ideias em software que as pessoas amam usar.';
  
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' }
  ];

  scrollToSection(target: string): void {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}