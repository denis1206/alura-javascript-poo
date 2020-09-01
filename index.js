import { Cliente } from './Cliente.js';
import { ContaCorrente } from './Conta/ContaCorrente.js';
import { ContaPoupanca } from './Conta/ContaPoupanca.js';
import { ContaSalario } from './Conta/ContaSalario.js';

import { Funcionario } from './Funcionarios/Funcionario.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutentitacao } from './SistemaAutentitacao.js';

const diretor = new Diretor('Rodrigo', 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente('Denis', 5000, 12345678901);
gerente.cadastrarSenha("123");

const cliente = new Cliente('Denis', 12345678922, "456");

const gerenteEstaLogado = SistemaAutentitacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutentitacao.login(diretor, "123456");
const clienteEstaLogado = SistemaAutentitacao.login(cliente, "456");
console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);