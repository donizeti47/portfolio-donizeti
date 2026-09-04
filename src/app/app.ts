import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  title = 'portfolio-donizeti';
}