<?php   

$conexion=mysqli_connect("localhost","ARDMZQUALITY","Quality25072014$","ARDMZQUALITY_wp") or
die("Problemas con la conexión");

$query = "SELECT post_date, post_title, guid FROM wp_posts WHERE post_status='publish' AND post_type='post'";

$BDData = $conexion->query($query);

if ($BDData->num_rows > 0) {
    // output data of each row
    
    //Una variable para cada entrada.
   $blog1;
    $blog2;
    $blog3;

    //Banderas, por si llegara a haber menos de 3 entradas en total. 
    $bBlog1 = 0;
    $bBlog2 = 0;
    $bBlog3 = 0;
    
    //Fechas, para determinar cuáles son las últimas 3.
    $fecha1 = strtotime("1970-01-01 00:00:00");
    $fecha2 = strtotime("1970-01-01 00:00:00");
    $fecha3 = strtotime("1970-01-01 00:00:00");

    //Recorro todas las entradas y determino cuáles son las tres últimas.
    while($row = $BDData->fetch_assoc()) {

        if(strtotime($row["post_date"]) > $fecha1)
        {
            $blog1 = $row;
            $fecha1 = strtotime($row["post_date"]);
            $bBlog1 = 1;
        }        
        else if(strtotime($row["post_date"]) > $fecha2)
        {
            $blog2 = $row;
            $fecha2 = strtotime($row["post_date"]);
            $bBlog2 = 1;
        }
        else if(strtotime($row["post_date"]) > $fecha2)
        {
            $blog3 = $row;
            $fecha3 = strtotime($row["post_date"]);
            $bBlog3 = 1;
        }




    }

    mysqli_close($conexion);
    
    //Cadena de texto a ser devuelta por el php.
    $retStr = "";
    
    //Codificación a JSON y concatenación de objetos JSON en formato string, separados por un carácter '°'.
    if($bBlog1 == 1)
    {
        $retStr = $retStr . json_encode($blog1);
    }
    if($bBlog2 == 1)
    {
        $retStr = $retStr . '°' . json_encode($blog2);
    }
    if($bBlog3 == 1)
    {
        $retStr = $retStr . '°' . json_encode($blog3);
    }
    
}

//Envío del string que contiene toda la información necesaria para que el javascript opere. 
echo($retStr);

?>