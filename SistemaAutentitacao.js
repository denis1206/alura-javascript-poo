export class SistemaAutentitacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}