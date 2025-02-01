<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'info@yourwebsite.com';

$email_subject = 'new Form submission';

$email_body = "User Name: $name.\n.
              "User Email: $vistor_email.\n.
              "subject: $subject.\n".
              "User Message: $message .\n";
    
$to = 'snbitsolutions2023@gmail.com';

$headers = "from: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";



mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html");
?>


