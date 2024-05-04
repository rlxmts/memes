const container = document.querySelector('.container');
const endPointAPI = 'https://api.imgflip.com/get_memes';

buscaImg();
async function buscaImg(){

    try{
        const api = await fetch(endPointAPI);
        const apiConvertida = await api.json();
        criarCards(apiConvertida)
    }catch(error){

        container.innerHTML = `
            <p>Parece que houve um erro: ${error}</p>`;
    }
}

function criarCards(img){

    
    img.data.memes.forEach(item => {

        const div = document.createElement('div');
        div.classList.add('container-img');

        const img = document.createElement('img');
        img.setAttribute('src', `${item.url}`);
        img.classList.add('imagem');

        div.appendChild(img);
        container.appendChild(div);

        img.onclick = ()=> baixarImagem(item);
    })

}

function baixarImagem(imagem){
    const link = document.createElement('a');
    link.setAttribute('href', `${imagem.url}`);
    link.download = imagem.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
