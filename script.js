let consultaCEP = fetch('https://viacep.com.br/ws/88139137/json/')
    .then(resposta => resposta.json())
    .then(r => {
        if(r.erro) {
            throw new Error('CEP inválido!');
        } else {
            console.log(r);
        }    
    })
    .catch(erro => {
        erro.message = 'CEP inválido'
        console.log(erro)
    })
    .finally(() => console.log('Processamento concluído!'));