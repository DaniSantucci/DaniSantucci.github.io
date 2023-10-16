const items_receita = [ /* 1 - adicionar cada vez que incluir receita, cada linha = card*/
    { id: "bolo-cenoura", data_categorias: "doce", title: "Bolo de Cenoura", link: "bolo-cenoura.html", image: "img/bolocenoura.png", destaque: true },
    { id: "Bananoffe", data_categorias: "doce", title: "Bananoffe", link: "Bananoffe.html", image: "img/bananoffe.png", destaque: true },  
    { id: "pudim", data_categorias: "doce", title: "Pudim", link: "pudim.html", image: "img/pudim.png", destaque: true },
    { id: "donuts", data_categorias: "doce", title: "Donuts", link: "donuts.html", image: "img/donuts.png", destaque: true },
    { id: "sushi", data_categorias: "prato-principal", title: "Sushi", link: "sushi.html", image: "img/sushi.png", destaque: true },
    { id: "bulgogi", data_categorias: "prato-principal", title: "Bulgogi", link: "bulgogi.html", image: "img/bulgogi.png", destaque: true },
    { id: "pizza", data_categorias: "salgado", title: "Pizza", link: "pizza.html", image: "img/pizza.png", destaque: true },
    { id: "pao", data_categorias: "salgado", title: "Pão", link: "pao.html", image: "img/pão.png", destaque: true },
    { id: "coxinha", data_categorias: "salgado", title: "Coxinha", link: "coxinha.html", image: "img/coxinha.png", destaque: false },
    { id: "kibe", data_categorias: "salgado", title: "Kibe", link: "kibe.html", image: "img/kibe.png", destaque: false },
    { id: "panqueca", data_categorias: "prato-principal", title: "Panqueca", link: "panqueca.html", image: "img/panqueca.png", destaque: false },
    { id: "Frango-com-linguiça", data_categorias: "prato-principal", title: "Frango-com-linguiça", link: "Frango-com-linguica.html", image: "img/frango-cerveja.png", destaque: false },
    { id: "navajo-tacos", data_categorias: "prato-principal", title: "Navajo Tacos", link: "navajo-tacos.html", image: "img/navajo.png", destaque: false },
    { id: "bife-mongoliano", data_categorias: "prato-principal", title: "Bife Mongoliano", link: "bife-mongoliano.html", image: "img/bife-mongoliano.png", destaque: false },
    { id: "lagarto-recheado", data_categorias: "prato-principal", title: "Lagarto Recheado", link: "lagarto-recheado.html", image: "img/lagarto.png", destaque: false },
    { id: "Arroz-da-Tasmania", data_categorias: "prato-principal", title: "Arroz da Tasmania", link: "Arroz-Tasmania.html", image: "img/Arroz-da-Tasmania.png", destaque: false },
    { id: "Tempurá", data_categorias: "prato-principal", title: "Tempurá", link: "tempura.html", image: "img/tempura.png", destaque: false },
    { id: "Buffalo-Wings", data_categorias: "prato-principal", title: "Buffalo Wings", link: "buffalo-wings.html", image: "img/Buffalo-Wings.png", destaque: false },
    { id: "Charuto-de-couve", data_categorias: "prato-principal", title: "Charuto de Couve", link: "Charuto-de-couve.html", image: "img/charuto.png", destaque: false },
    { id: "Creme-Chines", data_categorias: "doce", title: "Creme Chinês", link: "creme-chines.html", image: "img/creme-chines.png", destaque: false },
    { id: "Creme-de-espinafre", data_categorias: "acompanhamento", title: "Creme de Espinafre", link: "creme-de-espinafre.html", image: "img/Creme-Espinafre.png", destaque: false },
    { id: "Beringela-Agridoce", data_categorias: "prato-principal", title: "Beringela Agridoce", link: "beringela-agridoce.html", image: "img/beringela-agridoce.png", destaque: false},
    { id: "Dadinho-tapioca", data_categorias: "acompanhamento", title: "Dadinho de Tapioca", link: "dadinho-tapioca.html", image: "img/dadinho-tapioca.png", destaque: false },
    { id: "Kimchi", data_categorias: "acompanhamento", title: "Kimchi", link: "kimchi.html", image: "img/kimchi.png", destaque: false },
    { id: "Molho-barbecue", data_categorias: "acompanhamento", title: "Molho Barbecue", link: "molho-barbecue.html", image: "img/Molho-Barbecue.png", destaque: false },
    { id: "Panetone", data_categorias: "doce", title: "Panetone", link: "panetone.html", image: "img/panetone.png", destaque: false },
    { id: "Bolo-chocolate", data_categorias: "doce", title: "Bolo de Chocolate", link: "bolo-chocolate.html", image: "img/bolo-chocolate.png", destaque: false },
    { id: "Brigadeiro", data_categorias: "doce", title: "Brigadeiro", link: "brigadeiro.html", image: "img/brigadeiro.png", destaque: false },


]

