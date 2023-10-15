const items_receita = [ /* 1 - adicionar cada vez que incluir receita, cada linha = card*/
    { id: "bolo-cenoura", data_categorias: "doce", title: "Bolo de Cenoura", link: "bolo-cenoura.html", image: "img/bolocenoura.png", destaque: true },
    { id: "panqueca", data_categorias: "prato-principal", title: "Panqueca", link: "panqueca.html", image: "img/panqueca.png", destaque: true },
    { id: "pizza", data_categorias: "salgado", title: "Pizza", link: "pizza.html", image: "img/pizza.png", destaque: true },
    { id: "pao", data_categorias: "salgado", title: "Pão", link: "pao.html", image: "img/pão.png", destaque: true },
    { id: "sushi", data_categorias: "prato-principal", title: "Sushi", link: "sushi.html", image: "img/sushi.png", destaque: true },
    { id: "bulgogi", data_categorias: "prato-principal", title: "Bulgogi", link: "bulgogi.html", image: "img/bulgogi.png", destaque: true },
    { id: "pudim", data_categorias: "doce", title: "Pudim", link: "pudim.html", image: "img/pudim.png", destaque: true },
    { id: "frango-assado", data_categorias: "prato-principal", title: "Frango Assado", link: "frango-assado.html", image: "img/frango.png", destaque: false },
    { id: "donuts", data_categorias: "doce", title: "donuts", link: "donuts.html", image: "img/donuts.png", destaque: false },
    { id: "abobrinha-recheada", data_categorias: "prato-principal", title: "Abobrinha Recheada", link: "abobrinha-recheada.html", image: "img/abobrinha.png", destaque: false },
    { id: "Arroz-da-Tasmania", data_categorias: "prato-principal", title: "Arroz da Tasmania", link: "Arroz-da-Tasmania.html", image: "img/Arroz-da-Tasmania.png", destaque: false },
    { id: "Beringela-Recheada", data_categorias: "acompanhamento", title: "Beringela Recheada", link: "Beringela-recheada.html", image: "img/Beringela.png", destaque: false },
    { id: "Buffalo-Wings", data_categorias: "prato-principal", title: "Buffalo Wings", link: "Buffalo-Wings.html", image: "img/Buffalo-Wings.png", destaque: false },
    { id: "Charuto-de-repolho", data_categorias: "prato-principal", title: "Charuto de repolho", link: "Charuto-de-repolho.html", image: "img/Charuto-de-repolho.png", destaque: true },
    { id: "Creme-Chines", data_categorias: "doce", title: "Creme Chinês", link: "Creme-chines.html", image: "img/Creme-chines.png", destaque: false },
    { id: "Creme-de-espinafre", data_categorias: "acompanhamento", title: "Creme de Espinafre", link: "Creme-de-Espinafre.html", image: "img/Creme-espinafre.png", destaque: false },
    { id: "Molho-barbecue", data_categorias: "acompanhamento", title: "Molho Barbecue", link: "Molho-barbecue.html", image: "img/molho-barbecue.png", destaque: false },

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
        //var naoEncontrado = document.getElementById('resultado-busca');

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




