import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';


const cliente1 = new Cliente("Denis", 11122233309);
const cliente2 = new Cliente("Maria", 11122233312);

const contaCorrenteDenis = new ContaCorrente(cliente1 , 1001);
const conta2 = new ContaCorrente(cliente2, 1002);

contaCorrenteDenis.depositar(500);
contaCorrenteDenis.transferir(200, conta2);

console.log(contaCorrenteDenis);
console.log(ContaCorrente.numeroDeContas);