function agregarServicios(){

            if (window.XMLHttpRequest)
            {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp=new XMLHttpRequest();
            }
            else
            {// code for IE6, IE5
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var xmlDoc = xmlhttp.responseText;

            var serviciosArray = xmlDoc.split("-");
            serviciosArray.pop();


         for(var i=0; i<serviciosArray.length; i++)
            {
                if(serviciosArray[i] == "desaWeb")
                {
                    document.getElementById("desaWeb").selected = "selected";
                    $("#desaWeb").trigger("chosen:updated");
                    continue;
                }
                if(serviciosArray[i] == "videoMarca")
                {

                    document.getElementById("videoMarca").selected = "selected";
                    $("#videoMarca").trigger("chosen:updated");
                    continue;
                }
                if(serviciosArray[i] == "fotografia")
                {
                    document.getElementById("fotografia").selected = "selected";
                    $("#fotografia").trigger("chosen:updated");
                    continue;
                }
                if(serviciosArray[i] == "desaMobile")
                {
                    document.getElementById("desaMobile").selected = "selected";
                    $("#desaMobile").trigger("chosen:updated");
                    continue;
                }
                if(serviciosArray[i] == "seosem")
                {
                    document.getElementById("seosem").selected = "selected";
                    $("#seosem").trigger("chosen:updated");
                    continue;
                }
                if(serviciosArray[i] == "analytics")
                {
                    document.getElementById("analytics").selected = "selected";
                    $("#analytics").trigger("chosen:updated");
                    continue;
                }
                if(serviciosArray[i] == "publicidad")
                {
                    document.getElementById("publicidad").selected = "selected";
                    $("#publicidad").trigger("chosen:updated");
                    continue;
                }
                if(serviciosArray[i] == "redes")
                {
                    document.getElementById("redes").selected = "selected";
                    $("#redes").trigger("chosen:updated");
                    continue;
                }
                if(serviciosArray[i] == "disenio")
                {
                    document.getElementById("disenio").selected = "selected";
                    $("#disenio").trigger("chosen:updated");
                    continue;
                }
                if(serviciosArray[i] == "emailmark")
                {
                    document.getElementById("emailmark").selected = "selected";
                    $("#emailmark").trigger("chosen:updated");
                    continue;
                }
                if(serviciosArray[i] == "digitalmark")
                {
                    document.getElementById("digitalmark").selected = "selected";
                    $("#digitalmark").trigger("chosen:updated");
                    continue;
                }
                if(serviciosArray[i] == "planbasico")
                {
                    document.getElementById("planBasico").selected = "selected";
                    $("#planBasico").trigger("chosen:updated");
                    continue;
                }
                if(serviciosArray[i] == "planpremium")
                {
                    document.getElementById("planPremium").selected = "selected";
                    $("#planPremium").trigger("chosen:updated");
                    continue;
                }
                if(serviciosArray[i] == "plandeluxe")
                {
                    document.getElementById("planDeluxe").selected = "selected";
                    $("#planDeluxe").trigger("chosen:updated");
                    continue;
                }
            }

            $.ajax({ url: './vaciarServicios.php'});
                }
            };


            xmlhttp.open("GET","./servicios.txt",true);
            xmlhttp.send();

        }
