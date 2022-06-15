function cadastrar() {
    if (parseInt(document.getElementById("ano").value) < 1900 || document.getElementById("ano").value == "") {
        document.getElementById("ano-span").innerHTML = "Ano Inválido"
    } else {
        document.getElementById("ano-span").innerHTML = " "
    }

    if (document.getElementById("modelo").value == "") {
        document.getElementById("modelo-span").innerHTML = "Modelo Inválido"
    } else {
        document.getElementById("modelo-span").innerHTML = " "
    }

    let preco = '';
    preco = document.getElementById('preco').value;
    preco = preco.substring(3)
    preco = preco.replaceAll('.', '')
    preco = preco.replaceAll(',', '.')
    let precoInt = parseInt(preco)

    if (precoInt > 100000000) {
        document.getElementById("preco-span").innerHTML = "Preço Inválido"
    } else if (document.getElementById("preco").value == "") {
        document.getElementById("preco-span").innerHTML = "Preço Inválido"
    } else {
        document.getElementById("preco-span").innerHTML = " "
    }

    if (document.getElementById("descricao").value == "") {
        document.getElementById("descricao-span").innerHTML = "Descrição Inválido"
    } else {
        document.getElementById("descricao-span").innerHTML = " "
    }
}
function limpar() {
    document.getElementById('modelo').value = '';
    document.getElementById('ano').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('foto').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('marca').value = 'Volkswagen';
    document.getElementById('cor').value = 'Cinza';
    document.getElementById('modelo-span').innerHTML = '';
    document.getElementById('ano-span').innerHTML = '';
    document.getElementById('preco-span').innerHTML = '';
    document.getElementById('descricao-span').innerHTML = '';
}
function irEditar(){
    window.location = 'editar.html'
}
function excluir(div) {
    if(div== 'Volkswagen'){
        element = document.getElementById("vwid");
        element2 = document.getElementById("vwid2");
        element.remove()
        element2.remove()
    }
    if(div== 'BMW'){
        element = document.getElementById("bmwid");
        element2 = document.getElementById("bmwid2");
        element.remove()
        element2.remove()
    }
    if(div== 'Honda'){
        element = document.getElementById("Hondaid");
        element2 = document.getElementById("Hondaid2");
        element.remove()
        element2.remove()
    }
    if(div== 'Volkswagen2'){
        element = document.getElementById("Volkswagen2id");
        element2 = document.getElementById("Volkswagen2id2");
        element.remove()
        element2.remove()
    }
    if(div== 'Fiat'){
        element = document.getElementById("Fiatid");
        element2 = document.getElementById("Fiatid2");
        element.remove()
        element2.remove()
    }
}
(function () {
    VMasker(document.getElementById("preco")).maskMoney({ unit: 'R$' });
    VMasker(document.getElementById("ano")).maskPattern('9999');
})();