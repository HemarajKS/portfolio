import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { MenuItem } from '../interfaces/interfaces.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuItems: MenuItem[] = [];
  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit() {
    this.menuItems = this.menuService.getMenuItems();
  }

  navigateToRoute(route: string) {
    this.router.navigateByUrl(route);
  }
}
