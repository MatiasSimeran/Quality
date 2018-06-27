function cargarLinksBlog()
{
    
    var xmlhttp = new XMLHttpRequest();
    
    //Una variable para cada objeto js.
    var blog1 = "";
    var blog2 = "";
    var blog3 = "";

    //Banderas. Por las dudas.
    var bBlog1 = 0;
    var bBlog2 = 0;
    var bBlog3 = 0;

    
    //Solo cuando llegó al estado 4 (que es cuando termina) y si es estado es 200 (es decir, que está todo bien)
    //recién ahí hace todo lo que tiene que hacer.
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        //El responseText es lo que llega de la petición hecha al php. Se puede usar notación
        //de arrays literales para enviar un array de objetos JSON en formato string. Pero cuando
        //escribí el código no lo sabía, y ésta fué mi solución artesanal que funciona 10 puntos.
        //Cada objeto JSON viene separado por un operador "°" en un solo string. Ver "cargarLinksBlog.php".
        var jsonArray = this.responseText.split("°");
        
        //Acá veo cuántos llegaron. Van a ser siempre tres cuando esté todo en marcha, 
        //pero está programado para que puedan ser sólo dos o uno (porque ahora sólo hay uno).
        if(jsonArray.length == 3)
        {
            blog1 = JSON.parse(jsonArray[0]);
            blog2 = JSON.parse(jsonArray[1]);
            blog3 = JSON.parse(jsonArray[2]);
            bBlog1 = 1;
            bBlog2 = 1;
            bBlog3 = 1;
        }
        else if(jsonArray.length == 2)
        {
            blog1 = JSON.parse(jsonArray[0]);
            blog2 = JSON.parse(jsonArray[1]);            
            bBlog1 = 1;
            bBlog2 = 1;           
        }
        else if(jsonArray.length == 1)
        {
            blog1 = JSON.parse(jsonArray[0]);
            bBlog1 = 1;                 
        }
        
        //Dependiendo de si su bandera se levantó o no, modifico el innerHtml de estos elementos.
        //La magia de la notación JSON es que podes acceder a los pares clave/valor como si accedieras
        //a un atributo de un objeto en algún lenguaje POO. Un ejempl es blog1.guid que en el string 
        //al que le hice JSON.parse viajó cómo guid : valor. 
        if(bBlog1 == 1)
        {
            //document.getElementById("blog1").innerHTML = '<a href="' + blog1.guid + '" target="_blank">'+ blog1.post_title + '</a>';
            document.getElementById("blog1").innerHTML = blog1.post_title;
            $("#blog1").attr("href", blog1.guid);

        }
        if(bBlog2 == 1)
        {
            //document.getElementById("blog2").innerHTML = '<a href="' + blog2.guid + '" target="_blank">'+ blog2.post_title + '</a>';
            document.getElementById("blog2").innerHTML = blog2.post_title;
            $("#blog2").attr("href", blog2.guid);
        }
        if(bBlog3 == 1)
        {
            //document.getElementById("blog3").innerHTML = '<a href="' + blog3.guid + '" target="_blank">'+ blog3.post_title + '</a>';
            document.getElementById("blog3").innerHTML = blog3.post_title;
            $("#blog3").attr("href", blog3.guid);
        }        
    }
};

//Hago el request y lo mando. Esto es ajax. 
//Se puede enviar el pedido con información adentro.
//Hay que especificar una propiedad del xmlHttpRequest que se llama
//header algo y especificarle que tipo de información es la que viaja.
//Si es por POST, los parámetros van: xmlhttp.send(parametro). Si es por GET
//los parámetro viajan en la url: xmlhttp.open("GET", "./cargarLinksBlog.php?clave=valor&clave2=valor2", true); 
xmlhttp.open("GET", "cargarLinksBlog.php", true);
xmlhttp.send();
}