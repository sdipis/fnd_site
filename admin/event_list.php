<?php
session_start();

if (!$_SESSION['username']) {
    header('Location: login_form.php');
    exit(); // Ensure that no further code is executed after redirection
}

require_once('../includes/connect_event.php');

error_reporting(E_ALL);
ini_set('display_errors', 1);

$stmt = $pdo->prepare('SELECT id, title, description, featured_pic, type FROM events ORDER BY title ASC');
$stmt->execute();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add/Edit Projects</title>
    <link rel="stylesheet" href="../css/main.css" type="text/css">
    <script src="https://cdn.ckeditor.com/ckeditor5/37.0.1/classic/ckeditor.js"></script>

</head>
<body>
    <div class="admin-wrapper">

    <div class="floater">
        <p>You are logged in as: <?php echo $_SESSION['username']; ?></p>
        <ul>
        <li><a href="logout.php">Logout</a></li>
        </ul>
    </div>


        <ul class="event-list-container">
            <?php
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                echo '<li id="' . $row['title'] . '" class="event-object">' .
                    '<img class="detailsImage" src="../resources/events/' . $row['featured_pic'] . '" alt="Project Image">' .
                    '<p>'.$row['title'].'</p>'.
                    '<ul class="event-edit-links">' .
                    '<li><a href="edit_event.php?id=' . $row['id'] . '">edit</a></li>' .
                    '<li><a href="javascript:void(0);" onclick="confirmDelete(' . $row['id'] . ')">delete</a></li>
                    </ul>' .
                    '</li>';
            }

            $stmt = null;
            ?>
        </ul>

        <div class="edit-forms">

            <h2>Add a new article:</h2>
            <br>
            <form action="../admin/create_event.php" method="post">
                <div class="user-box">
                    <label for="title">Article Title: </label>
                    <input name="title" type="text" required><br><br>

                    <label for="featpic">Article Picture: </label>
                    <input name="featpic" type="text" value="<?php echo isset($_SESSION['featured_pic']) ? $_SESSION['featured_pic'] : ''; ?>" required><br><br>

                    <label for="desc">Article Description: </label>

                    <div id="editor" name="desc"></div><br><br>


                    <label for="type">Article Type: </label>
                    <select name="type">
                        <option value="article-event">Event</option>
                        <option value="article-text">Blog Post</option>
                    </select><br><br>

                    <label for="start">Start date:</label>
                    <input type="date" id="start-date" name="event-start" value="2024-01-01"/><br><br>

                    <label for="gallery_id">Gallery ID: </label>
                    <input name="gallery_id"></input><br><br>

                    <input name="submit" type="submit" value="Add Article">
                </div>
            </form>

            <p>Upload image before creating article</p>

<form action="upload.php" method="post" enctype="multipart/form-data">
    <label for="uploaded">Select an Image</label>
    <input type="file" name="uploaded" id="uploaded"><br>
    <input type="submit" value="upload">
</form>

        </div>
    </div>

    <script>
        // Enables a "are you sure?" dialog for the user when you click on "delete" for a project in the project list
        function confirmDelete(eventId) {
            // Display a confirmation dialog
            var confirmation = confirm("Are you sure you want to delete this project?");

            // If the user clicks "OK" in the confirmation dialog
            if (confirmation) {
                // Redirect to the delete_event.php script with the project ID
                window.location.href = 'delete_event.php?id=' + eventId;
            }
        }
        ClassicEditor
        .create(document.querySelector('#editor'))
        .catch(error => {
            console.error(error);
        });
    </script>
</body>
</html>
