import {Component} from '@angular/core';
import {MenuBarItem} from 'projects/shared-lib/src/public-api';
import {AuthenticationService} from "./components";
import {LoginComponent} from "./components/login/login.component";
import {LogoutComponent} from "./components/logout/logout.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Webshop App';

  // Menüpunkte in der oberen Menüleiste -> Array von MenubarItems
  public menuItems: MenuBarItem[] = [
    {
      name: 'login',
      routePath: 'login'
    },
    {
      name: 'Produkte',
      routePath: 'products', // Routing-Pfad -> app-routing.module
    },
    {
      name: 'Impressum',
      routePath: 'impressum', // Routing-Pfad -> app-routing.module
    },
    {
      name: 'Profile',
      routePath: 'logout', // Routing-Pfad -> app-routing.module
    },
  ];
  public menuItemsAdmin: MenuBarItem[] = [
    {
      name: 'logout',
      routePath: 'logout'
    },
    {
      name: 'Produkte',
      routePath: 'products', // Routing-Pfad -> app-routing.module
    },
    {
      name: 'Impressum',
      routePath: 'impressum', // Routing-Pfad -> app-routing.module
    },
    {
      name: 'Users',
      routePath: 'users', // Routing-Pfad -> app-routing.module
    },
  ];
  public menuItemsUser: MenuBarItem[] = [
    {
      name: 'logout',
      routePath: 'logout'
    },
    {
      name: 'Produkte',
      routePath: 'products', // Routing-Pfad -> app-routing.module
    },
    {
      name: 'Impressum',
      routePath: 'impressum', // Routing-Pfad -> app-routing.module
    },
    {
      name: 'Profile',
      routePath: 'profile', // Routing-Pfad -> app-routing.module
    },

  ];

  get isAuthorized() {
    return this.authService.isAuthorized();
  }

  get isAdmin() {
    return this.authService.isAdmin();
  }


  constructor(private authService: AuthenticationService) {
  }
}
