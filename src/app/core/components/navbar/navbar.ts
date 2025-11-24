import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  isMenuOpen = false;
  isScrolled = false;

  navItems = [
    { name: 'Home', path: '' },
    { name: 'Projects', path: 'projects' },
    { name: 'Portfolio', path: 'portfolio' },
    { name: 'Services', path: 'services' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.classList.remove('menu-open');
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  bookConsultation(): void {
    console.log('Book consultation clicked');
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeMenu();
  }
}