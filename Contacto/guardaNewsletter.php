<?php

//Incluyo la librería de excel que está en Contactos.
require_once  './PHPExcel/Classes/PHPExcel.php';

require_once "../newsletterMailchimp.php"; 

//Realizo la conexión a base de datos
$conexion=mysqli_connect("localhost","ARDMZQUALITY","Quality25072014$","ARDMZQUALITY_wp") or
    die("Problemas con la conexión");

//Hago la consulta e inserto valores.
//Como es el newsletter del footer, sólo va el mail y ese 1 es que se suscribió a newsletter.
mysqli_query($conexion,"insert into wp_Consultas(NombreCompleto,Email,Telefono,Motivo,Descripcion,nl,Fecha) values 
                       ('-','$_POST[txtEmail]','-','-','-',1,NOW())")
  or die("Problemas al insertar datos en la base de datos. Mensaje de error: ".mysqli_error($conexion));


mysqli_close($conexion);

//Esta dirección tiene que ser la de la página de inicio en el servidor. 
echo "<script>
alert('¡Se Ha Registrado Al Newsletter Con Éxito!');
window.location.href='./..';
</script>"

?>