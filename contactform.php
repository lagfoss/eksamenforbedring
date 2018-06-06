<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];


  $mailTo = "lagfoss@gmail.com, tca47@live.dk, sofie_feldborg@hotmail.com, bangster95@gmail.com";
  $headers = "From: ".$mailFrom;
  $txt = "Tilmeding som frivillig fra ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers );
  header("Location: index.php?mailsend");
}



?>
