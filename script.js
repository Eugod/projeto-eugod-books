async function buscaEndereco(cep){
    try {
        let consultaCEP = (await fetch(`https://viacep.com.br/ws/${cep}/json/`));

        let CEPjson = await consultaCEP.json();

        if(CEPjson.erro) {
            throw new Error('CEP inválido!');
        }

        console.log(CEPjson);

        return CEPjson;
    } catch(erro) {
        erro.message = 'CEP inválido!';

        console.log(erro);
    }
}
