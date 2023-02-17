$(document).ready((e)=>{
    e.preventDefault;
    let listBox = $('main .list');
    $('main button').one('click', function(){
        $.getJSON('js/data.json', (data)=>{
            for(let i=0; i<data.presidents.length; i++){
                listBox.append(`<ul id="${data.presidents[i].id}"></ul>`);
                $(`#${data.presidents[i].id}`).append(`<li>Nom : ${data.presidents[i].nom}</li>`);
                $(`#${data.presidents[i].id}`).append(`<li>Mandat : ${data.presidents[i].mandat}</li>`);
                $(`#${data.presidents[i].id}`).append(`<li>Date de naissance : ${data.presidents[i].naissance}</li>`);
                $(`#${data.presidents[i].id}`).append(`<li>Date de décès : ${data.presidents[i].deces}</li>`);
                $(`#${data.presidents[i].id}`).append(`<li><img src="${data.presidents[i].url}" alt="${"photo de " + data.presidents[i].nom}">
                </li>`);
            }
        })
    })
});