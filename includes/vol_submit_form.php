<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$availability = $_POST['availability'];
$interests = $_POST['interests'];

// Email settings
$to = 'fnd_tester@dipidomain.com';
$subject = 'Volunteer: New Form Submission';
$message = "Name: $name\nEmail: $email\nPhone: $phone\nAvailability: $availability\nInterests: $interests";
$headers = "From: $email\r\nReply-To: $email\r\n";

// Send email
if (mail($to, $subject, $message, $headers)) {
    http_response_code(200);
    echo 'OK';
} else {
    http_response_code(500);
    echo 'Internal Server Error';
}
?>
