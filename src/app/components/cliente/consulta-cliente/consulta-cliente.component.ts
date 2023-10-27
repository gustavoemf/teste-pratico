import { Component, ViewChild, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/Cliente';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.scss'],
})
export class ConsultaClienteComponent {
  list: Cliente[] = [];

  modalService = inject(NgbModal);

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.loadClientesFromLocalStorage();
  }

  loadClientesFromLocalStorage() {
    const storedClientes = this.localStorageService.getItem('clientes');
    if (storedClientes) {
      this.list = storedClientes;
    }
  }

  openModal(formulario: any) {
    this.modalService.open(formulario, { size: 'lg' });
  }

  save(cliente: Cliente) {
    this.list.push(cliente);
    this.modalService.dismissAll();

    this.localStorageService.setItem('clientes', this.list);
  }
}
