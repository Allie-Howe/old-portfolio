<?php $name = $_POST['name'];
$email = $_POST['email'];
$subject =  $_POST['subject'];
$msg = $_POST['msg'];
$formcontent="From: $name \n Message: $msg";
$recipient = "alex.g.howe63@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>