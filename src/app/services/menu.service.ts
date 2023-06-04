import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/interfaces.module';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'fa-solid fa-house',
      route: '/home',
    },
    {
      label: 'About',
      icon: 'fa-solid fa-circle-info',
      route: '/about',
    },
    {
      label: 'Works',
      icon: 'fa-solid fa-list-check',
      route: '/works',
    },
    {
      label: 'Contact',
      icon: 'fa-solid fa-address-book',
      route: '/contact',
    },
  ];

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}
