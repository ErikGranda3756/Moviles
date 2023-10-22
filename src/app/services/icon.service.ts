import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
//creo una interfaz para manejar las imagenes y iconos crearla fuera de la clase
interface IIcon {
  name: string;
  path: string;
}
@Injectable({
  providedIn: 'root',
})
export class IconService {
  //creo una lista de iconos
  private listIcons: IIcon[] = [
    { name: 'logo', path: './../../assets/img/logo.svg' },
    { name: 'clients', path: './../../assets/img/clients.svg' },
    { name: 'coverage', path: './../../assets/img/coverage.svg' },
    { name: 'employees', path: './../../assets/img/employees.svg' },
    { name: 'plans', path: './../../assets/img/plans.svg' },
    { name: 'providers', path: './../../assets/img/providers.svg' },
    { name: 'stock', path: './../../assets/img/stock.svg' },
    { name: 'support', path: './../../assets/img/support.svg' },
    { name: 'users', path: './../../assets/img/users.svg' }
  ];
  //lo referencio dentro del constructor o registrarlo
  constructor(
    private matIconRegistry: MatIconRegistry,
    //libreria que permite registrar los iconos de manera segura
    private domSanitizer: DomSanitizer
  ) {
    this.registryIcons();
  }
  //creo una funcion para registrar los iconos
  registryIcons() {
    this.listIcons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
