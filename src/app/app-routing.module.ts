import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';

const routes: Routes = [
  //Primero se pone un objeto con el path vacio dentro de la constante routes
  //DECIRLE AL COMPONENTE PRINCIPAL QUE MANEJE RUTAS
  {
    path: '',
    component: PageLoginComponent,
  },
  {
    //canLoad se pueden enviar roles o perfiles o funciona para la autentificacion
    path: 'clientes',
    canLoad: [],
    //loadChildren carga bajo demanda
    loadChildren: () =>
      import('./clients/clients.module').then((modulo) => modulo.ClientsModule),
  },
  {
    path: 'cobertura',
    canLoad: [],
    loadChildren: () =>
      import('./coverage/coverage.module').then(
        (modulo) => modulo.CoverageModule
      ),
  },
  {
    path: 'tecnicos',
    canLoad: [],
    loadChildren: () =>
      import('./employees/employees.module').then(
        (modulo) => modulo.EmployeesModule
      ),
  },
  {
    path: 'planes',
    canLoad: [],
    loadChildren: () =>
      import('./plans/plans.module').then((modulo) => modulo.PlansModule),
  },
  {
    path: 'provedores',
    canLoad: [],
    loadChildren: () =>
      import('./providers/providers.module').then(
        (modulo) => modulo.ProvidersModule
      ),
  },
  {
    path: 'stock',
    canLoad: [],
    loadChildren: () =>
      import('./stock/stock.module').then((modulo) => modulo.StockModule),
  },
  {
    path: 'soporte',
    canLoad: [],
    loadChildren: () =>
      import('./support/support.module').then((modulo) => modulo.SupportModule),
  },
  {
    path: 'usuarios',
    canLoad: [],
    loadChildren: () =>
      import('./users/users.module').then((modulo) => modulo.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
