import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { ContaSalario } from './ContaSalario.js';


const cliente1 = new Cliente("Denis", 11122233309);

const contaCorrenteDenis = new ContaCorrente(cliente1 , 1001);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

contaCorrenteDenis.depositar(500);
contaCorrenteDenis.sacar(100);
// contaCorrenteDenis.transferir(200, conta2);

const conta = new ContaSalario(cliente1);
conta.depositar(100);
//conta.sacar(10);


console.log(contaPoupanca);
console.log(contaCorrenteDenis);
console.log(conta);