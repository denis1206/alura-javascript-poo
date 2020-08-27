class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }

        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Denis";
cliente1.cpf = 11122233309;

const contaCorrenteDenis = new ContaCorrente();
contaCorrenteDenis.agencia = 1001;
contaCorrenteDenis.depositar(100);
const valorSacado = contaCorrenteDenis.sacar(50);
contaCorrenteDenis.depositar(150);

console.log(valorSacado);
console.log(contaCorrenteDenis);