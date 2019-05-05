<?php 

  if (isset($_POST['submit'])) {
    $first_name = $_POST['firstname'];
    $last_name = $_POST['lastname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $mail_to = "grant.a.ballmer@gmail.com";
    $headers = "From: ".$email; 
    $txt = "You have received an e-mail from ".$first_name." ".$last_name;

    // add error handling


    mail($mail_to, 'new mail', $txt, $headers);
    header("Location: index.php?mailsend");
  }


?>