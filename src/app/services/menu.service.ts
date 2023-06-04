import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/interfaces.module';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      route: '/home',
    },
    {
      label: 'About',
      icon: 'info',
      route: '/about',
    },
    {
      label: 'Works',
      icon: 'works',
      route: '/works',
    },
    {
      label: 'Contact',
      icon: 'email',
      route: '/contact',
    },
  ];

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}
