<?php

if (isset($_POST['submit'])){
  $name = $_POST['navn'];
  $subject = $_POST['besked'];
  $mailFrom = $_POST['email'];



  $mailTo = "lagfoss@gmail.com, tca47@live.dk, sofie_feldborg@hotmail.com, bangster95@gmail.com";
  $headers = "From: ".$mailFrom;
  $txt = "Du har modtaget en mail fra ".$name.".\n\n".$subject;

  mail($mailTo, $subject, $txt, $headers);
  header("Location:tak.html");
}

?>
