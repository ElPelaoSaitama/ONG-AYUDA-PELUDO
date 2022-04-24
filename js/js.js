function irArriba(){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        var botonArriba = document.getElementById('botonArriba');

        if (scroll > 300){
            botonArriba.style.right = 20 + "px";
        } else {
            botonArriba.style.right = -100 + "px"; 
        }

    })
}

irArriba();

function captura(){
    var nombre = document.getElementById("nombres").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefono").value;
    var asunt = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    if (nombre == ""){
        alert("Debe ingresar su nombre");
        document.getElementById("nombres").focus();
    }else{
        if (email == ""){
            alert("Debe ingresar su email");
            document.getElementById("email").focus();  
        }else{
            if (telefone == ""){
                alert("Debe ingresar su telefono");
                document.getElementById("telefono").focus();  
            }else{
                if (asunt == ""){
                    alert("Debe ingresar el asunto");
                    document.getElementById("asunto").focus(); 
                }else{
                    if (mensaje == ""){
                        alert("Debe ingresar su mensaje");
                        document.getElementById("mensaje").focus(); 
                    }else{
                        console.log("Nombre: "+ nombre +" Email: "+ email+ " telefono: "+ telefone+ " Asunto: "+ asunt + " Mensaje: " +mensaje)
                        document.getElementById("nombres").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("telefono").value = "";
                        document.getElementById("asunto").value = "";
                        document.getElementById("mensaje").value = "";
                        document.getElementById("nombres").focus();

                    }
                }
            }
        }
    }
    
}

function limpiar(){
    document.getElementById("formulario").reset();
}