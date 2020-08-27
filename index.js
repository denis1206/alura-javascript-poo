import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';


const cliente1 = new Cliente();
cliente1.nome = "Denis";
cliente1.cpf = 11122233309;

const contaCorrenteDenis = new ContaCorrente();
contaCorrenteDenis.agencia = 1001;

contaCorrenteDenis.cliente = cliente1;

const cliente2 = new Cliente();
cliente2.nome = "Maria";
cliente2.cpf = 11122233312;

const conta2 = new ContaCorrente();
conta2.agencia = 1002;
conta2.cliente = cliente2;

contaCorrenteDenis.depositar(500);
contaCorrenteDenis.transferir(200, conta2);

console.log(contaCorrenteDenis);
console.log(conta2.saldo);