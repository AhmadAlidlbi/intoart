import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { AboutUs } from './pages/about-us/about-us';
import { ContactUs } from './pages/contact-us/contact-us';
import { Portfolio } from './pages/portfolio/portfolio';
import { Services } from './pages/services/services';

export const routes: Routes = [
  { path: '', component: Home, title: 'Into Art | Home' },
  { path: 'projects', component: Projects, title: 'Into Art | Projects' },
  { path: 'about', component: AboutUs, title: 'Into Art | About' },
  { path: 'contact', component: ContactUs, title: 'Into Art | Contact' },
  { path: 'portfolio', component: Portfolio, title: 'Into Art | Portfolio' },
  { path: 'services', component: Services, title: 'Into Art | Services' },
  { path: '**', redirectTo: '' }, // fallback to home for unknown routes
];
