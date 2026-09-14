import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  frontendSkills = [
    'Angular',
    'TypeScript',
    'RxJS',
    'NgRx',
    'Tailwind CSS',
    'Jest'
  ];

  backendSkills = [
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'Kubernetes'
  ];
}