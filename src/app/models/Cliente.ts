export enum TipoCliente {
  Fisico = 'Fisico',
  Juridico = 'Juridico',
}

export enum TipoDocumento {
  CPF = 'CPF',
  CNPJ = 'CNPJ',
}

export class Cliente {
  tipoCliente!: TipoCliente;
  documento!: TipoDocumento;
  nomeRazaoSocial!: string;
  nomeFantasia?: string;
  cep!: string;
  endereco!: string;
  bairro!: string;
  cidade!: string;
  telefone!: string;
  email!: string;

  constructor(
    tipoCliente: TipoCliente,
    documento: TipoDocumento,
    nomeRazaoSocial: string,
    cep: string,
    endereco: string,
    bairro: string,
    cidade: string,
    telefone: string,
    email: string,
    nomeFantasia?: string
  ) {
    this.tipoCliente = tipoCliente;
    this.documento = documento;
    this.nomeRazaoSocial = nomeRazaoSocial;
    this.nomeFantasia = nomeFantasia;
    this.cep = cep;
    this.endereco = endereco;
    this.bairro = bairro;
    this.cidade = cidade;
    this.telefone = telefone;
    this.email = email;
  }
}
