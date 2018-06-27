function pCons() {
    $("#btnConsulta").click();
}

function manejadorModals() {

    var nombre = $("#nombre").val();
    var mail = $("#mail").val();
    var telefono = $("#telefono").val();
    var motivo = $(".chosen-select").val();
    var info = $("#info").val();
    var regExNombre = /[0-9]+/;
    var regExMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (info == "" || nombre == "" || regExMail.test(mail) == false || regExNombre.test(nombre) == true || motivo.length == 0 || $.isNumeric(telefono) == false) {

        var textoP = "";
        var banderaTel = false;

        if (regExNombre.test(nombre) == true) {
            textoP = textoP + "Su nombre no puede contener caracteres no alfabéticos. <br>";
        }
        if (info == "") {
            textoP = textoP + "Por favor, agregue la información correspondiente a su consulta. <br>";
        }
        if (nombre == "") {
            textoP = textoP + "Por favor, indique su nombre en el formulario. <br>";
        }
        if (regExMail.test(mail) == false) {
            textoP = textoP + "La dirección de email indicada no es válida. <br>";
        }
        if (telefono == "") {
            textoP = textoP + "Por favor, indique su número de teléfono. <br>";
            banderaTel = true;
        }
        if ($.isNumeric(telefono) == false && banderaTel == false) {
            textoP = textoP + "El número de teléfono indicado no es válido. <br>";
        }
        if (motivo.length == 0) {
            textoP = textoP + "Por favor, indique el motivo de su consulta. <br>";
        }

        $("#msjErrorModal").html(textoP);
        $("#modalError").modal();
    } else {
        $("#myModal").modal();
    }

}