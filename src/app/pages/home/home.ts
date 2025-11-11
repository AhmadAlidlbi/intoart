import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  projects = [
    {
      title: 'Luxury Apartment',
      image: 'assets/images/project1.jpg',
      description: 'Minimal luxury apartment design in Kuwait City.',
    },
    {
      title: 'Coastal Villa',
      image: 'assets/images/project2.jpg',
      description: 'Elegant beachside villa with natural tones and textures.',
    },
    {
      title: 'Modern Office',
      image: 'assets/images/project3.jpg',
      description: 'Creative workspace balancing art and productivity.',
    },
  ];
}
