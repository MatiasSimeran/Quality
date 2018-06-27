function ajustarTopeInfo()
{
    
    var i, caracteres = 0;
    var valoresSeleccionados = $('.chosen-select').val();
    
    if(valoresSeleccionados != undefined)
    {
        for(i=0; i<valoresSeleccionados.length; i++)
        {
            caracteres += valoresSeleccionados[i].length;
        }
    }
    
    
    if(caracteres < 41 || i < 4)
    {
        document.getElementById("infoContainer").innerHTML = '<i class="fa fa-pencil prefix grey-text"></i>'+
        '<textarea type="text" name="info" required placeholder="Informacion adicional" id="info" class="md-textarea form-control form-control-sm items-form-comentario"'+
            'rows="4"></textarea>';
    }


    if((caracteres > 43 && caracteres < 86) || i == 4)
    {
        document.getElementById("infoContainer").innerHTML = '<i class="fa fa-pencil prefix grey-text"></i>'+
        '<textarea style="margin-top: 2rem;" type="text" name="info" required placeholder="Informacion adicional" id="info" class="md-textarea form-control form-control-sm items-form-comentario"'+
            'rows="4"></textarea>';
    }

    if((caracteres > 86 && caracteres < 119)|| i == 8)
    {
        document.getElementById("infoContainer").innerHTML = '<i class="fa fa-pencil prefix grey-text"></i>'+
        '<textarea style="margin-top: 4rem;" type="text" name="info" required placeholder="Informacion adicional" id="info" class="md-textarea form-control form-control-sm items-form-comentario"'+
            'rows="4"></textarea>';
    }

    if(caracteres > 119 || i == 12)
    {
        document.getElementById("infoContainer").innerHTML = '<i class="fa fa-pencil prefix grey-text"></i>'+
        '<textarea style="margin-top: 6rem;" type="text" name="info" required placeholder="Informacion adicional" id="info" class="md-textarea form-control form-control-sm items-form-comentario"'+
            'rows="4"></textarea>';
    }
    
    


      
}

    

