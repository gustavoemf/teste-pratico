# Projeto de Teste Prático em Angular

Este é um projeto de teste prático que consiste na criação de uma página/aplicativo de credenciamento de cliente, utilizando tecnologias como HTML5, CSS3/SASS, JavaScript/Typescript, Bootstrap e Angular Framework.

## Requisitos

1. Criar clientes com os campos:

   - Tipo Cliente: Físico ou Jurídico
   - Documento: CPF ou CNPJ
   - Nome/Razão Social
   - Nome Fantasia (Ocultando para o tipo Físico)
   - CEP
   - Endereço
   - Bairro
   - Cidade
   - Telefone
   - E-mail

2. Buscar automaticamente da API de serviço (https://viacep.com.br/ws/" + cep + "/json/) para preencher os campos do endereço, bairro e cidade.

3. Criar uma tela de visualização dos registros para mostrar os dados.

4. Salvar os dados no localStorage do navegador para consulta e visualização dos registros salvos.

## Instruções de Execução

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Angular Framework e todas as dependências necessárias instaladas.
3. Execute o aplicativo localmente com o comando:

   ```shell
   ng serve
