import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaClienteComponent } from './components/cliente/consulta-cliente/consulta-cliente.component';

const routes: Routes = [
  { path: '', component: ConsultaClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
