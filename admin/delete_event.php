<?php
require_once('../includes/connect_event.php');
$query = 'DELETE FROM events WHERE events.id = :eventId';
$stmt = $pdo->prepare($query);
$eventId = $_GET['id'];
$stmt->bindParam(':eventId', $eventId, PDO::PARAM_INT);
$stmt->execute();
$stmt = null;
header('Location: event_list.php');

?>