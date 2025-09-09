import { Routes } from '@angular/router';

export const routes: Routes = [
   {
title:'Accueil',
loadComponent: () => import('./page/accueil/accueil.component').then(m => m.AccueilComponent),
path:'accueil',

   } 

];
