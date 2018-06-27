<?php
    
    function vaciarServicios()
    {
        fopen("./servicios.txt", "w");
    }

    vaciarServicios();

?>