import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  metrics = [
    {
      title: 'FULL STACK',
      subtitle: 'DA UI ATÉ A API'
    },
    {
      title: 'SEMPRE APRENDENDO',
      subtitle: 'MOVIDO PELA CURIOSIDADE'
    }
  ];

  get profileImagePath(): string {
    const isLightMode = document.body.classList.contains('light-theme');
    return isLightMode ? 'images/profile-light.png' : 'images/profile-dark.png';
  }
}