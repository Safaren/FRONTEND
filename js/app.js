/*
* Comprobacion de los datos del formulario
*/

const nickInput = document.getElementById("nick");
const tamanoInput = document.getElementById("tamano");
const InputForm = document.getElementById("inputForm");




function checkform(event){
    //console.log("Comprobamos el formulario");
    if (nickInput.value.length==0)
    {
        console.log("No ha introducido su nick");
        nickInput.focus();
        event.preventDefault();
        return false;
    } else if(tamanoInput.value=="0")
    {
        console.log("No se ha seleccionado tamaño de panel");
        tamanoInput.focus();
        event.preventDefault();
        return false;
    }
    return true;
    
}


InputForm.addEventListener('submit', checkform);