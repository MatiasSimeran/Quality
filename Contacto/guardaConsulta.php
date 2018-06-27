<?php


//Mirar guardaNewsletter. Este código hace lo mismo.

require_once  './PHPExcel/Classes/PHPExcel.php';

//Como los motivos pueden ser varios y es un multiselect, retorna como un array.
//Es preciso darle un formato 'string' a esa información para poder volcarla satisfactoriamente
//en la base de datos.
$arrayMotivos = $_POST['motivo'];
$strMotivo = "";

for($i = 0; $i < count($arrayMotivos) ; $i++)
{
    $strMotivo = $strMotivo.$arrayMotivos[$i].'/';
}

//Elimina el último caracter, que va a ser una '/' seguida de nada. Una prolijidad.
$strMotivo = substr($strMotivo, 0, -1);

//Si viene con el checkbox de "quiero recibir novedades" va a entrar acá.
if(isset($_POST['chkNewsLetter']) && $_POST['chkNewsLetter'] == 'on')
{
    //Se guarda la persona en mailchimp
    /**************************************************/
    require_once "mailchimp.php";
    /**************************************************/

    $conexion=mysqli_connect("localhost","ARDMZQUALITY","Quality25072014$","ARDMZQUALITY_wp") or
        die("Problemas con la conexión");

    mysqli_query($conexion,"insert into wp_Consultas(NombreCompleto,Email,Telefono,Motivo,Descripcion,nl,Fecha) values
                       ('$_POST[nombre]','$_POST[mail]','$_POST[telefono]','$strMotivo','$_POST[info]',1, NOW())")
      or die("Problemas en el select".mysqli_error($conexion));

      /*$query = "SELECT * FROM wp_Consultas";
      $BDData = $conexion->query($query);

    $objPHPExcel = new PHPExcel();
    //Activa la primer hoja de excel
    $ActiveSheet = $objPHPExcel->setActiveSheetIndex(0);
    //Escribe el encabezado
    $Header = array('Id', 'Nombre', 'E-Mail');
    $i=0;
    foreach($Header as $ind_el)
    {
	    //Convierte el indice a una locación compatible con excel
	    $Location = PHPExcel_Cell::stringFromColumnIndex($i) . '1';
	    $ActiveSheet->setCellValue($Location, $ind_el);
	    $i++;
    }

    $ActiveSheet->getColumnDimension('B')->setWidth(25);
    $ActiveSheet->getColumnDimension('C')->setWidth(25);



    $objPHPExcel->getActiveSheet()
            ->getStyle("A")
            ->getAlignment()
            ->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);

    $fila=2;
    $columna=0;

      if ($BDData->num_rows > 0)
      {
        while($row = $BDData->fetch_assoc())
        {
            if($row["nl"] == '1')
            {

                $Location = PHPExcel_Cell::stringFromColumnIndex($columna) . $fila;
                $ActiveSheet->setCellValue($Location, $row["id"]);

                $Location = PHPExcel_Cell::stringFromColumnIndex(++$columna) . $fila;
                $ActiveSheet->setCellValue($Location, $row["nombre"]);

                $Location = PHPExcel_Cell::stringFromColumnIndex(++$columna) . $fila;
                $ActiveSheet->setCellValue($Location, $row["mail"]);

                $fila++;
                $columna=0;


            }
        }
        $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');

        if(!file_exists("../NewsLetter/"))
            mkdir("../NewsLetter", 0777, false);

        $objWriter->save("../NewsLetter/NewsLetter.xlsx");
      }*/

    mysqli_close($conexion);
}
//Sino, va a entrar acá.
else
{

    $conexion=mysqli_connect("localhost","ARDMZQUALITY","Quality25072014$","ARDMZQUALITY_wp") or
        die("Problemas con la conexión a la base de datos");

    mysqli_query($conexion,"insert into wp_Consultas(NombreCompleto,Email,Telefono,Motivo,Descripcion,nl, Fecha) values
                       ('$_POST[nombre]','$_POST[mail]','$_POST[telefono]','$strMotivo','$_POST[info]',0,NOW())")
      or die("Problemas en el select".mysqli_error($conexion));

    mysqli_close($conexion);
}

$nombre = $_POST['nombre'];
$mailFrom = $_POST['mail'];
$info = $_POST['info'];
$mydate=getdate(date("U"));
$hoy = $mydate[weekday].",".$mydate[month]." ".$mydate[mday].",".$mydate[year];


$subject="Nueva consulta Contacto";
$mailTo = "matiassimeran@hotmail.com";
$headers = "From: ".$mailFrom;
$txt = "Recibiste una consulta de: ".$nombre.".\n\n".$info .".\n\n" .$hoy;
mail($mailTo, $subject, $txt, $headers);
header("Location:index.html");



?>
