import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {CategoriesComponent} from './categories/categories.component';
import {ProfilComponent} from './profil/profil.component';
import {OffreComponent} from './offre/offre.component';
import {PostjobComponent} from './postjob/postjob.component';


// Configuration des URLs
const routes: Routes = [
  { path: 'accueil' , component: AccueilComponent},
  { path: 'categories' , component: CategoriesComponent},
  { path: 'profil' , component: ProfilComponent},
  { path: 'offre' , component: OffreComponent},
  { path: 'postjob' , component: PostjobComponent},

  { path: '**' , redirectTo: 'accueil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
