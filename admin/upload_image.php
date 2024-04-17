<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $row['title']; ?></title>
    <link rel="stylesheet" href="sass/main.css" type="text/css">

</head>

<!-- single file upload form -->
<h3>Upload an Image:</h3>
<body>
<form action="upload.php" method="post" enctype="multipart/form-data">
    <label for="uploaded">Select an Image</label>
<input type="file" name="uploaded" id="uploaded"><br>
<input type="submit" value="upload">
</form>

<br><br><br>

<!-- multi upload form -->
<h3>Upload  Multiple Images:</h3>
<form action="multi_upload.php" method="post" enctype="multipart/form-data">
  <!-- enctype is needed if you're uploading anything but text -->
  Upload Images:<br />
  <input name="uploaded[]" type="file"><br>
  <input name="uploaded[]" type="file"><br>
  <input type="submit" value="upload">
</form>


</section>

</body>
</html>
