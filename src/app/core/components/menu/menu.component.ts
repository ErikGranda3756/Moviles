import { Component } from '@angular/core';
import { IMenu, MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'gst-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  listMenu: IMenu[];
  constructor(private menuService: MenuService) {
    this.listMenu = menuService.getMenu();
  }
}
