import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  { path: '', component: ListarComponent },
  { path: 'nuevo', component: EditarComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: '**', redirectTo: '', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
