<?php
require_once('../includes/connect_event.php');
error_reporting(E_ALL);
ini_set('display_errors', 1);

$query = "INSERT INTO events (title, description, gallery_id, date, featured_pic, type) VALUES (?, ?, ?, ?, ?, ?)";

try {
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(1, $_POST['title'], PDO::PARAM_STR);
    $stmt->bindParam(2, $_POST['desc'], PDO::PARAM_STR);
    $stmt->bindParam(3, $_POST['gallery_id'], PDO::PARAM_INT); // Assuming it's an integer

    $date = date('Y-m-d');
    $stmt->bindParam(4, $date, PDO::PARAM_STR);
    $stmt->bindParam(5, $_POST['featpic'], PDO::PARAM_STR);
    $stmt->bindParam(6, $_POST['type'], PDO::PARAM_STR);

    $stmt->execute();
    $last_id = $pdo->lastInsertId();

    // Redirect to event_list.php
    header('Location: event_list.php');
    exit(); // Ensure that no further code is executed after redirection
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
    exit; // Stop execution to prevent further issues
}
?>
