<?php
$user = $_POST['uname'];
$pass = $_POST['upw'];

if($uname == "admin"
&& $upw == "admin")
{
        include("login.html");
}
else
{
    if(isset($_POST))
    {?>

            <form method="POST" action="login.php">
            User <input type="text" name="user"></input><br/>
            Pass <input type="password" name="pass"></input><br/>
            <input type="submit" name="submit" value="Go"></input>
            </form>
    <?}
}
?>
