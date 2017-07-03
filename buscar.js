$(document).ready(function(){
    $("#boton").click(function(){
        console.log("click")
        
        $("#resultados").find("tr[id='datos']").each(function(index,value){
            value.remove()
        })
        
        $.ajax({
            url:"http://127.0.0.1:5000/buscarUsuario",
            data: $("#correo").serialize(),
            type: "POST",
            success: function(respuesta){
                console.log(respuesta)
                mostrarResultados(respuesta)
            },
            error: function(respuesta){
                console.log(respuesta)
            }
        })
    })
})

function mostrarResultados (respuesta){
    $.each(respuesta, function(index,valor){
        var fila = "<tr id='datos'>"
        fila += "<td>" + valor["id"] + "</td>"
        fila += "<td>" + valor["nombre"] + "</td>"
        fila += "<td>" + valor["apellido1"] + "</td>"
        fila += "<td>" + valor["apellido2"] + "</td>"
        fila += "<td>" + valor["correo"] + "</td>"
        fila += "<td>" + valor["password"] + "</td>"
        fila += "<td>" + valor["tipo"] + "</td>"
        fila += "</tr>"
        
        $("#resultados").append(fila)
    })
}