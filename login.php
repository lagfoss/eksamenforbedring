<?php
$user = $_POST['user'];
$pass = $_POST['pass'];

if($user == "admin"
&& $pass == "admin")
{
/* sender os videre til klient siden*/
  header("Location:klient.html");
}
else
{
    if(isset($_POST))
    {?>
            <!DOCTYPE html>
            <html lang="da" dir="ltr">
            <head>
              <meta charset="utf-8">
              <title>Varde Middelalderfestival - Handelen med omverdenen</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="author" content="MMD 2. semester eksamensprojekt gruppe 14">
              <meta name="description" content="I middelaldrende var Varde købstad, toldsted og tingsted, dette
              er en oplagt mulighed for at skabe en historie, som omhandler det frie årsmarked" />
              <meta name="keywords" content="Varde, Middelalderfestival, Varde Å, købstad, toldsted, tingsted, 1442, handel,
               omverdenen, middelaldermarked, middelalderen, handel, byting, historie, Danmark" />
              <link rel="stylesheet" href="assets/css/styles.css">
              <script defer src="assets/js/script.js"></script>
              <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700" rel="stylesheet">
              <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicon/apple-touch-icon.png">
              <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon/favicon-32x32.png">
              <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon/favicon-16x16.png">
              <link rel="manifest" href="assets/images/favicon/site.webmanifest">
              <link rel="mask-icon" href="assets/images/favicon/safari-pinned-tab.svg" color="#5bbad5">
              <meta name="msapplication-TileColor" content="#da532c">
              <meta name="theme-color" content="#ffffff">
            </head>

            <body>
              <header>
                <div class="logo">
                  <a href="index.html"><img class="banner" src="assets/images/logo.png" alt="Varde Middelalderfestival banner"></a>
                </div>
              </header>
              <main>

                <div class="login-box animate">
                <form method="POST" action="login.php">
                        <label class="label"><b>Username</b></label>
                        <input type="text" name="user"></input>
                        <label class="label"><b>Password</b></label>
                        <input type="password" name="pass"></input>
                        <input type="submit" name="submit" value="LOGIN" class="knap1"></input>
                        </form>
                        <div>
                          <button class="knap1" onclick="window.location.href='index.html'">Gå tilbage</button>
                        </div>
                      </div>
            </main>
            </body>

            </html>

    <?}
}
?>
