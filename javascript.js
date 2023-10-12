document.getElementById('categoria-doce').addEventListener('click', function() {
    filtrarReceitasPorCategoria('categoria-doce');
});

document.getElementById('categoria-salgado').addEventListener('click', function() {
    filtrarReceitasPorCategoria('categoria-salgado');
});

document.getElementById('categoria-prato-principal').addEventListener('click', function() {
    filtrarReceitasPorCategoria('categoria-prato-principal');
});

/* cod2*/

function filtrarReceitasPorCategoria(categoria) {
    var receitas = document.querySelectorAll('.receita-card');
    receitas.forEach(function(receita) {
        var categorias = receita.getAttribute('data-categorias').split(' ');
        if (categorias.includes(categoria)) {
            receita.style.display = 'block';
        } else {
            receita.style.display = 'none';
        }
    });
}
