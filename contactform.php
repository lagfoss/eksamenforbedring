<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];


  $mailTo = "tca47@live.dk";
  $headers = "From: ".$mailFrom;
  $txt = "Tilmeding som frivillig fra ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers );
  header("Location: index.php?mailsend");
}



?>
