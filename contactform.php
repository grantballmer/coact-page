<?php 

  if (isset($_POST['submit'])) {
    $first_name = $_POST['firstname'];
    $last_name = $_POST['lastname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    // check required fields 

    $mail_to = "grant.a.ballmer@gmail.com";
    $subject = "From: ".$email; 
    $txt = "You have received an e-mail from ".$first_name." ".$last_name;

    $headers = "MIME-Version: 1.0" ."\r\n";
    $headers .="Content-Type:text/html;charset=UTF-8" . "\r\n";

    $headers .= "From: " .$first_name. "<".$email.">". "\r\n";



    // add error handling


    mail($mail_to, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
  }


?>