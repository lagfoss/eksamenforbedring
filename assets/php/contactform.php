<?php

if (isset($_POST['submit'])){
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];


  $mailTo = "lagfoss@gmail.com";
  $headers = "From: ".$mailFrom;
  $txt = "Du har modtaget en mail fra ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: send.html?mailsend");
}

?>
