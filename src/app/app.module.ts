import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroClienteComponent } from './components/cliente/registro-cliente/registro-cliente.component';
import { ConsultaClienteComponent } from './components/cliente/consulta-cliente/consulta-cliente.component';
import { IndexComponent } from './components/layout/index/index.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RegistroClienteComponent,
    ConsultaClienteComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
