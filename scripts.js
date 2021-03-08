
function carregar() {
    let data = new Date()
    let hora = data.getHours()
    let msg = document.querySelector("div#msg")
    let img = document.querySelector("img#imagem")
    //msg.innerHTML = `Agora são ${hora} horas <br>`
    if (hora >= 0 && hora <12) {
        //BOM DIA
        msg.innerHTML = `Agora são ${hora} horas. <br> Bom dia!`
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#F0E1CE'
        document.body.style.color = '#803F3B'
    }else{
        if (hora >= 12 && hora <18) {
            //BOA TARDE
            msg.innerHTML = `Agora são ${hora} horas. <br> Boa Tarde!`
            img.src = 'fototarde.png'
            document.body.style.backgroundColor = '#B47470'
        } else{
            //BOA NOITE
            msg.innerHTML = `Agora são ${hora} horas. <br> Boa noite!`
            img.src = 'fotonoite.png'
            document.body.style.backgroundColor = '#322843'
        }

    }
}