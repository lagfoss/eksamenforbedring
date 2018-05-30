<?php

if (isset($_POST['submit'])){
  $name = $_POST['navn'];
  $subject = $_POST['beskrivelse'];
  $subject2 = $_POST['artikel'];
  $mailFrom = $_POST['email'];



  $mailTo = "lagfoss@gmail.com";
  $headers = "From: ".$mailFrom;
  $txt = "Du har modtaget en mail fra ".$name.".\n\n""Beskrivelse: ".$subject.".\n\n""Artikel:".$subject2;

  mail($mailTo, $subject, $txt, $headers);
  header("Location:send.html?mailsend");
}

?>
