<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Include your connect.php file
include 'includes/connect_event.php';

// Retrieve the event ID from the URL
$eventId = isset($_GET['id']) ? $_GET['id'] : null;

// Check if the event ID is provided
if ($eventId !== null) {
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
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $event['title']?></title>
    <link rel="stylesheet" href="css/main.css">

</head>

<body class="mainWrapper">

    <h1 class="hidden">Foundation Sixty6</h1>
    <header id="main-header">
        <a class="logoLink" href="./index.html">
<img src="./images/logo.png" class="logoBlock" alt="our logo" /></a>
  
  
  
          <nav class="d-menu mainNavBase" id="main-nav">
            <h2 class="hidden">Main Navigation</h2>
                
                <ul class="mainNav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>

                    <li><a href="news.html">News</a></li>
                    <li><a href="service.html">Services</a></li>
                    
                </ul></nav>
  
          <section class="p-menu1">
            <nav id="navbar" class="navigation" role="navigation">
              <input id="toggle1" class="toggle" type="checkbox" />
              <label class="hamburger1" for="toggle1">
                <div class="top"></div>
                <div class="meat"></div>
                <div class="bottom"></div>
              </label>
            
              <nav class="menu1">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>

                <li><a href="news.html">News</a></li>
                <li><a href="service.html">Services</a></li>

              </nav>
          </nav>
          </section>
          <ul>
          <li><a class="buttonzz" href="">Donate</a></li>
  </ul>
  
  
  
      
    </div>
  </div>
  </div>
    
      </header>

    <main class="articleSinglePage">

        <div class="articleBox">
            
                <img class="articleImage" src="<?php echo $event['featured_pic']; ?>" />



            <div class="blogs-con blogs-con-single-page">
            <div class="articleText">    
                <h2><?php echo $event['title']; ?></h2>
                    <h3><?php echo $event['date']; ?></h3>
        </div>
                <p class=""><?php echo $event['description']; ?></p>
                <a href="?id=<?php echo $event['id']; ?>" class="btn-1">Share...</a>
            </div>            </div>


        </div>
        </main>

        <footer id="footer">

<div class="footer-left">
    <h3>GET IN TOUCH WITH US</h3>
    <ul id="footer-contact" class="footerMenu">
        <li><p>Foundation Sixty6</p></li>
        <li><p>All Rights Reserved</p></li>
        <li><p>Ontario, Canada</p></li>
    </ul>
</div>

<div class="footer-middle">
    <h3>HOW YOU CAN HELP</h3>
    <ul id="footer-contact" class="footerMenu">
    <li><p>Donate</p></li>
    <li><p>Spread Awareness</p></li>
    <li><p>Join Our Team</p></li>
    </ul>
</div>

<div class="footer-right">
    <h3>IMPORTANT LINKS</h3>
    <nav>
        <ul id="footer-links" class="footerMenu">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
        </ul>
    </nav>
    <div class="footer-contact">
        <h3>Follow Us</h3>
        <div id="social-footer-links">
            <span><a class="social-links" href="#" id="tiktok"><i class="fa-brands fa-tiktok"></i></a></span>
            <span><a class="social-links" href="#" id="instagram"><i class="fa-brands fa-square-instagram"></i></a></span>
            <span><a class="social-links" href="#" id="facebook"><i class="fa-brands fa-facebook"></i></a></span>
        </div>
        
    </div>
</div>

</footer>
<!-- Back to top button -->
<script src="js/main.js" type="module"></script>
    </body>

<?php
            // Additional fields can be added similarly
        } else {
            echo "No event found with ID $eventId";
        }
    } catch (PDOException $e) {
        // Display any SQL errors
        echo "Error: " . $e->getMessage();
    }
} else {
    echo "Event ID is not provided in the URL";
}

// Close the database connection
$pdo = null;
?>
