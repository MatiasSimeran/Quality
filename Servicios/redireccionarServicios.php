<?php

//Booleanos que representan cada servicio.

$desaWeb = 0;
$videoMarca = 0;
$fotografia = 0;
$desaMobile = 0;
$seosem = 0;
$analytics = 0;
$publicidad = 0;
$redes = 0;
$disenio = 0;
$emarketing = 0;
$digitalmarketing = 0;
$planbasico = 0;
$planpremium = 0;
$plandeluxe = 0;

//Determinamos qué servicios se han seleccionado.
if(isset($_POST["desaWeb"]) && $_POST["desaWeb"] == "on")
 {
    $desaWeb = 1;
 }
if(isset($_POST["videoMarca"]) && $_POST["videoMarca"] == "on")
{
    $videoMarca = 1;
}
if(isset($_POST['fotografia']) && $_POST['fotografia'] == 'on')
{
    $fotografia = 1;
}
if(isset($_POST['desaMobile']) && $_POST['desaMobile'] == 'on')
{
    $desaMobile = 1;
}
if(isset($_POST['seosem']) && $_POST['seosem'] == 'on')
{
    $seosem = 1;
}
if(isset($_POST["analytics"]) && $_POST["analytics"] == "on")
{
    $analytics = 1;
}
if(isset($_POST['publicidad']) && $_POST['publicidad'] == 'on')
{
    $publicidad = 1;
}
if(isset($_POST['redes']) && $_POST['redes'] == 'on')
{
    $redes = 1;
}
if(isset($_POST['disenio']) && $_POST['disenio'] == 'on')
{
    $disenio = 1;
}
if(isset($_POST['emailmark']) && $_POST['emailmark'] == 'on')
{
    $emarketing = 1;
}
if(isset($_POST['digitalmark']) && $_POST['digitalmark'] == 'on')
{
    $digitalmarketing = 1;
}
if(isset($_POST['planbasico']))
{
    $planbasico = 1;
}
if(isset($_POST['planpremium']))
{
    $planpremium = 1;
}
if(isset($_POST['plandeluxe']))
{
    $plandeluxe = 1;
}
//Preparamos un archivo para volcar los datos.
$pArch = fopen("../Contacto/servicios.txt", "w");
$archString = ""; //Servirá de buffer previo al volcado de datos.

//Escribo el buffer.
if($desaWeb == 1)
$archString = $archString . "desaWeb" . "-";
if($videoMarca == 1)
$archString = $archString . "videoMarca" . "-";
if($fotografia == 1)
$archString = $archString . "fotografia" . "-";
if($desaMobile == 1)
$archString = $archString . "desaMobile" . "-";
if($seosem == 1)
$archString = $archString . "seosem" . "-";
if($analytics == 1)
$archString = $archString . "analytics" . "-";
if($publicidad == 1)
$archString = $archString . "publicidad" . "-";
if($redes == 1)
$archString = $archString . "redes" . "-";
if($disenio == 1)
$archString = $archString . "disenio" . "-";
if($emarketing == 1)
$archString = $archString . "emailmark" . "-";
if($digitalmarketing == 1)
$archString = $archString . "digitalmark" . "-";
if($planbasico == 1)
$archString = $archString . "planbasico" . "-";
if($planpremium == 1)
$archString = $archString . "planpremium" . "-";
if($plandeluxe == 1)
$archString = $archString . "plandeluxe" . "-";

//Escribo el archivo.
fwrite($pArch, $archString);

//Cierro el archivo.
fclose($pArch);

//Este archivo va a ser leído por un script de consultas, para determinar
//qué elementos de la lista de "Motivo" en consultas debe pre-cargar.

echo "<script>
window.location.href='./../Contacto';
</script>"


?>
