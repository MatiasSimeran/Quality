$(document).ready(function(){

    $('#btnBasic').click(function(){
         $("#planBasico").prop("checked", true);
    });



    $('#btnSeleccionar1').click(function(){

        if($('#item-1').hasClass('imagen-seleccionada')){
            $('#item-1').removeClass('imagen-seleccionada');
            $('#btnSeleccionar1').removeClass('btn-seleccionado');
            document.getElementById("btnSeleccionar1").innerHTML = "Seleccionar";
            document.getElementById("btnSeleccionar1").value="Seleccionar";
            $("#desaWeb").prop("checked", false);
        }else{
            $('#item-1').addClass('imagen-seleccionada');
            $('#btnSeleccionar1').addClass('btn-seleccionado');
            document.getElementById("btnSeleccionar1").innerHTML = "Seleccionado";
            document.getElementById("btnSeleccionar1").value="Seleccionado";
            $("#desaWeb").prop("checked", true);
        }
    });

    $('#btnSeleccionar2').click(function(){

        if($('#item-2').hasClass('imagen-seleccionada')){
            $('#item-2').removeClass('imagen-seleccionada');
            $('#btnSeleccionar2').removeClass('btn-seleccionado');
            document.getElementById("btnSeleccionar2").value="Seleccionar";
            $("#videoMarca").prop("checked", false);
        }else{
            $('#item-2').addClass('imagen-seleccionada');
            $('#btnSeleccionar2').addClass('btn-seleccionado');
            document.getElementById("btnSeleccionar2").value="Seleccionado";
            $("#videoMarca").prop("checked", true);
        }
    });

    $('#btnSeleccionar3').click(function(){

        if($('#item-3').hasClass('imagen-seleccionada')){
            $('#item-3').removeClass('imagen-seleccionada');
            $('#btnSeleccionar3').removeClass('btn-seleccionado');
            document.getElementById("btnSeleccionar3").value="Seleccionar";
            $("#fotografia").prop("checked", false);
        }else{
            $('#item-3').addClass('imagen-seleccionada');
            $('#btnSeleccionar3').addClass('btn-seleccionado');
            document.getElementById("btnSeleccionar3").value="Seleccionado";
            $("#fotografia").prop("checked", true);
        }
    });

    $('#btnSeleccionar4').click(function(){

        if($('#item-4').hasClass('imagen-seleccionada')){
            $('#item-4').removeClass('imagen-seleccionada');
            $('#btnSeleccionar4').removeClass('btn-seleccionado');
            document.getElementById("btnSeleccionar4").value="Seleccionar";
            $("#desaMobile").prop("checked", false);
        }else{
            $('#item-4').addClass('imagen-seleccionada');
            $('#btnSeleccionar4').addClass('btn-seleccionado');
            document.getElementById("btnSeleccionar4").value="Seleccionado";
            $("#desaMobile").prop("checked", true);
        }
    });

    $('#btnSeleccionar5').click(function(){

        if($('#item-5').hasClass('imagen-seleccionada')){
            $('#item-5').removeClass('imagen-seleccionada');
            $('#btnSeleccionar5').removeClass('btn-seleccionado');
            document.getElementById("btnSeleccionar5").value="Seleccionar";
            $("#seosem").prop("checked", false);
        }else{
            $('#item-5').addClass('imagen-seleccionada');
            $('#btnSeleccionar5').addClass('btn-seleccionado');
            document.getElementById("btnSeleccionar5").value="Seleccionado";
            $("#seosem").prop("checked", true);
        }
    });

    $('#btnSeleccionar6').click(function(){

        if($('#item-6').hasClass('imagen-seleccionada')){
            $('#item-6').removeClass('imagen-seleccionada');
            $('#btnSeleccionar6').removeClass('btn-seleccionado');
            document.getElementById("btnSeleccionar6").value="Seleccionar";
            $("#analytics").prop("checked", false);
        }else{
            $('#item-6').addClass('imagen-seleccionada');
            $('#btnSeleccionar6').addClass('btn-seleccionado');
            document.getElementById("btnSeleccionar6").value="Seleccionado";
            $("#analytics").prop("checked", true);
        }
    });

    $('#btnSeleccionar7').click(function(){

        if($('#item-7').hasClass('imagen-seleccionada')){
            $('#item-7').removeClass('imagen-seleccionada');
            $('#btnSeleccionar7').removeClass('btn-seleccionado');
            document.getElementById("btnSeleccionar7").value="Seleccionar";
            $("#publicidad").prop("checked", false);
        }else{
            $('#item-7').addClass('imagen-seleccionada');
            $('#btnSeleccionar7').addClass('btn-seleccionado');
            document.getElementById("btnSeleccionar7").value="Seleccionado";
            $("#publicidad").prop("checked", true);
        }
    });

    $('#btnSeleccionar8').click(function(){

        if($('#item-8').hasClass('imagen-seleccionada')){
            $('#item-8').removeClass('imagen-seleccionada');
            $('#btnSeleccionar8').removeClass('btn-seleccionado');
            document.getElementById("btnSeleccionar8").value="Seleccionar";
            $("#redes").prop("checked", false);
        }else{
            $('#item-8').addClass('imagen-seleccionada');
            $('#btnSeleccionar8').addClass('btn-seleccionado');
            document.getElementById("btnSeleccionar8").value="Seleccionado";
            $("#redes").prop("checked", true);
        }
    });

    $('#btnSeleccionar9').click(function(){

        if($('#item-9').hasClass('imagen-seleccionada')){
            $('#item-9').removeClass('imagen-seleccionada');
            $('#btnSeleccionar9').removeClass('btn-seleccionado');
            document.getElementById("btnSeleccionar9").value="Seleccionar";
            $("#disenio").prop("checked", false);
        }else{
            $('#item-9').addClass('imagen-seleccionada');
            $('#btnSeleccionar9').addClass('btn-seleccionado');
            document.getElementById("btnSeleccionar9").value="Seleccionado";
            $("#disenio").prop("checked", true);
        }
    });

    $('#btnSeleccionar10').click(function(){

        if($('#item-10').hasClass('imagen-seleccionada')){
            $('#item-10').removeClass('imagen-seleccionada');
            $('#btnSeleccionar10').removeClass('btn-seleccionado');
            document.getElementById("btnSeleccionar10").value="Seleccionar";
            $("#disenio").prop("checked", false);
        }else{
            $('#item-10').addClass('imagen-seleccionada');
            $('#btnSeleccionar10').addClass('btn-seleccionado');
            document.getElementById("btnSeleccionar10").value="Seleccionado";
            $("#emailmark").prop("checked", true);
        }
    });

    $('#btnSeleccionar11').click(function(){

        if($('#item-11').hasClass('imagen-seleccionada')){
            $('#item-11').removeClass('imagen-seleccionada');
            $('#btnSeleccionar11').removeClass('btn-seleccionado');
            document.getElementById("btnSeleccionar11").value="Seleccionar";
            $("#digitalmark").prop("checked", false);
        }else{
            $('#item-11').addClass('imagen-seleccionada');
            $('#btnSeleccionar11').addClass('btn-seleccionado');
            document.getElementById("btnSeleccionar11").value="Seleccionado";
            $("#digitalmark").prop("checked", true);
        }
    });



});
