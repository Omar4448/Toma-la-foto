var libreria = window.webkitSpeechRecognition;
var voz = new libreria()
var guardar = "src"
voz.lang = "es-MX"


function iniciar() {
    voz.start()
}
voz.onresult = function (microfono) {
    console.log(microfono)
    mensaje = microfono.results[0][0].transcript
    document.getElementById("textbox").value = mensaje
    if (mensaje.toLowerCase().includes("toma la foto")) {
        hablar("Sonríe")
        Webcam.attach("#camara")
        document.getElementById("resultado").style.backgroundImage = "url(gif.gif)"
        setTimeout(tomarFoto, 7000)
    }

    if (mensaje.toLowerCase().includes("guardar")) {
        hablar("Listo")
        document.getElementById("link").href = guardar
        document.getElementById("link").click()
    }

    if (!mensaje.toLowerCase().includes("toma la foto")&&!mensaje.toLowerCase().includes("guardar")) {
        hablar("Lo siento")
        hablar("Por favor ejecuta un comando válido ")
    }
}

function tomarFoto() {
    Webcam.snap(function (src) {
        guardar = src
        document.getElementById("resultado").style.backgroundImage = "url(" + src + ")"
    })
}

function hablar(mensaje) {
    var altavoz = window.speechSynthesis
    var audio = new SpeechSynthesisUtterance(mensaje)
    audio.lang = "es"
    altavoz.speak(audio)
}

function MostrarBotones(){
    console.log("Holaaaaaaaaaaaaaa")
    document.getElementById("acciones").style.visibility="visible"
}
function OcultarBotones(){
    console.log("Holaaaaaaaaaaaaaa")
    document.getElementById("acciones").style.visibility="hidden"
    
}

function Agregar(){
    collage = document.getElementById("collage")
    collage.innerHTML += '<img src="'+guardar+'">'
}

function Borrar(){
    document.getElementById("resultado").style.backgroundImage = "url(resultado.jpg)"
}