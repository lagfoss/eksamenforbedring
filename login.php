<?php
$user = $_POST['uname'];
$pass = $_POST['upw'];

if($uname == "admin"
&& $upw == "admin")
{
        include("klient.html");
}
else
{
    if(isset($_POST))
