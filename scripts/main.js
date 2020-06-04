const perna = document.querySelector("#botao1")

perna.addEventListener("click", image)    

    function image(event) {
        var img = document.createElement("img")
        img.src = "assets/panturrilha2.jpg"
        document.getElementById("image").appendChild(img)
        var img = document.createElement("img")
        img.src = "assets/agachamento.jpg"
        document.getElementById("image").appendChild(img)
        var img = document.createElement("img")
        img.src = "assets/passada.jpg"
        document.getElementById("image").appendChild(img)
        var img = document.createElement("img")
        img.src = "assets/agachasalto.jpg"
        document.getElementById("image").appendChild(img)
        var img = document.createElement("img")
        img.src = "assets/agachaiso.jpg"
        document.getElementById("image").appendChild(img)
        var img = document.createElement("img")
        img.src = "assets/afundo.jpg"
        document.getElementById("image").appendChild(img)
        var img = document.createElement("img")
        img.src = "assets/sumo.jpg"
        document.getElementById("image").appendChild(img)

}



const abdomem = document.querySelector("#botao2")

abdomem.addEventListener("click", function image() {
    var img = document.createElement("img")
    img.src = "assets/abdominal.jpg"
    document.getElementById("image").appendChild(img)
    var img = document.createElement("img")
    img.src = "assets/prancha.jpg"
    document.getElementById("image").appendChild(img)
    var img = document.createElement("img")
    img.src = "assets/elevacaoperna.jpg"
    document.getElementById("image").appendChild(img)
    var img = document.createElement("img")
    img.src = "assets/escalador.jpg"
    document.getElementById("image").appendChild(img)
    var img = document.createElement("img")
    img.src = "assets/abdominalElevada.jpg"
    document.getElementById("image").appendChild(img)
})

const superior = document.querySelector("#botao3")

superior.addEventListener("click", function image() {
    var img = document.createElement("img")
    img.src = "assets/flexao.jpg"
    document.getElementById("image").appendChild(img)
    var img = document.createElement("img")
    img.src = "assets/triceps.jpg"
    document.getElementById("image").appendChild(img)
    var img = document.createElement("img")
    img.src = "assets/elevacao.jpg"
    document.getElementById("image").appendChild(img)
    var img = document.createElement("img")
    img.src = "assets/flexao.jpg"
    document.getElementById("image").appendChild(img)
    var img = document.createElement("img")
    img.src = "assets/roscalateral.jpg"
    document.getElementById("image").appendChild(img)
    var img = document.createElement("img")
    img.src = "assets/flexaoinclinada.jpg"
    document.getElementById("image").appendChild(img)
})