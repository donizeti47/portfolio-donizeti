import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  fallbackImage: string;
  tags: string[];
  demoUrl: string;
}

interface ContactItem {
  displayUrl: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class PortfolioComponent {
  
  projects: Project[] = [
    {
      title: 'Real-time Analytics Dashboard',
      description: 'A low-latency dashboard processing over 50k events/sec using WebSockets and RxJS. Built for high-frequency trading data...',
      image: 'assets/images/project-1.png',
      fallbackImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      tags: ['ANGULAR', 'NODE.JS'],
      demoUrl: 'https://github.com'
    },
    {
      title: 'Enterprise E-commerce Platform',
      description: 'Fully headless architecture with server-side rendering (SSR) for SEO optimization and a ...',
      image: 'assets/images/project-2.png',
      fallbackImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      tags: ['ANGULAR', 'NESTJS'],
      demoUrl: 'https://github.com'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'A low-latency dashboard processing over 50k events/sec using WebSockets and RxJS. Built for high-frequency trading data...',
      image: 'assets/images/project-3.png',
      fallbackImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      tags: ['ANGULAR', 'NODE.JS'],
      demoUrl: 'https://github.com'
    }
  ];

  contacts: ContactItem[] = [
    {
      displayUrl: 'hello@syntacticlogic.dev',
      icon: 'envelope',
      url: 'mailto:hello@syntacticlogic.dev'
    },
    {
      displayUrl: 'linkedin.com/in/dev',
      icon: 'link',
      url: 'https://linkedin.com'
    },
    {
      displayUrl: 'github.com/dev',
      icon: 'code',
      url: 'https://github.com'
    }
  ];

  currentYear: number = new Date().getFullYear();

  onImageError(event: Event, fallbackUrl: string) {
    const element = event.target as HTMLImageElement;
    if (element && element.src !== fallbackUrl) {
      element.src = fallbackUrl;
    }
  }
}