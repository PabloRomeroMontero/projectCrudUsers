import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsuarioComponent} from './components/usuario/usuario.component';
import {ListaUsuariosComponent} from './components/lista-usuarios/lista-usuarios.component';


const routes: Routes = [
  { path: 'usuarios', component: ListaUsuariosComponent},
  { path: 'usuario/:id', component: UsuarioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'usuarios'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
