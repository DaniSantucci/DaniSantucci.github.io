document.addEventListener('DOMContentLoaded', function() {
    // Função para filtrar receitas por categoria
    function filtrarReceitasPorCategoria(categoria) {
        var receitas = document.querySelectorAll('.receita-card');
        receitas.forEach(function(receita) {
            var categorias = receita.getAttribute('data-categorias').split(' ');
            if (categorias.includes(categoria) || categoria === 'all') {
                receita.style.display = 'block';
            } else {
                receita.style.display = 'none';
            }
        });
    }

    // Adiciona event listeners às categorias
    var categoriaDoce = document.getElementById('doce');
    var categoriaSalgado = document.getElementById('salgado');
    var categoriaPratoPrincipal = document.getElementById('prato-principal');
    var categoriaAcompanhamento = document.getElementById('acompanhamento');

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

    // Função para voltar
    function voltar() {
        window.history.back();
    }

    // Adiciona um event listener ao botão de voltar
    var botaoVoltar = document.getElementById('botao-voltar');
    botaoVoltar.addEventListener('click', function(event) {
        event.preventDefault(); 
        voltar();
    });
});
