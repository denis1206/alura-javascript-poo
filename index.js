import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { Conta } from './Conta.js';


const cliente1 = new Cliente("Denis", 11122233309);

const contaCorrenteDenis = new ContaCorrente(cliente1 , 1001);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

contaCorrenteDenis.depositar(500);
contaCorrenteDenis.sacar(100);
// contaCorrenteDenis.transferir(200, conta2);

console.log(contaPoupanca);
console.log(contaCorrenteDenis);