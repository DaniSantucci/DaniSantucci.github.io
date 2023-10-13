const items_receita = [
    { id:"bolo-cenoura", data_categorias:"doce", title:"Bolo de Cenoura", link:"bolo-cenoura.html", image:"img/bolocenoura.png", destaque: true},
    { id:"panqueca", data_categorias:"prato-principal", title:"Panqueca", link:"panqueca.html", image:"img/panqueca.png", destaque: true},
    { id:"pizza", data_categorias:"salgado", title:"Pizza", link:"pizza.html", image:"img/pizza.png", destaque: true},
    { id:"pao", data_categorias:"salgado", title:"Pão", link:"pao.html", image:"img/pão.png", destaque: true},
    { id:"sushi", data_categorias:"prato-principal", title:"Sushi", link:"sushi.html", image:"img/sushi.png", destaque: true},
    { id:"bulgogi", data_categorias:"prato-principal", title:"bulgogi", link:"bulgogi.html", image:"img/bulgogi.png", destaque: true},
    { id:"pudim", data_categorias:"doce", title:"Pudim", link:"pudim.html", image:"img/pudim.png", destaque: true},
    { id:"frango-assado", data_categorias:"prato-principal", title:"Frango Assado", link:"frango-assado.html", image:"img/frango.png", destaque: false},
    { id:"donuts", data_categorias:"doce", title:"donuts", link:"donuts.html", image:"img/donuts.png", destaque: false},
]

function adicionarReceita(item) {
    // Cria o elemento div com a classe "receita-card"
    var divReceita = document.createElement('div');
    divReceita.classList.add('receita-card');
    divReceita.id = item.id;
    divReceita.setAttribute("data-categorias", item.data_categorias);
    
    // Cria o elemento 'a' com o link
    var link = document.createElement('a');
    link.href = item.link;
    link.title = item.title;
    
    // Cria o elemento 'img' para a imagem
    var img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    
    // Adiciona a imagem ao link
    link.appendChild(img);
    
    // Cria o elemento 'h3' para o título
    var h3 = document.createElement('h3');
    h3.textContent = item.title;
    
    // Adiciona o link e o título à div da receita
    divReceita.appendChild(link);
    divReceita.appendChild(h3);
    
    console.log(divReceita)
    // Encontra a div com a classe "receitas"
    var divReceitas = document.getElementById('lista-receitas');
    
    // Adiciona a nova receita à div de receitas
    divReceitas.appendChild(divReceita);
}

function limparListaReceitas(){
    var divReceitas = document.getElementById('lista-receitas');
    
    divReceitas.innerHTML = '';
}
document.addEventListener('DOMContentLoaded', function(){
    items_receita.filter(function(item){
        return item.destaque;
    }).forEach(
        element => {
            adicionarReceita(element);
        }
    )
});

document.addEventListener('DOMContentLoaded', function() {

    // Função para filtrar receitas por categoria
    function filtrarReceitasPorCategoria(categoria) {

        limparListaReceitas();
        
        if(categoria == ''){
            items = items_receita;
        }else {
            items = items_receita.filter(function(item){
                return item.data_categorias == categoria;
            })
        }

        items.forEach(element => {
            adicionarReceita(element);
        });

    }
    

    // Adiciona event listeners às categorias
    var categoriaDoce = document.getElementById('doce');
    var categoriaSalgado = document.getElementById('salgado');
    var categoriaPratoPrincipal = document.getElementById('prato-principal');
    var categoriaAcompanhamento = document.getElementById('acompanhamento');
    var categoriaTodos = document.getElementById('todos');

    categoriaDoce.addEventListener('click', function(event) {
        event.preventDefault(); 
        filtrarReceitasPorCategoria('doce');
    });

    categoriaSalgado.addEventListener('click', function(event) {
        event.preventDefault(); 
        filtrarReceitasPorCategoria('salgado');
    });

    categoriaPratoPrincipal.addEventListener('click', function(event) {
        event.preventDefault(); 
        filtrarReceitasPorCategoria('prato-principal');
    });

    categoriaAcompanhamento.addEventListener('click', function(event) {
        event.preventDefault(); 
        filtrarReceitasPorCategoria('acompanhamento');
    });

    categoriaTodos.addEventListener('click', function(event) {
        event.preventDefault(); 
        filtrarReceitasPorCategoria('');
    });



    // Função para voltar
    /*function voltar() {
        window.history.back();
    }

    // Adiciona um event listener ao botão de voltar
    var botaoVoltar = document.getElementById('botao-voltar');
    botaoVoltar.addEventListener('click', function(event) {
        event.preventDefault(); 
        voltar();



        
    });
    */
});
