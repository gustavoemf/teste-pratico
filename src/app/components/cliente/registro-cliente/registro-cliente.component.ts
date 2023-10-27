import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Cliente, TipoCliente, TipoDocumento } from 'src/app/models/Cliente';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss'],
})
export class RegistroClienteComponent {
  cliente: Cliente = new Cliente(
    TipoCliente.Fisico,
    TipoDocumento.CPF,
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  );

  @Output() retorno: EventEmitter<any> = new EventEmitter<any>();

  tiposClientes = [TipoCliente.Fisico, TipoCliente.Juridico];
  tiposDocumentos = [TipoDocumento.CPF, TipoDocumento.CNPJ];

  constructor(private http: HttpClient) {}

  save() {
    if (
      this.cliente.email == '' ||
      this.cliente.nomeRazaoSocial == '' ||
      this.cliente.tipoCliente == null ||
      this.cliente.documento == null
    ) {
      alert('Campos obrigatórios não podem estar em branco ou vazio.');
      return;
    }

    if (this.cliente.telefone && !this.validarTelefone(this.cliente.telefone)) {
      alert('Telefone inválido. O telefone deve conter 11 dígitos numéricos.');
      return;
    }

    if (!this.validarEmail(this.cliente.email)) {
      alert('E-mail inválido. O formato inserido não está correto.');
      return;
    }

    if (this.cliente.tipoCliente === 'Fisico') {
      this.cliente.nomeFantasia = undefined;
    }

    this.retorno.emit(this.cliente);
  }

  validarEmail(email: string) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  validarTelefone(telefone: string) {
    const cleaned = telefone.replace(/\D/g, '');
    return cleaned.length === 11;
  }

  formatarTelefone(telefone: string) {
    let cleaned = telefone.replace(/\D/g, '');

    if (cleaned.length > 11) {
      cleaned = cleaned.slice(0, 11);
    }

    if (cleaned.length < 11) {
      this.cliente.telefone = cleaned.replace(
        /(\d{2})(\d{4})(\d{4})/,
        '($1) $2-$3'
      );
    } else {
      this.cliente.telefone = cleaned.replace(
        /(\d{2})(\d{5})(\d{4})/,
        '($1) $2-$3'
      );
    }
  }

  consultaCEP(cep: string) {
    cep = cep.replace(/\D/g, '');

    if (cep.length !== 8) {
      alert('CEP inválido ou não encontrado.');
      return;
    }

    this.http
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .subscribe((dados: any) => {
        this.cliente.endereco = dados.logradouro;
        this.cliente.bairro = dados.bairro;
        this.cliente.cidade = dados.localidade;
      });
  }
}
