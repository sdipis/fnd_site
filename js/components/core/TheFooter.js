export default{
    name:'TheFooterComponent',
    template:`
    <footer id="footer">
         <div class="footer-left">
            <h3>GET IN TOUCH WITH US</h3>
            <hr>
            <br>
            <ul id="footer-contact" class="footerMenu">
               <li>
                  <p>Foundation Sixty6</p>
               </li>
               <li>
                  <p>Ontario, Canada</p>
               </li>
               <li>
                  <p>All Rights Reserved</p>
               </li>
            </ul>
         </div>
         <div class="footer-middle">
            <h3>HOW YOU CAN HELP</h3>
            <hr>
            <br>
            <ul id="footer-contact" class="footerMenu">
               <li>
                  <p>Donate</p>
               </li>
               <li>
                  <p>Spread Awareness</p>
               </li>
               <li>
                  <p>Follow Us</p>
               </li>
            </ul>
            <ul id="social-footer-links">
               <li><a class="social-links" href="#" id="tiktok"><i class="fa-brands fa-tiktok"></i></a></li>
               <li><a class="social-links" href="#" id="instagram"><i class="fa-brands fa-square-instagram"></i></a></li>
               <li><a class="social-links" href="#" id="facebook"><i class="fa-brands fa-facebook"></i></a></li>
            </ul>
         </div>
         <div class="footer-right">
            <h3>IMPORTANT LINKS</h3>
            <hr>
            <br>
            <nav>
               <ul id="footer-links" class="footerMenu">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms and Conditions</a></li>
                  <li><a href="#">Join the Team</a></li>
               </ul>
            </nav>
            <!-- <a id="foot-scroll" href="#main-nav">Top<i class="fa fa-long-arrow-up" aria-hidden="true"></i></a> -->
         </div>
      </footer>
    `
}