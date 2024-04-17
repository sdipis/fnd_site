<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Include your connect.php file
include '../includes/connect_event.php';

// Retrieve the event ID from the URL
$eventId = isset($_GET['id']) ? $_GET['id'] : null;

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve data from the form
    $title = $_POST['title'];
    $featuredPic = $_POST['featured_pic'];
    $description = $_POST['description'];
    $galleryId = $_POST['gallery_id'];
    $date = $_POST['date'];

    // Update data in the events table
    $sql = "UPDATE events SET title = :title, `featured_pic` = :featuredPic, description = :description, `gallery_id` = :galleryId, date = :date WHERE id = :eventId";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':title', $title, PDO::PARAM_STR);
    $stmt->bindParam(':featuredPic', $featuredPic, PDO::PARAM_STR);
    $stmt->bindParam(':description', $description, PDO::PARAM_STR);
    $stmt->bindParam(':galleryId', $galleryId, PDO::PARAM_INT);
    $stmt->bindParam(':date', $date, PDO::PARAM_STR);
    $stmt->bindParam(':eventId', $eventId, PDO::PARAM_INT);

    try {
        $stmt->execute();
        // Set a session variable to indicate successful update
        $_SESSION['event_updated'] = true;
    } catch (PDOException $e) {
        // Display any SQL errors
        echo "Error: " . $e->getMessage();
    }
    
}

// Fetch the event data from the database
$sql = "SELECT * FROM events WHERE id = :eventId";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':eventId', $eventId, PDO::PARAM_INT);

try {
    $stmt->execute();

    // Check if the event is found
    if ($stmt->rowCount() > 0) {
        // Fetch the event details
        $event = $stmt->fetch(PDO::FETCH_ASSOC);
    } else {
        echo "No event found with ID $eventId";
        exit; // Exit if no event is found
    }
} catch (PDOException $e) {
    // Display any SQL errors
    echo "Error: " . $e->getMessage();
    exit; // Exit on error
}

// Close the database connection
$pdo = null;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editing <?php echo $event['title']?></title>
    <link rel="stylesheet" href="../css/main.css" type="text/css">
    <script src="https://cdn.ckeditor.com/ckeditor5/37.0.1/classic/ckeditor.js"></script>
</head>
<body>
    <div class="edit-page admin-wrapper">
        <div class="edit-page-form-cont">
            <form method="post" action="">
                <div class="edit-page-bottom-bar">
                    <div class="editor-image">
                        <img src="../resources/events/<?php echo $event['featured_pic']; ?>" ><br>
                    </div>
                    <div>
                        <label for="gallery_id">Gallery ID:</label>
                        <input type="number" name="gallery_id" value="<?php echo $event['gallery_id']; ?>" ><br>
                    </div>
                    <div>
                        <label for="date">Date:</label>
                        <input type="date" name="date" value="<?php echo $event['date']; ?>" ><br>
                    </div>
                    <div>
                        <label for="featured_pic">Featured Pic:</label>
                        <input type="text" name="featured_pic" id="a_pic" value="<?php echo $event['featured_pic']; ?>" ><br>
                    </div>
                </div>
                <div class="edit-page-main">
                    <label class="hidden" for="title">Title:</label>
                    <input type="text" name="title" id="a_title" value="<?php echo $event['title']; ?>" ><br>
                    <label class="hidden" for="desc">Article Description: </label>
                    <textarea name="description" style="display:none"><?php echo $event['description']; ?></textarea>
                    <div id="editor"></div><br><br>
                    <button class="fnd-button" type="submit"><span>Update Event</span></button>
                    <?php if(isset($_SESSION['event_updated']) && $_SESSION['event_updated']) : ?>
    <div id="notification" class="notification">
        Event updated successfully!
    </div>
    <?php unset($_SESSION['event_updated']); endif; ?>
                </div>
            </form>
        </div>
    </div>

    
</body>
</html>


<script>
        ClassicEditor
            .create(document.querySelector('#editor'), {})
            .then(editor => {
                editor.setData(`<?php echo htmlspecialchars_decode($event['description']); ?>`);
                editor.model.document.on('change:data', () => {
                    document.querySelector('textarea[name="description"]').value = editor.getData();
                });
            })
            .catch(error => {
                console.error(error);
            });
    </script>

<script>
        // Hide the notification after 5 seconds
        setTimeout(function() {
            var notification = document.getElementById('notification');
            if(notification) {
                notification.style.display = 'none';
            }
        }, 5000);
    </script>