function adicionarReceita(item) {
    //2 - Função adiciona receita no card (div receita-card)
    var divReceita = document.createElement('div'); /* document fala sobre o arquivo HTML, createElement('div') cria div vazia*/
    divReceita.classList.add('receita-card'); /*na lista de classe, add a classe receita card*/
    divReceita.id = item.id; /*adiciona o ID no card*/
    divReceita.setAttribute("data-categorias", item.data_categorias); /*adiciona a categoria no card*/

    // Cria o elemento 'a' com o link
    var link = document.createElement('a'); /*cria um link*/
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
    link.appendChild(h3);


    // Adiciona o link e o título à div da receita
    divReceita.appendChild(link);
    divReceita.appendChild(h3);

    // console.log(divReceita) /*printa a div na tela*/
    // Encontra a div com id "lista-receitas"
    var divReceitas = document.getElementById('lista-receitas');

    // Adiciona a nova receita à div de receitas
    divReceitas.appendChild(divReceita);
}

function limparListaReceitas() {
    var divReceitas = document.getElementById('lista-receitas');
    divReceitas.innerHTML = '';
}

function ocultarMensagemBusca() {
    var naoEncontrado = document.getElementById('resultado-busca');    
    naoEncontrado.style.display = 'none';
}

function mostarMensagemBusca(){
    var naoEncontrado = document.getElementById('resultado-busca');    
    naoEncontrado.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    items_receita.filter(function (item) {
        return item.destaque;
    }).forEach(
        element => {
            adicionarReceita(element);
        }
    )
});

document.addEventListener('DOMContentLoaded', function () {

    // Função para filtrar receitas por categoria
    function filtrarReceitasPorCategoria(categoria) {

        limparListaReceitas();
        ocultarMensagemBusca();

        if (categoria == '') {
            items = items_receita;
        } else {
            items = items_receita.filter(function (item) {
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

    categoriaDoce.addEventListener('click', function (event) {
        event.preventDefault();
        filtrarReceitasPorCategoria('doce');
    });

    categoriaSalgado.addEventListener('click', function (event) {
        event.preventDefault();
        filtrarReceitasPorCategoria('salgado');
    });

    categoriaPratoPrincipal.addEventListener('click', function (event) {
        event.preventDefault();
        filtrarReceitasPorCategoria('prato-principal');
    });

    categoriaAcompanhamento.addEventListener('click', function (event) {
        event.preventDefault();
        filtrarReceitasPorCategoria('acompanhamento');
    });

    categoriaTodos.addEventListener('click', function (event) {
        event.preventDefault();
        filtrarReceitasPorCategoria('');
    });

    // Função para realizar a busca
    function realizarBusca() {
        var termoBusca = document.getElementById('campo-busca').value.toLowerCase();
        var receitas = document.querySelectorAll('.receita-card');
        var itemEncontrado = false;

        receitas.forEach(function (receita) {
            var tituloReceita = receita.querySelector('h3').textContent.toLowerCase();

            if (tituloReceita.includes(termoBusca) || termoBusca === '') {
                itemEncontrado = true;
                receita.style.display = 'block';
            } else {
                receita.style.display = 'none';
            }
        });

        if(itemEncontrado) {
            ocultarMensagemBusca();
        } else {
            mostarMensagemBusca();
        }
    }

    // Adiciona um event listener ao botão de busca
    var botaoBusca = document.getElementById('botao-busca');
    botaoBusca.addEventListener('click', function (event) {
        event.preventDefault();
        realizarBusca();
    });

    // Adiciona um event listener para a tecla Enter no campo de busca
    var campoBusca = document.getElementById('campo-busca');
    campoBusca.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            realizarBusca();
        }
    });


    
});
