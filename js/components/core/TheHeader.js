import TheHamburgerComponent from './TheHamburgerMenu.js';
import TheMenuComponent from './TheMenu.js';

export default{
    name: 'TheHeaderComponent',
    template:
    `
    <div class="top-bar">

       <a class="logoLink noTablet" href="./">
         <img src="resources/svg/tlogo.svg" />
          </a>

         <nav id="main-nav">
         <h2 class="hidden">Main Navigation</h2>

         <menucomp></menucomp>
         </nav>

       <ul class="headerDonateButton noTablet">
          <li><a href="contact.html"><button class="fnd-button"><span>Donate</span></button></a></li>
       </ul>

       <nav id="main-nav">
       <h2 class="hidden">Main Navigation</h2>

       <transition name="menu">
         <hamburgercomp></hamburgercomp>
         </transition>
         </nav>
 </div>
    `,
    components:{
      hamburgercomp: TheHamburgerComponent,
      menucomp: TheMenuComponent,
    }
}