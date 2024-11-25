$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoImagemNova = $('#endereco-imagem-nova').val();
        const novaItem = $('<li style="display: none"></li>');
        $ (`<img src="${enderecoImagemNova}"/>`).appendTo (novaItem);
        $ (`
            <div class="overlay-imagem-jpg"> 
                <a href="${enderecoImagemNova}" target="_blank" 
                    title="Ver imagem em tamanho real"> 
                    Ver imagem em tamanho real
                </a>
                </div>
            `).appendTo (novaItem);
            $(novaItem).appendTo('ul');
            $(novaItem).fadeIn(1000);
            $('#endereco-imagem-nova').val('');    
    })
});