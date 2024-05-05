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

        const link = document.createElement('a');
        link.setAttribute('href', `${item.url}`);
        link.setAttribute('target', `_blank`);
        link.setAttribute('download', `${item.name}`)

        const img = document.createElement('img');
        img.setAttribute('src', `${item.url}`);
        img.classList.add('imagem');
        
        link.appendChild(img);
        div.appendChild(link);
        container.appendChild(div);
    })

}
