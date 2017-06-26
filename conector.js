$(document).ready(function(){
    console.log("Cargado!")
    mostrar()
})

function mostrar(){
    $.ajax({
        url:"http://127.0.0.1:5000/usuarios",
        success: function(respuesta){
            //console.log(respuesta)
            mostrarResultados(respuesta)
        },
        error: function(respuesta){
            console.log(respuesta)
        }
    })
}

function mostrarResultados(resultados){
    $.each(resultados, function(index,valor){
           console.log(index)
           console.log(valor)
           })
}