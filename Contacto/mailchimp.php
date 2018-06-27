<?php

  require_once "configmailchimp.php";

  $email = $_POST['mail'];
  $nombre = $_POST['nombre'];
  $phone = $_POST['telefono'];



  $data_center = substr($api_key, strpos($api_key, '-')+1);

  $url = 'https://'. $data_center .'.mailifyapis.com/v1/lists'. $list_id .'./ListaLanzamiento';

  $json = json_encode([
      'email_address' => $email,
      'status'        => 'subscribed',
      'merge_fields'  => [
        'FNAME'       => $nombre,
        'PHONE'       => $phone
      ]
  ]);

  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $api_key);
  curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_TIMEOUT, 10);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

  $result = curl_exec($ch);
  $status_code =curl_getinfo($ch, CURLINFO_HTTP_CODE);
  curl_close($ch);

?>
