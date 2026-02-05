import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'recepcionistas', loadComponent: () => import('./pages/recepcionistas/list/list.js').then((m) => m.List)},
    {path: 'pacientes', loadComponent: () => import('./pages/pacientes/list/list.js').then((m) => m.List)},
    {path: 'consultas', loadComponent: () => import('./pages/consultas/list/list.js').then((m) => m.List)},
    {path: 'financeiro', loadComponent: () => import('./pages/financeiro/list/list.js').then((m) => m.List)},
];
