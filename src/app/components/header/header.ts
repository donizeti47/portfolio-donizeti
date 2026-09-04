import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  currentTheme: 'light' | 'dark' = 'light';
  currentLang: 'pt-BR' | 'en' | 'es' = 'pt-BR';

  navLinks = [
    { label: 'Sobre', target: '#about' },
    { label: 'Skills', target: '#skills' },
    { label: 'Projetos', target: '#projects' },
    { label: 'Contato', target: '#contact' }
  ];

  ngOnInit(): void {
    const theme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light';
    if (theme) {
      this.currentTheme = theme;
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  }

  changeLanguage(lang: string): void {
    this.currentLang = lang as 'pt-BR' | 'en' | 'es';
  }

  scrollToSection(event: Event, target: string): void {
    event.preventDefault();
    this.closeMenu();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}