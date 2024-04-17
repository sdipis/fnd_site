<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$hospital = $_POST['hospital'];
$message = $_POST['message'];

// Email settings
$to = 'fnd_tester@dipidomain.com';
$subject = 'Doctor Partnership: New Form Submission';
$body = "Name: $name\nEmail: $email\nHospital/Clinic: $hospital\nMessage: $message";
$headers = "From: $email\r\nReply-To: $email\r\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo 'OK';
} else {
    http_response_code(500);
    echo 'Internal Server Error';
}
?>
