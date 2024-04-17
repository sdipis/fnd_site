<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../css/main.css" type="text/css">

</head>
<body class="loginPage">
<div class="login-box">
 
  <form action="login.php" method="post">
    <div class="user-box">
      <input type="text" name="username" id="username" required="">
      <label for="username">Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="password" id="password" required="">
      <label for="password">Password</label>
    </div><center>
    <input type="submit" value="login">
    </center>
  </form>
</div>

</body>
</html>
