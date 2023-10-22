import { Injectable } from '@angular/core';
//INTERFACE PARA DEFINIR EL MENU
export interface IMenu {
  title: string;
  url: string;
  icon: string;
}
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private listMenu: IMenu[] = [
    { title: 'Clientes', url: '/clientes', icon: 'clients' },
    { title: 'Cobertura', url: '/cobertura', icon: 'coverage' },
    { title: 'Técnicos', url: '/tecnicos', icon: 'employees' },
    { title: 'Planes', url: '/planes', icon: 'plans' },
    { title: 'Provedores', url: '/provedores', icon: 'providers' },
    { title: 'Stock', url: '/stock', icon: 'stock' },
    { title: 'Soporte', url: '/soporte', icon: 'support' },
    { title: 'Usuarios', url: '/usuarios', icon: 'users' },
  ];

  constructor() {}
  //ESTA FUNCION ME RETORNA LA LISTA DEL MENU
  getMenu(): IMenu[] {
    return [...this.listMenu];
  }
  
  getMenuByUrl(url: string): IMenu {
    return this.listMenu.find(
      (menu) => menu.url.toLowerCase() === url.toLowerCase()
    ) as IMenu;
  }
}
