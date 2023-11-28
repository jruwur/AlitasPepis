
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
var Newuser = {};
var AllUsers = [];  
localStorage.setItem("Registros", AllUsers);
var Registros =  localStorage.getItem("Registros");

function Registrarse(){
    var names = document.getElementById("names").value;
    var lastnames = document.getElementById("lastnames").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (names != "" && names != null && names != undefined  ){
        if(lastnames != "" && lastnames != null && lastnames != undefined ){
            if(email != "" && email != undefined && email.match(validRegex) ){
                if(pass != "" && pass != null && pass != undefined   ){

                    if(usuarioRepetido == false){
                        Newuser = {
                            "nombres" : names,
                            "apellidos" : lastnames,
                            "correo" : email,
                            "contraseña": pass

                        }
                        AllUsers.push(Newuser);
                        console.log(AllUsers);
                        localStorage.setItem("Registros", AllUsers)
                        alert("Usuario "+names +" registrado correctamente");
                    }
                    else{
                        alert("Usuario ya registrado")
                    }
                }
                else{
                    alert("Escribe una contraseña valida");                    
                }
            }
            else
            {
                alert("Escribe una correo valido");
            }
        }  
        else{            
            alert("Escribe un apellido valido");
        }
    }
    else
    {
        alert("Escribe un nombre valido");
    }
}
function usuarioRepetido(){

}