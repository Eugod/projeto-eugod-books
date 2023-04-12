async function buscaEndereco(cep){
    try {
        let consultaCEP = (await fetch(`https://viacep.com.br/ws/${cep}/json/`));

        let CEPjson = await consultaCEP.json();

        if(CEPjson.erro) {
            throw new Error('CEP inválido!');
        }

        const endereco = document.getElementById('endereco');
        const bairro = document.getElementById('bairro');
        const cidade = document.getElementById('cidade');
        const estado = document.getElementById('estado');

        endereco.value = CEPjson.logradouro;
        bairro.value = CEPjson.bairro;
        cidade.value = CEPjson.localidade;
        estado.value = CEPjson.uf;

        return CEPjson;
    } catch(erro) {
        erro.message = 'CEP inválido!';

        console.error(erro);
        
        alert('CEP inválido!');
    }
}

const cep = document.getElementById('cep');

cep.addEventListener('focusout', () => buscaEndereco(cep.value));
